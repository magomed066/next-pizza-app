import { Category } from '@prisma/client'
import { apiService } from '../base/base'
import { queryRoutes } from '../base/constants'

class CategoriesService {
	getAllCategories() {
		return apiService.get<Category[]>(`${queryRoutes.categories}`)
	}
}

export const categoriesService = new CategoriesService()
