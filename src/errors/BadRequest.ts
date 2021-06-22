class BadRequest extends Error {
  public readonly statusCode: number;

  public readonly message: string;

  constructor(message = 'Bad request') {
    super(message);

    this.message = message;

    this.statusCode = 400;
  }
}

export default BadRequest;
