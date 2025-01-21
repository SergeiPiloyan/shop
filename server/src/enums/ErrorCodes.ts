export enum ErrorCode {
  OK = 0,
  INTERNAL_ERROR = 1,
  BAD_REQUEST = 2,
  ACCESS_DENIED = 3,
  NOT_FOUND = 4,
  WRONG_CREDENTIALS = 5,
  UNAUTHORIZED = 6,
  VALIDATION = 7,
  TOO_MANY_REQUESTS = 8,
  DB_GENERAL_ERROR = 9,
}

export const ErrorInfo = {
  [ErrorCode.OK]: { message: "Success.", statusCode: 200 },
  [ErrorCode.INTERNAL_ERROR]: { message: "Internal error.", statusCode: 500 },
  [ErrorCode.BAD_REQUEST]: { message: "Bad request.", statusCode: 400 },
  [ErrorCode.ACCESS_DENIED]: { message: "Access denied.", statusCode: 403 },
  [ErrorCode.NOT_FOUND]: { message: "Not found.", statusCode: 404 },
  [ErrorCode.WRONG_CREDENTIALS]: {
    message: "Wrong Credentials.",
    statusCode: 401,
  },
  [ErrorCode.UNAUTHORIZED]: { message: "Unauthorized error.", statusCode: 401 },
  [ErrorCode.VALIDATION]: { message: "Invalid request.", statusCode: 422 },
  [ErrorCode.TOO_MANY_REQUESTS]: {
    message: "Too Many Requests.",
    statusCode: 429,
  },
  [ErrorCode.DB_GENERAL_ERROR]: {
    message: "DB General error.",
    statusCode: 500,
  },
};
