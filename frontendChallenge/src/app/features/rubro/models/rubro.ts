export class Rubro{
  constructor(
    public nombre:string,
    public codigo:string,
    public id?:string,
  ){}

  public static adapt(item: any): Rubro {
    return new Rubro(
      item.nombre,
      item.codigo,
      item.id,
    );
  }
}
