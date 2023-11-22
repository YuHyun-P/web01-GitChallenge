import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Logger } from 'winston';
import { Model } from 'mongoose';
import { Session } from './schema/session.schema';
import { ObjectId } from 'typeorm';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) private sessionModel: Model<Session>,
    @Inject('winston') private readonly logger: Logger,
  ) {
    const testSession = new this.sessionModel({
      problems: {},
    });
    testSession.save();
  }

  async createSession(): Promise<string> {
    const session = new this.sessionModel({
      problems: {},
    });
    return await session.save().then((session) => {
      this.logger.log('info', `session ${session._id as ObjectId} created`);
      return (session._id as ObjectId).toString('hex');
    });
  }

  async getContainerIdBySessionId(
    sessionId: string,
    problemId: number,
  ): Promise<string> {
    const session = await this.getSessionById(sessionId);

    if (!session.problems.get(problemId)) {
      session.problems.set(problemId, {
        status: 'solving',
        logs: [],
        containerId: '',
      });
      this.logger.log('info', `session ${session._id as ObjectId} updated`);
      this.logger.log(
        'info',
        `session's new quizId: ${problemId}, document created`,
      );
      await session.save();
    } else {
      this.logger.log(
        'info',
        `containerId: ${session.problems.get(problemId)?.containerId}`,
      );
    }
    return session.problems.get(problemId)?.containerId;
  }

  async setContainerBySessionId(
    sessionId: string,
    problemId: number,
    containerId: string,
  ): Promise<void> {
    const session = await this.getSessionById(sessionId);
    if (!session.problems.get(problemId)) {
      throw new Error('problem not found');
    }
    this.logger.log(
      'info',
      `setting ${sessionId}'s containerId as ${containerId}`,
    );
    session.problems.get(problemId).containerId = containerId;
    session.save();
  }

  async pushLogBySessionId(
    command: string,
    sessionId: string,
    problemId: number,
  ): Promise<void> {
    const session = await this.getSessionById(sessionId);
    if (!session.problems.get(problemId)) {
      throw new Error('problem not found');
    }
    session.problems.get(problemId).logs.push(command);
    session.save();
  }

  private async getSessionById(id: string): Promise<Session> {
    return await this.sessionModel.findById(id);
  }
}