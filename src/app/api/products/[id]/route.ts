import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/prisma-client'

export async function GET(req: NextRequest) {
	const arr = req.nextUrl.href.split('/')
	const id = arr[arr.length - 1]

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

	return NextResponse.json(product)
}
