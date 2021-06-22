class ValidationFailed extends Error {
  public readonly statusCode: number;

  public readonly message: string;

  constructor(message = 'Validation failed') {
    super(message);

    this.message = message;

    this.statusCode = 422;
  }
}

export default ValidationFailed;
