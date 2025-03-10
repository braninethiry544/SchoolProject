export class Student {
  private _name: string;
  private _age: number;
  private _grade: number;

  constructor(name: string, age: number, grade: number) {
    this._name = name;
    this._age = age;
    this._grade = grade;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }

  public get grade(): number {
    return this._grade;
  }

  public set grade(value: number) {
    this._grade = value;
  }
}
