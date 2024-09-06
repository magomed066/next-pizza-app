'use client'

import React, { FC } from 'react'
import { ProductsGroupList } from '@/entities'
import { useCategoriesStore } from '@/entities/categories'
import { Category, Ingredient, Product, ProductItem } from '@prisma/client'

type Props = {
	categories: (Category & {
		products: (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
	})[]
}

export const ProductsListWidget: FC<Props> = ({ categories }) => {
	const { setActiveCategoryId } = useCategoriesStore()

	return (
		<>
			{categories.map((category) =>
				category.products.length ? (
					<ProductsGroupList
						key={category.id}
						onIntersection={setActiveCategoryId}
						title={category.name}
						categoryId={category.id}
						products={category.products}
					/>
				) : null,
			)}
		</>
	)
}
