export class Office {

  static fromJson({$key, name, url, street, city, state, zip, phone, fax}) {
    return new Office($key, name, url, street, city, state, zip, phone, fax);
  }

  static fromJsonArray(json: any[]): Office[] {
    return json.map(Office.fromJson);
  }

  constructor(
    public $key: string,
    public name: string,
    public url: string,
    public street: string,
    public city: string,
    public state: string,
    public zip: string,
    public phone: number,
    public fax: number
  ) { }

}
