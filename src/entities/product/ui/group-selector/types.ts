export type Variant = {
	name: string
	value: string
	disabled?: boolean
}

export type Props = {
	items: readonly Variant[]
	onClick?: (value: Variant['value']) => void
	value?: Variant['value']
	className?: string
}
