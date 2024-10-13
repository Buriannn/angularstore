import { ICategory } from "./icategory";

export interface IProduct {
    id: number,
    title: string,
    description: string,
    category: ICategory,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number,
    }
}
