export class Charity{
    public name;
    public description;
    public image;
    public keywords;
    public phone;
    public added;
    constructor(public n: string, public d: string, public i: string, public k: Array<String>, public p: string, public a:number){
        this.name = n;
        this.description = d;
        this.image = i;
        this.keywords = k;
        this.phone = p;
        this.added = a;
    }
    public toString = () : string => {
        return this.name;
    }
}