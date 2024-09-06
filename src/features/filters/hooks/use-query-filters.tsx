'use client'

import { useEffect, useRef } from 'react'
import { Filters } from './use-filters'
import { useRouter } from 'next/navigation'
import QueryString from 'qs'

export const useQueryFilters = (filters: Filters) => {
	const isMounted = useRef(false)
	const router = useRouter()

	useEffect(() => {
		if (isMounted.current) {
			const params = {
				...filters.prices,
				pizzaTypes: Array.from(filters.pizzaTypes),
				sizes: Array.from(filters.sizes),
				ingredients: Array.from(filters.selectedIngredients),
			}

			const query = QueryString.stringify(params, {
				arrayFormat: 'comma',
			})

			router.push(`?${query}`, {
				scroll: false,
			})
		}

		isMounted.current = true
	}, [filters, router])
}
