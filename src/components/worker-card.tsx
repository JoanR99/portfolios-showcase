import { SiJavascript, SiTypescript } from 'react-icons/si';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card } from './ui/card';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io5';
import Link from 'next/link';
import { Worker } from '@/types';

export default function WorkerCard({ worker }: { worker: Worker }) {
	return (
		<Link href={`/worker/${worker.id}`}>
			<Card className="p-4 space-y-4 min-w-72 cursor-pointer">
				<div className="flex gap-4 items-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>{worker.name}</AvatarFallback>
					</Avatar>
					<div>
						<h2 className="text-xl font-bold text-primary">{worker.name}</h2>
						<p>{worker.job}</p>
					</div>
				</div>
				<div className="flex flex-wrap gap-2 justify-center">
					<SiJavascript className="w-5 h-5 text-teal-800 dark:text-teal-600" />
					<SiTypescript className="w-5 h-5 text-teal-800 dark:text-teal-600" />
					<FaReact className="w-5 h-5 text-teal-800 dark:text-teal-600" />
					<FaVuejs className="w-5 h-5 text-teal-800 dark:text-teal-600" />
					<IoLogoNodejs className="w-5 h-5 text-teal-800 dark:text-teal-600" />
				</div>
			</Card>
		</Link>
	);
}
