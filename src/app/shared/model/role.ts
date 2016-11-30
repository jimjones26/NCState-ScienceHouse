export class Role {

  static fromJson({$key, name}) {
    return new Role($key, name);
  }

  static fromJsonArray(json: any[]): Role[] {
    return json.map(Role.fromJson);
  }

  constructor(
    public $key: string,
    public name: string
  ) { }

}
