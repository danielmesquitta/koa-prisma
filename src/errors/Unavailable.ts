class Unavailable extends Error {
  public readonly statusCode: number;

  public readonly message: string;

  constructor(message = 'Service Unavailable') {
    super(message);

    this.message = message;

    this.statusCode = 503;
  }
}

export default Unavailable;
