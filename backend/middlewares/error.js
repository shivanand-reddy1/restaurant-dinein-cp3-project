// This is a custom Error class that allows us to add a status code
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message); // Call the constructor of the parent Error class
    this.statusCode = statusCode;
  }
}

// This is the middleware function that will be called by Express
export const errorMiddleware = (err, req, res, next) => {
  // If the error doesn't have a specific message, default to a generic one
  err.message = err.message || "Internal Server Error!";
  // If the error doesn't have a specific status code, default to 500 (Server Error)
  err.statusCode = err.statusCode || 500;

  // Send a structured JSON error response to the frontend
  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;