import { Worker } from '@/types';
import { Card } from './ui/card';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io5';

export default function WorkerStackSection({ stack }: { stack: string[] }) {
	return (
		<section className="py-8">
			<div className="container space-y-4">
				<h2 className="text-2xl font-bold text-primary">Stack de trabajo</h2>
				<div className="flex flex-wrap gap-4">
					<Card className="flex gap-2 items-center p-4">
						<SiJavascript className="w-5 h-5 text-teal-800 dark:text-teal-600" />{' '}
						Javascript
					</Card>
					<Card className="flex gap-2 items-center p-4">
						<SiTypescript className="w-5 h-5 text-teal-800 dark:text-teal-600" />{' '}
						Typescript
					</Card>
					<Card className="flex gap-2 items-center p-4">
						<FaReact className="w-5 h-5 text-teal-800 dark:text-teal-600" />{' '}
						React
					</Card>
					<Card className="flex gap-2 items-center p-4">
						<FaVuejs className="w-5 h-5 text-teal-800 dark:text-teal-600" /> Vue
					</Card>
					<Card className="flex gap-2 items-center p-4">
						<IoLogoNodejs className="w-5 h-5 text-teal-800 dark:text-teal-600" />{' '}
						Node
					</Card>
				</div>
			</div>
		</section>
	);
}
