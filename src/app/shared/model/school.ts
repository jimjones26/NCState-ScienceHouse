export class School {

  static fromJson({$key, name, street, city, state, zip, phone, fax, districtId}) {
    return new School($key, name, street, city, state, zip, phone, fax, districtId);
  }

  static fromJsonArray(json: any[]): School[] {
    return json.map(School.fromJson);
  }

  constructor(
    public $key: string,
    public name: string,
    public street: string,
    public city: string,
    public state: string,
    public zip: string,
    public phone: string,
    public fax: string,
    public districtId: string
  ) {}

}
