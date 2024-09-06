import { Skeleton } from '@/shared/ui'
import React from 'react'

export const IngredientsSkeleton = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<Skeleton className="w-[30px] h-6" />
				<Skeleton className="w-full h-4" />
			</div>
			<div className="flex items-center gap-4">
				<Skeleton className="w-[30px] h-6" />
				<Skeleton className="w-full h-4" />
			</div>
			<div className="flex items-center gap-4">
				<Skeleton className="w-[30px] h-6" />
				<Skeleton className="w-full h-4" />
			</div>
			<div className="flex items-center gap-4">
				<Skeleton className="w-[30px] h-6" />
				<Skeleton className="w-full h-4" />
			</div>
			<div className="flex items-center gap-4">
				<Skeleton className="w-[30px] h-6" />
				<Skeleton className="w-full h-4" />
			</div>

			<Skeleton className="w-[100px] h-4" />
		</div>
	)
}
