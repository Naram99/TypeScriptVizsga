export class Type {
    constructor(public name: string) {}
}

export class Music extends Type {
    public artists: string[];

    constructor(name: string, artists: string[]) {
        super(name);
        this.artists = artists
    }
}

export class Art extends Type {
    public paintings: string[];

    constructor(name: string, paintings: string[]) {
        super(name);
        this.paintings = paintings;
    }
}