import { Product } from '@prisma/client'
import { apiService } from '../base/base'
import { queryRoutes } from '../base/constants'

class ProductsService {
	searchProducts(search: string) {
		return apiService.get<Product[]>(
			`${queryRoutes.searchProducts}?query=${search}`,
		)
	}

	getProductById(id: number) {
		return apiService.get<Product>(`${queryRoutes.products}/${id}`)
	}
}

export const productsService = new ProductsService()
