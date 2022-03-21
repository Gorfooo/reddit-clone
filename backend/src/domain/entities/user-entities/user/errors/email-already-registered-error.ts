export class EmailAlreadyRegisteredError extends Error implements DomainError {
  constructor(email: string) {
    super(`Email já registrado: ${email}`);
    this.name = 'EmailAlreadyRegisteredError';
  }
}
