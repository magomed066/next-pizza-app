'use client'
import { cn } from '@/shared/lib'
import React, { FC } from 'react'
import { Props } from './types'

export const ProductGroupSelector: FC<Props> = ({
	items,
	className,
	onClick,
	value,
}) => {
	return (
		<div
			className={cn(
				className,
				'flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none',
			)}
		>
			{items.map((item) => (
				<button
					key={item.name}
					onClick={() => onClick?.(item.value)}
					className={cn(
						'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
						{
							'bg-white shadow': item.value === value,
							'text-gray-500 opacity-50 pointer-events-none': item.disabled,
						},
					)}
				>
					{item.name}
				</button>
			))}
		</div>
	)
}
