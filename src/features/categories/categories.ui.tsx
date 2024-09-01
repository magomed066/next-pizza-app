'use client'
import React, { FC } from 'react'
import { Props } from './types'
import { cn } from '@/shared/lib'
import Link from 'next/link'
import { useCategoriesStore } from '@/entities/categories'

const cats = [
	'Пиццы',
	'Комбо',
	'Закуски',
	'Коктейли',
	'Кофе',
	'Напитки',
	'Десерты',
	'Десерты',
]

export const CategoriesFeature: FC<Props> = ({ className }) => {
	const { activeCategoryId } = useCategoriesStore()

	return (
		<div
			className={cn(
				'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl z-20',
				className,
			)}
		>
			{cats.map((name, i) => (
				<Link
					key={name}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						activeCategoryId === i + 1 &&
							'bg-white shadow-md shadow-gray-200 text-primary',
					)}
					href={`/#${name}`}
				>
					{name}
				</Link>
			))}
		</div>
	)
}
