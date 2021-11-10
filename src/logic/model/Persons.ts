import Person from "./Person";

export default class Persons {
  public static getList(): Person[] {
    return [
      Person.create("Ahmed", [
        new Date("2021-02-10 10:23:00+0000"),
        new Date("2021-02-10 10:23:00+0000"),
        new Date("2021-02-10 10:23:00+0000"),
      ]),
      Person.create("Renorram Brandão", [
        new Date("2021-02-10 10:23:00+0000"),
        new Date("2021-02-10 10:23:00+0000"),
      ]),
      Person.create("Roy", [new Date("2021-02-10 10:23:00+0000")]),
      Person.create("Adam", []),
    ];
  }
}
