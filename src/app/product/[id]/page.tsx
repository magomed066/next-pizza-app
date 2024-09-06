import { Container, Title } from '@/shared/ui'
import { prisma } from '../../../../prisma/prisma-client'
import { notFound } from 'next/navigation'
import { ProductImage } from '@/entities'
import { ProductGroupSelectorFeature } from '@/features'

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
	})

	if (!product) {
		return notFound()
	}

	return (
		<Container className="flex flex-col my-10">
			<div className="flex flex-1">
				<ProductImage imageUrl={product.imageUrl} size={40} />

				<div className="w-[490px] bg-[#fcfcfc] p-7">
					<Title
						text={product.name}
						size="md"
						className="font-extrabold mb-1"
					/>

					<p className="text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						sed perspiciatis ducimus accusamus facere, delectus ullam nesciunt
						quam tenetur, non, quasi sunt odio tempora itaque voluptatum?
						Repellat aspernatur hic minus!
					</p>

					<ProductGroupSelectorFeature />
				</div>
			</div>
		</Container>
	)
}
