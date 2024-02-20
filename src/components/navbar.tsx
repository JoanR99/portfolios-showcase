import ThemeSwitch from '@/components/theme-switch';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="bg-background py-2">
			<div className="flex justify-between container">
				<Link href="/">
					<h1 className="text-2xl font-bold text-primary">Portfolios</h1>
				</Link>
				<ThemeSwitch />
			</div>
		</nav>
	);
}
