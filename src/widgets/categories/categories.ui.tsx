'use client'

import { CategoriesFeature } from '@/features'
import { categoriesService } from '@/shared/api'
import { Category } from '@prisma/client'
import React, { useEffect, useState } from 'react'

export const CategoriesWidget = () => {
	const [categories, setCategories] = useState<Category[]>([])

	useEffect(() => {
		const getCategories = async () => {
			try {
				const response = await categoriesService.getAllCategories()

				setCategories(response)
			} catch (error) {
				console.log(error)
			}
		}

		getCategories()
	}, [])

	return <CategoriesFeature categories={categories} />
}
