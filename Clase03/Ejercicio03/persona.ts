export abstract class Persona
{
  private _apellido:string;
  private _dni:number;
  private _nombre:string;
  private _sexo:string;

  public constructor(nombre:string,apellido:string,dni:number,sexo:string)
  {
    this._apellido = apellido;
    this._nombre = nombre;
    this._dni = dni;
    this._sexo = sexo;
  }

  public GetApellido():string
  {
    return this._apellido;
  }

  public GetNombre():string
  {
    return this._nombre;
  }

  public GetSexo():string
  {
    return this._sexo;
  }

  public GetDni():number
  {
    return this._dni;
  }

  public abstract Hablar(idioma:string):string;

  public ToString():string
  {
    return "Nombre: " + this._nombre + " - Apellido: " + this._apellido + " - Sexo: " + this._sexo + " - DNI: " + this._dni;
  }
}
