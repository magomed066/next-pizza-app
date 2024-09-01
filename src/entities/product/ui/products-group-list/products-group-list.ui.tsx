'use client'

import React, { FC, useEffect, useRef } from 'react'
import { Props } from './types'
import { ProductCard } from '../product-card/product-card.ui'
import { Title } from '@/shared/ui'
import { useIntersection } from 'react-use'

export const ProductsGroupList: FC<Props> = ({
	className,
	title,
	products,
	categoryId,
	onIntersection,
}) => {
	const categoryRef = useRef<HTMLDivElement | null>(null)

	const intersection = useIntersection(categoryRef, {
		threshold: 0.4,
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			onIntersection?.(categoryId)
		}
	}, [intersection?.isIntersecting, categoryId])

	return (
		<div className={className} id={title} ref={categoryRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className="grid grid-cols-3 gap-[50px]">
				{products.map((item, i) => (
					<ProductCard
						key={item.id}
						name="Маргарита"
						id={i}
						imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
						price={390}
					/>
				))}
			</div>
		</div>
	)
}
