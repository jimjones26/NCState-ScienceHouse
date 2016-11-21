export class County {

  static fromJson({$key, name, officeId}) {
    return new County($key, name, officeId);
  }

  static fromJsonArray(json: any[]): County[] {
    return json.map(County.fromJson);
  }

  constructor(
    public $key: string,
    public name: string,
    public officeId: string
  ) { }

}
