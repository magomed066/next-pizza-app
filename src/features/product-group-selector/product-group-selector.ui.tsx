import { ProductGroupSelector } from '@/entities'
import React from 'react'

export const ProductGroupSelectorFeature = () => {
	return (
		<ProductGroupSelector
			items={[
				{ name: 'Маленькая', value: '1' },
				{ name: 'Средняя', value: '2' },
				{ name: 'Большая', value: '3' },
			]}
		/>
	)
}
