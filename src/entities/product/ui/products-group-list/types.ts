export type Props = {
	title: string
	products: any[]
	className?: string
	listClassName?: string
	categoryId: number
	onIntersection?: (categoryId: number) => void
}
