import { Category } from '@prisma/client'

export type Props = {
	className?: string
	categories: Category[]
}
