'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import { useSet } from 'react-use'

export type PriceState = {
	priceFrom?: number
	priceTo?: number
}

export type QueryFilters = PriceState & {
	pizzaTypes: string
	sizes: string
	ingredients: string
}

export interface Filters {
	sizes: Set<string>
	pizzaTypes: Set<string>
	selectedIngredients: Set<string>
	prices: PriceState
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceState, value: number) => void
	setPizzaTypes: (value: string) => void
	setSizes: (value: string) => void
	setSelectedIngredients: (value: string) => void
}

export const useFilters = () => {
	const router = useRouter()
	const params = useSearchParams() as unknown as Map<keyof QueryFilters, string>

	const [
		selectedIngredients,
		{ toggle: toggleIngredients, reset: resetIngredients },
	] = useSet(new Set<string>(params.get('ingredients')?.split(',')))

	const [sizes, { toggle: toggleSizes, reset: resetSizes }] = useSet<string>(
		new Set(params.get('sizes') ? params.get('sizes')?.split(',') : []),
	)

	const [pizzaTypes, { toggle: toggleTypes, reset: resetTypes }] =
		useSet<string>(
			new Set(
				params.get('pizzaTypes') ? params.get('pizzaTypes')?.split(',') : [],
			),
		)

	const [prices, setPrice] = useState<PriceState>({
		priceFrom: Number(params.get('priceFrom')) || undefined,
		priceTo: Number(params.get('priceTo')) || undefined,
	})

	const handlePrice = (name: keyof PriceState, value: string) => {
		setPrice((prev) => ({ ...prev, [name]: Number(value) }))
	}

	const clearAllFilters = () => {
		resetSizes()
		resetTypes()
		resetIngredients()

		setPrice({
			priceFrom: 0,
			priceTo: 1000,
		})
	}

	const enableClearingFilters = useMemo(() => {
		const changedPriceFrom = prices.priceFrom && prices.priceFrom > 0

		const changedPriceTo = prices.priceTo && prices.priceTo < 1000

		return (
			sizes.size > 0 ||
			pizzaTypes.size > 0 ||
			selectedIngredients.size > 0 ||
			changedPriceFrom ||
			changedPriceTo
		)
	}, [sizes, pizzaTypes, selectedIngredients, prices.priceFrom, prices.priceTo])

	const filters = useMemo(
		() => ({
			sizes,
			pizzaTypes,
			selectedIngredients,
			prices,
			setPrices: handlePrice,
			setPizzaTypes: toggleTypes,
			setSizes: toggleSizes,
			setSelectedIngredients: toggleIngredients,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[sizes, pizzaTypes, selectedIngredients, prices],
	)

	return { ...filters, enableClearingFilters, clearAllFilters }
}
