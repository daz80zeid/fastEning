export class CustomError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

export class HttpError extends CustomError {
    constructor(message: string) {
        super(message, 400);
    }
}
export class Unauthorized extends CustomError {
    constructor(message: string) {
        super(message, 401);
    }
}
export class Forbidden extends CustomError {
    constructor(message: string) {
        super(message, 403);
    }
}
export class NotFound extends CustomError {
    constructor(message: string) {
        super(message, 404);
    }
}
export class NetworkError extends CustomError {
    constructor(message: string) {
        super(message, 503);
    }
}
export class TimeoutError extends CustomError {
    constructor(message: string) {
        super(message, 408);
    }
}
export class InternalError extends CustomError{
    constructor(message: string) {
        super(message, 500);
    }
}
export class BadGateway extends CustomError{
    constructor(message: string) {
        super(message, 502);
    }
}
export class TemporaryUnavailable extends CustomError{
    constructor(message: string) {
        super(message, 503);
    }
}