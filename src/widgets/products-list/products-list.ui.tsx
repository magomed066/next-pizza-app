'use client'

import React from 'react'
import { ProductsGroupList } from '@/entities'
import { useCategoriesStore } from '@/entities/categories'

export const ProductsListWidget = () => {
	const { setActiveCategoryId } = useCategoriesStore()

	return (
		<>
			<ProductsGroupList
				onIntersection={setActiveCategoryId}
				title="Пиццы"
				products={[
					{ id: 2 },
					{ id: 3 },
					{ id: 4 },
					{ id: 5 },
					{ id: 6 },
					{ id: 7 },
				]}
				categoryId={1}
			/>

			<ProductsGroupList
				onIntersection={setActiveCategoryId}
				title="Комбо"
				products={[
					{ id: 2 },
					{ id: 3 },
					{ id: 4 },
					{ id: 5 },
					{ id: 6 },
					{ id: 7 },
				]}
				categoryId={2}
			/>
		</>
	)
}
