import { CategoriesFeature, SortProductsFeature } from '@/features'
import { Container, Title } from '@/shared/ui'

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>

			<div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
				<Container className="flex items-center justify-between ">
					<CategoriesFeature />
					<SortProductsFeature />
				</Container>
			</div>

			<div className="h-[3000px]"></div>
		</>
	)
}
