export default class SiteModel {
    private id: number;
    private name: string;
    private typename: string

    constructor(id: number, name: string, typename: string) {
        this.id = id;
        this.name = name;
        this.typename = typename
    }

}
