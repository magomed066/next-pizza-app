import { FilterCheckboxProps } from '@/shared/ui'

type Item = FilterCheckboxProps

export type Props = {
	title: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	className?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
}
