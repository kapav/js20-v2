export class User {
  constructor(
    public id: number,
    public name: string,
    public role: string,
    public age?: number)
  {}
}

// Сообщения об ошибках из кода компонента
export class UserEm {
  constructor(
    public name?: string,
    public email?: string,
    public role?: string,
    public age?: number)
  {}
}
