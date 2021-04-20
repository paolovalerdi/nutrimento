import { Food } from "./food";

export class OrderFood {
    constructor(
        readonly instructions: string,
        readonly quantity: number,
        readonly food: Food
    ) {}
}