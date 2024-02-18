import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io5';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import WorkerCard from '@/components/worker-card';

const workers = [
	{
		id: '1',
		name: 'Shad',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
	{
		id: '2',
		name: 'Joan Romero',
		avatar: 'https://github.com/shadcn.png',
		job: 'Full Stack Developer',
	},
	{
		id: '3',
		name: 'Ramon Flores',
		avatar: 'https://github.com/shadcn.png',
		job: 'Diseñador',
	},
	{
		id: '4',
		name: 'Victor Jimenez',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
	{
		id: '5',
		name: 'Pablo Marmol',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
	{
		id: '6',
		name: 'Lucas Fernandez',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
	{
		id: '7',
		name: 'Laura Rodriguez',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
	{
		id: '8',
		name: 'Maria Perez',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
	{
		id: '9',
		name: 'Gustavo Lopez',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
	{
		id: '10',
		name: 'Brenda Garcia',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
	{
		id: '11',
		name: 'Natalia Martinez',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
	{
		id: '12',
		name: 'Sofia Sanchez',
		avatar: 'https://github.com/shadcn.png',
		job: 'Web Developer',
	},
];

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center gap-10 p-12 bg-background">
			<h1 className="text-4xl font-bold text-primary">Portfolios</h1>

			<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{workers.map((worker) => (
					<WorkerCard key={worker.id} worker={worker} />
				))}
			</div>

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" isActive>
							1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
