'use client'

import React, { ChangeEvent, useMemo, useState } from 'react'

import { FilterCheckbox } from '@/shared/ui'
import { Props } from './types'
import { IngredientsSkeleton } from '@/entities'

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	isLoading = false,
	searchInputPlaceholder = 'Поиск...',
	className,
	onClickCheckbox,
	defaultValue,
	selectedValues,
	name,
}) => {
	const [showAll, setShowAll] = React.useState(false)

	const [searchValue, setSearchValue] = useState('')

	const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const list = useMemo(() => {
		if (showAll) {
			return items
		}

		return (defaultItems || items)?.slice(0, limit)
	}, [items, showAll, limit, defaultItems])

	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>

			{/* {showAll && (
				<div className="mb-5">
					<Input
						onChange={handleSearchValue}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)} */}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{isLoading ? (
					<IngredientsSkeleton />
				) : (
					list?.map((item) => (
						<FilterCheckbox
							onCheckedChange={() => onClickCheckbox?.(item.value)}
							checked={selectedValues?.has(item.value)}
							key={String(item.value) + Math.random()}
							value={item.value}
							text={item.text}
							name={name}
							endAdornment={item.endAdornment}
						/>
					))
				)}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll(!showAll)}
						className="text-primary mt-6"
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}
