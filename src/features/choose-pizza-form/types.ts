import { Ingredient, ProductItem } from '@prisma/client'

export type Props = {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	onClickAdd?: VoidFunction
	className?: string
}
