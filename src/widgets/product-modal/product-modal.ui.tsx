'use client'

import React, { FC } from 'react'
import { Props } from './types'
import { Dialog, DialogContent } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { useRouter } from 'next/navigation'
import { ChoosePizzaFormFeature, ChooseProductFormFeature } from '@/features'

export const ProductModal: FC<Props> = ({ className, product }) => {
	const router = useRouter()

	const isPizzaForm = Boolean(product.items[0].pizzaType)

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className,
				)}
			>
				{isPizzaForm ? (
					<ChoosePizzaFormFeature
						name={product.name}
						imageUrl={product.imageUrl}
						items={product.items}
						ingredients={product.ingredients}
					/>
				) : (
					<ChooseProductFormFeature
						name={product.name}
						imageUrl={product.imageUrl}
						items={product.items}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
