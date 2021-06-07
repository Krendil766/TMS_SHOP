class ErrorHandler extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
    request(message) {
        return new ErrorHandler(404, message)
    }
}

module.exports = ErrorHandler;