class Unauthorized extends Error {
  public readonly statusCode: number;

  public readonly message: string;

  constructor(message = 'Unauthorized') {
    super(message);

    this.message = message;

    this.statusCode = 401;
  }
}

export default Unauthorized;
