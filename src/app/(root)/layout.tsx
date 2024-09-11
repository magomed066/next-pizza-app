import { HeaderWidget } from '@/widgets'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Next pizza | Главная',
}

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<main className="min-h-screen">
			<HeaderWidget />
			{children}
			{modal}
		</main>
	)
}
