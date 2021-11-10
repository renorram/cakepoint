export default class Person {
  constructor(
    public readonly name: string,
    public readonly timestamps: Date[] = []
  ) {}

  public get points() {
    return this.timestamps.length;
  }

  public static create(name: string, timestamps: Date[] = []): Person {
    return new this(name, timestamps);
  }
}
