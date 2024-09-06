import { Product } from '@prisma/client'

export type Props = {
	title: string
	products: Product[]
	className?: string
	listClassName?: string
	categoryId: number
	onIntersection?: (categoryId: number) => void
}
