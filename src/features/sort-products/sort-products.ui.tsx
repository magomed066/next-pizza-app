import { cn } from '@/shared/lib'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui'
import React, { FC } from 'react'
import { Props } from './types'
import { ArrowUpDown } from 'lucide-react'

export const SortProductsFeature: FC<Props> = ({ className }) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div
					className={cn(
						'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
						className,
					)}
				>
					<ArrowUpDown className="w-4 h-4" />
					<b>Сортировка:</b>

					<b className="text-primary">популярное</b>
				</div>
			</PopoverTrigger>
			<PopoverContent className="w-[240px]">
				<ul>
					<li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
						Сначала популярное
					</li>
					<li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
						Сначала недорогие
					</li>
					<li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
						Сначала дорогие
					</li>
					<li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
						С лучшей оценкой
					</li>
				</ul>
			</PopoverContent>
		</Popover>
	)
}
