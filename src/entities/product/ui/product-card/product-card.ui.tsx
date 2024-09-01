import React, { FC } from 'react'
import { Props } from './types'
import Link from 'next/link'
import { Button, Title } from '@/shared/ui'
import { Plus } from 'lucide-react'
import { currencyFormatter, routes } from '@/shared/lib'

export const ProductCard: FC<Props> = ({
	className,
	imageUrl,
	name,
	price,
	id,
}) => {
	return (
		<div className={className}>
			<Link href={`${routes.product}/${id}`}>
				<div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
					<img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
				</div>

				<Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
				<p className="text-sm text-gray-400">
					Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
					альфредо, чеснок
				</p>

				<div className="flex justify-between items-center mt-4">
					<span className="text-[20px]">
						от <b>{currencyFormatter.format(price)}</b>
					</span>

					<Button variant="secondary">
						<Plus className="w-4 h-4 mr-1" />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	)
}
