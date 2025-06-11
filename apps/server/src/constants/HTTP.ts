interface HttpCode {
  SUCCESS: number
  ERROR: number
  UNAUTHORIZED: number
  FORBIDDEN: number
  NOT_FOUND: number
  BAD_REQUEST: number
  INTERNAL_SERVER_ERROR: number
}

interface HttpMessage {
  SUCCESS: string
  ERROR: string
  UNAUTHORIZED: string
  FORBIDDEN: string
  NOT_FOUND: string
  BAD_REQUEST: string
  INTERNAL_SERVER_ERROR: string
}

interface HttpStatus {
  SUCCESS: number
  CREATED: number
  NO_CONTENT: number
  BAD_REQUEST: number
  UNAUTHORIZED: number
  FORBIDDEN: number
  NOT_FOUND: number
  INTERNAL_SERVER_ERROR: number
}

const HTTP_CODE: HttpCode = {
  SUCCESS: 0, // 成功
  ERROR: 1, // 错误
  UNAUTHORIZED: 401, // 未授权
  FORBIDDEN: 403, // 禁止访问
  NOT_FOUND: 404, // 未找到
  BAD_REQUEST: 400, // 请求错误
  INTERNAL_SERVER_ERROR: 500, // 服务器错误
}

const HTTP_MESSAGE: HttpMessage = {
  SUCCESS: 'success',
  ERROR: 'error',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden',
  NOT_FOUND: 'not found',
  BAD_REQUEST: 'bad request',
  INTERNAL_SERVER_ERROR: 'internal server error',
}

const HTTP_STATUS: HttpStatus = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}

// 聚合
const HTTP_CODE_MESSAGE = {
  SUCCESS: {
    code: HTTP_CODE.SUCCESS,
    message: HTTP_MESSAGE.SUCCESS,
  },
  ERROR: {
    code: HTTP_CODE.ERROR,
    message: HTTP_MESSAGE.ERROR,
  },
  UNAUTHORIZED: {
    code: HTTP_CODE.UNAUTHORIZED,
    message: HTTP_MESSAGE.UNAUTHORIZED,
  },
  FORBIDDEN: {
    code: HTTP_CODE.FORBIDDEN,
    message: HTTP_MESSAGE.FORBIDDEN,
  },
  NOT_FOUND: {
    code: HTTP_CODE.NOT_FOUND,
    message: HTTP_MESSAGE.NOT_FOUND,
  },
  BAD_REQUEST: {
    code: HTTP_CODE.BAD_REQUEST,
    message: HTTP_MESSAGE.BAD_REQUEST,
  },
  INTERNAL_SERVER_ERROR: {
    code: HTTP_CODE.INTERNAL_SERVER_ERROR,
    message: HTTP_MESSAGE.INTERNAL_SERVER_ERROR,
  },
}

export {
  HTTP_CODE,
  HTTP_MESSAGE,
  HTTP_STATUS,
  HTTP_CODE_MESSAGE,
}

export type {
  HttpCode,
  HttpMessage,
  HttpStatus,
}