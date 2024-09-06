'use client'
import React, { FC } from 'react'
import { Props } from './types'
import { cn } from '@/shared/lib'
import Link from 'next/link'
import { useCategoriesStore } from '@/entities/categories'

export const CategoriesFeature: FC<Props> = ({ className, categories }) => {
	const { activeCategoryId } = useCategoriesStore()

	return (
		<div
			className={cn(
				'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl z-20',
				className,
			)}
		>
			{categories.map((item) => (
				<Link
					key={item.id}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						activeCategoryId === item.id &&
							'bg-white shadow-md shadow-gray-200 text-primary',
					)}
					href={`/#${item.name}`}
				>
					{item.name}
				</Link>
			))}
		</div>
	)
}
