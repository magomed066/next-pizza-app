import { Ingredient, Product } from '@prisma/client'
import { apiService } from '../base/base'
import { queryRoutes } from '../base/constants'

class IngredientsService {
	getAllIngredients() {
		return apiService.get<Ingredient[]>(`${queryRoutes.ingredients}`)
	}
}

export const ingredientsService = new IngredientsService()
