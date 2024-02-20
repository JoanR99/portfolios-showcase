import { Project, Worker } from '@/types';
import ProjectCard from './project-card';

export default function WorkerProjectsSection({
	projects,
}: {
	projects: Project[];
}) {
	return (
		<section className="py-8">
			<div className="container space-y-4">
				<h2 className="text-2xl font-bold text-primary">Proyectos</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
