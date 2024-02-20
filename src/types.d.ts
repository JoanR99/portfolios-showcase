export type Project = {
	id: string;
	name: string;
	description: string;
	technologies: string[];
	repo: string;
	live: string;
	image: string;
};

export interface Worker {
	id: string;
	name: string;
	avatar: string;
	job: string;
	github: string;
	linkedin: string;
	description: string;
	stack: string[];
	projects: Project[];
}
