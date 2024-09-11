'use client'

import { productsService } from '@/shared/api'
import { Product } from '@prisma/client'
import { useEffect, useState } from 'react'

export const useProductById = (id: number) => {
	const [product, setProduct] = useState<Product | undefined>()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getProduct = async () => {
			setLoading(true)

			try {
				const response = await productsService.getProductById(id)

				setProduct(response)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		getProduct()
	}, [])

	return {
		isLoading: loading,
		product,
	}
}
