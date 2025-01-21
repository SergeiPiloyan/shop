import { ErrorInfo } from "../enums/ErrorCodes";
import { ErrorCode } from "../enums/ErrorCodes";

export class ApiError extends Error {
  status: number;
  message: string;

  constructor(errorCode: ErrorCode) {
    super();

    this.status = ErrorInfo[errorCode].statusCode;
    this.message = ErrorInfo[errorCode].message;
  }

  static handleError(errorCode: ErrorCode) {
    return new ApiError(errorCode);
  }
}
