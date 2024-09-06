'use client'

import React, { FC } from 'react'
import { Props } from './types'
import { Input, Title } from '@/shared/ui'
import { CheckboxFiltersGroup, RangeSlider } from './components'
import { useFilters } from './hooks/use-filters'
import { useQueryFilters } from './hooks/use-query-filters'
import { useIngredientsList } from '@/entities'
import { RotateCcw } from 'lucide-react'

export const FiltersFeature: FC<Props> = ({ className }) => {
	const { ingredients, isLoading } = useIngredientsList()

	const filters = useFilters()

	useQueryFilters(filters)

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', String(prices[0]))
		filters.setPrices('priceTo', String(prices[1]))
	}

	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

			{/* Main filters  */}
			<CheckboxFiltersGroup
				title="Размеры"
				name="sizes"
				className="mb-5"
				selectedValues={filters.sizes}
				onClickCheckbox={filters.setSizes}
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' },
				]}
			/>

			<CheckboxFiltersGroup
				title="Тип теста"
				name="pizzaTypes"
				className="mb-5"
				selectedValues={filters.pizzaTypes}
				onClickCheckbox={filters.setPizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
			/>

			{/* Price filters */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						value={filters.prices.priceFrom}
						onChange={(e) => filters.setPrices('priceFrom', e.target.value)}
						defaultValue={0}
					/>
					<Input
						type="number"
						min={100}
						max={1000}
						value={filters.prices.priceTo}
						placeholder="1000"
						onChange={(e) => filters.setPrices('priceTo', e.target.value)}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[
						filters.prices.priceFrom || 0,
						filters.prices.priceTo || 1000,
					]}
					onValueChange={updatePrices}
				/>
			</div>

			<CheckboxFiltersGroup
				className="mt-5"
				title="Ингредиенты"
				limit={6}
				name="ingredients"
				isLoading={isLoading}
				defaultItems={ingredients.slice(0, 6)}
				items={ingredients}
				onClickCheckbox={filters.setSelectedIngredients}
				selectedValues={filters.selectedIngredients}
			/>

			{filters.enableClearingFilters ? (
				<button
					onClick={filters.clearAllFilters}
					className="text-secondary-foreground mt-6 flex items-center gap-1"
				>
					<RotateCcw
						width={12}
						height={12}
						className="text-secondary-foreground"
					/>
					Сбросить
				</button>
			) : null}
		</div>
	)
}
