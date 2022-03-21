export class ServerError extends Error {
  constructor(reason: string) {
    super('Server Error');
    this.name = `Server error: ${reason}.`;
  }
}
