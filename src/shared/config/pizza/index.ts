export const pizzaSizeMap = {
	20: 'Маленька',
	30: 'Средняя',
	40: 'Большая',
} as const

export const pizzaTypeMap = {
	1: 'традицинное',
	2: 'тонкое',
} as const

export const pizzaSizes = Object.entries(pizzaSizeMap).map(([value, name]) => ({
	name,
	value,
}))

export const pizzaTypes = Object.entries(pizzaTypeMap).map(([value, name]) => ({
	name,
	value,
}))
