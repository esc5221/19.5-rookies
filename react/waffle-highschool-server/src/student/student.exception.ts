import { ErrorCode, WrrsException } from '../common/exceptions/wrrs-exception';
import { HttpStatus } from '@nestjs/common';

export class DuplicatedStudentException extends WrrsException {
  constructor() {
    super(
      ErrorCode.DUPLICATED_STUDENT,
      '같은 학년에 같은 이름이 존재합니다.',
      HttpStatus.BAD_REQUEST,
    );
  }
}
