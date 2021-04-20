export class Food {
    constructor(
        readonly id: String,
        readonly name: string,
        readonly description: string,
        readonly price: number,
        readonly imageUrl: string
    ) { }
}