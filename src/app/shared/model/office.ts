export class Office {
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
