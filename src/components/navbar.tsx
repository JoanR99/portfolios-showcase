import ThemeSwitch from '@/components/theme-switch';

export default function Navbar() {
	return (
		<nav className="bg-background py-2 px-4 flex justify-between">
			<h1 className="text-2xl font-bold text-primary">Portfolios</h1>
			<ThemeSwitch />
		</nav>
	);
}
