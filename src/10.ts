export class Student {
  name = 'John Doe';
  age = 25;

  constructor(private email: string) {}

  getEmail(): string {
    return this.email;
  }
}
