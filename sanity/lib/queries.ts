import { defineQuery } from "next-sanity";

export const allproducts = defineQuery (`
    *[_type == "product"]{
    _id,
    name,
    price,
    category,
    inventory,
    color,
    status,
    description,
    "imageUrl": image.asset-> url
    }`)
    export const fourPro = defineQuery (`
        *[_type == "product"] [0..3]{
        _id,
        name,
        price,
        category,
        inventory,
        color,
        status,
        description,
        "imageUrl": image.asset-> url
        }`)