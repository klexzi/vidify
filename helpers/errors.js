class CustomError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

export class FetchError extends CustomError {
  constructor(message) {
    super(message);
  }
}
