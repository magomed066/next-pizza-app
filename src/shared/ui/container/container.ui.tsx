import React from 'react'
import { cn } from '@/shared/lib'

interface Props {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return (
		<div className={cn(className, 'mx-auto max-w-[1280px]')}>{children}</div>
	)
}
