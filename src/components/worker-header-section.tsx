import { Worker } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function WorkerHeaderSection({ worker }: { worker: Worker }) {
	return (
		<section className="py-16 flex justify-center items-center">
			<div className="flex flex-col md:flex-row items-center gap-8">
				<Image
					src={worker.avatar}
					alt={worker.name}
					width={200}
					height={200}
					className="rounded-full"
				/>
				<div className="space-y-2">
					<h1 className="text-4xl font-bold text-primary">{worker.name}</h1>
					<p className="text-xl">{worker.job}</p>
					<div className="flex gap-2">
						<Link href={worker.github} target="_blank">
							<FaGithub className="w-6 h-6 text-primary" />
						</Link>
						<Link href={worker.linkedin} target="_blank">
							<FaLinkedin className="w-6 h-6 text-primary" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
