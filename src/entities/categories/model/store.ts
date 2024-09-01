import { create } from 'zustand'
import { CategoriesStore } from './types'

export const useCategoriesStore = create<CategoriesStore>((set) => ({
	activeCategoryId: 0,
	setActiveCategoryId(value) {
		set((prev) => ({ ...prev, activeCategoryId: value }))
	},
}))
