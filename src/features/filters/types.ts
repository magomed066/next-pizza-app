export type Props = {
	className?: string
}

export type PriceState = {
	priceFrom: number
	priceTo: number
}

export type QueryFilters = PriceState & {
	pizzaTypes: string
	sizes: string
	ingredients: string
}
