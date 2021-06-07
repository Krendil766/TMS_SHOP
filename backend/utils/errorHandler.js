class ErrorHandler extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
    request(message) {
        return new ErrorHandler(404, message)
    }
    internal(message) {
        return new ApiError(500, message);
    }

    forbidden(message) {
        return new ApiError(403, message);
    }
}

module.exports = ErrorHandler;