import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io5';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { VscLiveShare } from 'react-icons/vsc';
import { Card } from './ui/card';

type Project = {
	id: string;
	name: string;
	description: string;
	technologies: string[];
	repo: string;
	live: string;
	image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="flex flex-col gap-2 items-center p-4 max-w-96">
			<Image
				src={project.image}
				alt={project.name}
				width={350}
				height={200}
				className="rounded-lg w-full max-h-52 object-cover object-center"
			/>
			<div className="space-y-2">
				<h2 className="text-xl font-bold text-primary">{project.name}</h2>
				<p>{project.description}</p>
				<div className="space-y-4">
					<div className="flex flex-wrap gap-2 justify-center">
						<SiJavascript className="w-5 h-5 text-teal-800 dark:text-teal-600" />
						<SiTypescript className="w-5 h-5 text-teal-800 dark:text-teal-600" />
						<FaReact className="w-5 h-5 text-teal-800 dark:text-teal-600" />
						<FaVuejs className="w-5 h-5 text-teal-800 dark:text-teal-600" />
						<IoLogoNodejs className="w-5 h-5 text-teal-800 dark:text-teal-600" />
					</div>
					<div className="flex gap-4 justify-center">
						<Link
							href={project.repo}
							target="_blank"
							className="flex gap-2 items-center"
						>
							<FaGithub className="w-6 h-6 text-primary" /> Repo
						</Link>
						<Link
							href={project.live}
							target="_blank"
							className="flex gap-2 items-center"
						>
							<VscLiveShare className="w-6 h-6 text-primary" /> Probar
						</Link>
					</div>
				</div>
			</div>
		</Card>
	);
}
