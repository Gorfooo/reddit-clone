export class UserNotFoundError extends Error implements DomainError {
  constructor() {
    super(`Usuário não encontrado`);
    this.name = 'UserNotFoundError';
  }
}
