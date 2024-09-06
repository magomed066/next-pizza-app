'use client'
import { ingredientsService } from '@/shared/api'
import { Ingredient } from '@prisma/client'
import { useEffect, useMemo, useState } from 'react'

export const useIngredientsList = () => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getIngredients = async () => {
			setLoading(true)

			try {
				const response = await ingredientsService.getAllIngredients()

				setIngredients(response)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		getIngredients()
	}, [])

	const mappedIngredients = useMemo(
		() => ingredients.map((el) => ({ value: String(el.id), text: el.name })),
		[ingredients],
	)

	return {
		isLoading: loading,
		ingredients: mappedIngredients,
	}
}
