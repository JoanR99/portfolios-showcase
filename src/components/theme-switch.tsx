'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return theme === 'light' ? (
		<Button onClick={() => setTheme('dark')}>
			<Moon />
		</Button>
	) : (
		<Button onClick={() => setTheme('light')}>
			<Sun />
		</Button>
	);
}
