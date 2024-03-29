import { Type } from "./type";
import { Visitor } from "./visitor";

export class Event {
    constructor(
        private _id: number,
        public name: string,
        public location: string,
        public date: Date,
        public type: Type,
        public visitors: Map<number, Visitor>
    ) {}

    
    public get id() : number {
        return this._id;
    }

    
    public set id(v : number) {
        if(v > 0)
            this._id = v;
    }

    setVisitor(visitor: Visitor): void {
        this.visitors.set(visitor.id, visitor);
    }

    removeVisitor(id: number): void {
        this.visitors.delete(id);
    }

    listVisitors(): void {
        this.visitors.forEach(visitor => {
            console.log(visitor.name);
        })
    }
}