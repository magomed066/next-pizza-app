'use client'

import React, { FC, useState } from 'react'
import { Props } from './types'
import { cn, currencyFormatter } from '@/shared/lib'
import { IngredientItem, ProductGroupSelector, ProductImage } from '@/entities'
import { Button, Title } from '@/shared/ui'
import { pizzaSizes, pizzaTypes } from '@/shared/config'
import { PizzaSize, PizzaType } from '@/shared/types'
import { useSet } from 'react-use'

export const ChoosePizzaFormFeature: FC<Props> = ({
	imageUrl,
	name,
	className,
	ingredients,
	items,
}) => {
	const [size, setSize] = useState<PizzaSize>(20)
	const [type, setType] = useState<PizzaType>(1)

	const [selectedIngredients, { toggle }] = useSet(new Set<number>([]))

	const textDetails = `30 см, традиционное тесто 30`

	const pizzaPrice =
		items.find((item) => item.pizzaType === type && item.size === size)
			?.price || 0

	const totalIngredientsPrice = ingredients
		.filter((item) => selectedIngredients.has(item.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0)

	const totalPrice = pizzaPrice + totalIngredientsPrice

	const handleAddIngredient = (id: number) => {
		toggle(id)
	}

	return (
		<div className={cn(className, 'flex flex-1')}>
			<ProductImage imageUrl={imageUrl} size={size} />

			<div className="w-[490px] bg-[#f7f6f5] p-7">
				<Title text={name} size="md" className="font-extrabold mb-1" />

				<p className="text-gray-400">{textDetails}</p>

				<div className="flex flex-col gap-4 mt-5">
					<ProductGroupSelector
						items={pizzaSizes}
						value={String(size)}
						onClick={(value) => setSize(Number(value) as PizzaSize)}
					/>

					<ProductGroupSelector
						items={pizzaTypes}
						value={String(type)}
						onClick={(value) => setType(Number(value) as PizzaType)}
					/>
				</div>

				<div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
					<div className="grid grid-cols-3 gap-3">
						{ingredients.map((ingredient) => (
							<IngredientItem
								key={ingredient.id}
								name={ingredient.name}
								price={ingredient.price}
								imageUrl={ingredient.imageUrl}
								onClick={() => handleAddIngredient(ingredient.id)}
								active={selectedIngredients.has(ingredient.id)}
							/>
						))}
					</div>
				</div>

				<Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
					Добавить в корзину за {currencyFormatter.format(totalPrice || 0)}
				</Button>
			</div>
		</div>
	)
}
