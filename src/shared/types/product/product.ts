import { pizzaSizeMap, pizzaTypeMap } from '@/shared/config'
import { Ingredient, Product, ProductItem } from '@prisma/client'

export type IProduct = Product & {
	items: ProductItem[]
	ingredients: Ingredient[]
}

export type PizzaType = keyof typeof pizzaTypeMap
export type PizzaSize = keyof typeof pizzaSizeMap
