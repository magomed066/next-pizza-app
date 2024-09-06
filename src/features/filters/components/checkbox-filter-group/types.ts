import { FilterCheckboxProps } from '@/shared/ui'

type Item = FilterCheckboxProps

export type Props = {
	title: string
	items: Item[]
	defaultItems?: Item[]
	isLoading?: boolean
	limit?: number
	searchInputPlaceholder?: string
	className?: string
	onClickCheckbox?: (values: string) => void
	defaultValue?: string[]
	selectedValues?: Set<string>
	name?: string
}
