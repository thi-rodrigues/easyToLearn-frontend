export class Filter {
    page = 0;
    rows = 10;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}