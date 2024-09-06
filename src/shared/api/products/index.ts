import { Product } from '@prisma/client'
import { apiService } from '../base/base'
import { queryRoutes } from '../base/constants'

class ProductsService {
	searchProducts(search: string) {
		return apiService.get<Product[]>(
			`${queryRoutes.searchProducts}?query=${search}`,
		)
	}
}

export const productsService = new ProductsService()
