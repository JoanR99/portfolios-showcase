import { Worker } from '@/types';

export default function WorkerAboutSection({
	description,
}: {
	description: string;
}) {
	return (
		<section className="py-8">
			<div className="container space-y-4">
				<h2 className="text-2xl font-bold text-primary">Acerca de mi</h2>
				<p>{description}</p>
			</div>
		</section>
	);
}
