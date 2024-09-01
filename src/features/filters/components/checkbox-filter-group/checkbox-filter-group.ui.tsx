'use client'

import React, { ChangeEvent, useMemo, useState } from 'react'

import { FilterCheckbox, Input } from '@/shared/ui'
import { Props } from './types'

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	onChange,
	defaultValue,
}) => {
	const [showAll, setShowAll] = React.useState(false)
	// const [selected, { add, toggle }] = useSet<string>(new Set([]))

	const [searchValue, setSearchValue] = useState('')

	const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const list = useMemo(() => {
		if (showAll) {
			return items
		}

		return defaultItems.slice(0, limit)
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
				{list.map((item) => (
					<FilterCheckbox
						onCheckedChange={(ids) => console.log(ids)}
						checked={false}
						key={String(item.value)}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
					/>
				))}
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
