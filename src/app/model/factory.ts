export class Factory {

  constructor(
  public _id: any,
  public factoryTitle: string,
  public minValue: number,
  public maxValue: number,
  public children: Array<number>

) {}
}
