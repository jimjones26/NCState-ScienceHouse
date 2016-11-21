export class District {

  static fromJson({$key, name, countyId}) {
    return new District($key, name, countyId);
  }

  static fromJsonArray(json: any[]): District[] {
    return json.map(District.fromJson);
  }

  constructor(
    public $key: string,
    public name: string,
    public countyId: string
  ) { }
}
