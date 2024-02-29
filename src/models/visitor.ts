export class Visitor {
    constructor (
        private _id: number,
        private _name: string
    ) {}

    
    public get id() : number {
        return this._id;
    }

    
    public set id(v : number) {
        if(v > 0)
            this._id = v;
    }

    
    public get name() : string {
        return this._name;
    }

    
    public set name(v : string) {
        if(v !== "")
            this._name = v;
    }
    
    
    
}