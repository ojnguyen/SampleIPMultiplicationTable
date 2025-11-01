class Model {
    values: number[];

    constructor(initial: number[]) {
        this.values = initial;
    }

    getValue(idx: number) : number  {
        return this.values[idx];
    }

    remove(idx: number) : void {
        this.values.splice(idx, 1);
    }

    extend() : void {
        this.values.push(this.values[this.values.length - 1] * 2);
    }
}

export default Model;