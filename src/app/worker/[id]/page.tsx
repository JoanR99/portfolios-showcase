import WorkerAboutSection from '@/components/worker-about-section';
import WorkerHeaderSection from '@/components/worker-header-section';
import WorkerProjectsSection from '@/components/worker-projects-section';
import WorkerStackSection from '@/components/worker-stack-section';

const user = {
	id: '1',
	name: 'Shad Mirza',
	avatar: 'https://github.com/shadcn.png',
	job: 'Web Developer',
	github: '#',
	linkedin: '#',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit consequuntur iusto aspernatur magnam ad, ipsum facere eveniet nisi! Culpa soluta corrupti, nam dolor doloremque vel, quod incidunt, eum corporis distinctio exercitationem quos? Hic neque, alias maxime dolore nam nihil ducimus similique, in officia doloribus dicta reprehenderit non voluptate. Quia laborum quod pariatur praesentium excepturi numquam officiis ducimus, neque voluptatibus atque illum, odio eveniet reprehenderit inventore laboriosam? Incidunt voluptatum iusto dolores ex aliquam consequuntur magnam mollitia ipsa reiciendis reprehenderit dicta aperiam, architecto, aut odio a, libero delectus cupiditate. Exercitationem molestias ipsa nulla velit nostrum quasi, hic magni similique eius quo! Aut optio nesciunt doloribus voluptatem, inventore nam temporibus, sequi pariatur nobis ducimus vero quod aliquam nisi eveniet enim, tempore necessitatibus iusto omnis porro? Fugiat, quos placeat assumenda rerum, iure sint dignissimos repellat exercitationem sed at, vero amet nesciunt ipsa rem deleniti. Nisi est incidunt maiores ullam sequi sed, natus alias reiciendis enim sint. Nesciunt quasi veniam blanditiis sapiente modi ullam, molestiae dolorem deleniti praesentium magnam at totam, harum, enim rerum a cupiditate commodi labore? Provident rem minus itaque similique, quam ipsam laborum accusantium, magni corrupti sunt quae corporis amet nobis quisquam aperiam. Maxime quidem neque praesentium sed officiis optio corporis!',
	stack: ['javascript', 'typescript', 'react', 'vue', 'node'],
	projects: [
		{
			id: '1',
			name: 'Notes App',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.',
			technologies: ['javascript', 'typescript', 'react', 'vue', 'node'],
			repo: '#',
			live: '#',
			image: 'https://source.unsplash.com/random',
		},
		{
			id: '2',
			name: 'E-commerce',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.',
			technologies: ['javascript', 'typescript', 'react', 'vue', 'node'],
			repo: '#',
			live: '#',
			image: 'https://source.unsplash.com/random',
		},
		{
			id: '3',
			name: 'Admin Dashboard',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.',
			technologies: ['javascript', 'typescript', 'react', 'vue', 'node'],
			repo: '#',
			live: '#',
			image: 'https://source.unsplash.com/random',
		},
	],
};

export default function Worker() {
	return (
		<div className="bg-background">
			<div className="container">
				<WorkerHeaderSection worker={user} />
				<WorkerAboutSection description={user.description} />
				<WorkerStackSection stack={user.stack} />
				<WorkerProjectsSection projects={user.projects} />
			</div>
		</div>
	);
}
