export interface IProduct {
  _id: string
  name: string
  subcategories: string
  typeProduct: string
  brand: string
  photo: string[]
  dimensions: string[]
  description: string
  price: number
  discountPrice?: number
  quantity: number
  __v: number
}

export interface ICategory {
  _id: string
  name: string
  __v: number
}

export interface ISubcategories {
  _id: string
  name: string
  category: string
  floorCategory: string
  __v: number
}
