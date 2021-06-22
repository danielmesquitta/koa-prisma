class AppError extends Error {
  public readonly name: string;

  public readonly message: string;

  public readonly statusCode: number;

  constructor(statusCode = 400, message: string) {
    super(message);

    this.message = message;

    this.statusCode = statusCode;
  }
}

export default AppError;
