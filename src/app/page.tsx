import { FiltersFeature, SortProductsFeature } from '@/features'
import { Container, Title } from '@/shared/ui'
import { CategoriesWidget, ProductsListWidget } from '@/widgets'
import { prisma } from '../../prisma/prisma-client'

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true,
				},
			},
		},
	})

	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>

			<div className="sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5">
				<Container className="flex items-center justify-between ">
					<CategoriesWidget />
					<SortProductsFeature />
				</Container>
			</div>

			<Container className="pb-14 pt-10">
				<div className="flex gap-[80px]">
					{/* Filters */}
					<div className="w-[250px]">
						<FiltersFeature />
					</div>

					{/* Products list */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsListWidget categories={categories} />
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
