class NotFound extends Error {
  public readonly statusCode: number;

  public readonly message: string;

  constructor(message = 'Not found') {
    super(message);

    this.message = message;

    this.statusCode = 404;
  }
}

export default NotFound;
