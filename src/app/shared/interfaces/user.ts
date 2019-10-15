// Сообщения об ошибках в шаблоне USER TEmplate
export class UserTe {
  constructor(
    public id: number,
    public name: string,
    public role: string,
    public age?: number)
  {}
}

// Сообщения об ошибках из кода компонента USER COmponent
export class UserCo {
  constructor(
    public name?: string,
    public email?: string,
    public role?: string,
    public age?: number)
  {}
}
