export interface Products {
    id:number;
    title:string;
    description:string;
    category:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    tags:string[];
    brand:string;
    sku:string;
    weight:number;
    dimensions: {
        width:number;
        height:number;
        dept:number
    }
    warrantyInformation: string;
    shippingInformation:string;
    availabilityStatus:string;
    reviews:ProductReviews[];
    returnPolicy:string;
    minimumOrderQuantity:number;
    meta:ProductMeta;
    images:string;
    thumbnail:string;
}

export interface ProductReviews {
    rating:number;
    comment:string;
    date:Date;
    reviewerName:string;
    reviewerEmail:string;
}

export interface ProductMeta {
    createdAt:Date;
    updatedAt:Date;
    barcode:string;
    qrCode:string;
}