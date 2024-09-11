import { ProductModal } from '@/widgets'
import { notFound } from 'next/navigation'
import { prisma } from '../../../../../../prisma/prisma-client'

export default async function ProductModalPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
		include: {
			category: true,
			ingredients: true,
			items: true,
		},
	})

	if (!product) {
		return notFound()
	}

	return <ProductModal product={product} />
}
