class Forbidden extends Error {
  public readonly statusCode: number;

  public readonly message: string;

  constructor(message = 'Forbidden') {
    super(message);

    this.message = message;

    this.statusCode = 403;
  }
}

export default Forbidden;
