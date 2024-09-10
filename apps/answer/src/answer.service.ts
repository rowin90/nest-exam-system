import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AnswerService {
  @Inject('EXAM_SERVICE')
  private examClient: ClientProxy;
  async getHello(): Promise<string> {
    return await firstValueFrom(this.examClient.send('sum', [1, 34, 6]));
  }
}
