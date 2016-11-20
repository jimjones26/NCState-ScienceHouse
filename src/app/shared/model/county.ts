export class County {

  static fromJson({$key, name}) {
    return new County($key, name);
  }

  static fromJsonArray(json: any[]): County[] {
    return json.map(County.fromJson);
  }

  constructor(
    public $key: string,
    public name: string
  ) { }

}
