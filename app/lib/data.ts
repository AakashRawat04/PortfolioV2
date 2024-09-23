import { Project } from "./definitions";

function parseISODate(isoDateString: string): Date {
	return new Date(isoDateString);
}

export async function fetchProjectWithSkills(
	skill: string
): Promise<Project[]> {
	const url = `https://api.github.com/search/repositories?q=topic:${skill}+user:aakashrawat04&order=desc`;
	const response = await fetch(url, { next: { revalidate: 3600 } });
	const data: {
		items: Project[];
	} = await response.json();

	if (!data || !data.items || !Array.isArray(data.items)) {
		return [];
	}

	const filteredProjects = data.items
		.filter((project: Project) => {
			const topics = project.topics || [];
			return topics.includes(skill);
		})
		.map((project: Project) => ({
			name: project.name,
			topics: project.topics,
			description: project.description,
			html_url: project.html_url,
			homepage: project.homepage,
			created_at: project.created_at,
		}));

	// return filteredProjects;
	const sortedProjects = filteredProjects.sort((a, b) => {
		return (
			parseISODate(b.created_at).getTime() -
			parseISODate(a.created_at).getTime()
		);
	});

	return sortedProjects;
}

export async function fetchProjects(username: string) {
	const url = `https://api.github.com/users/${username}/repos`;
	const response = await fetch(url, { next: { revalidate: 120 } });
	const data: Project[] = await response.json();

	if (!data || !Array.isArray(data)) {
		return [];
	}

	const projects = data.map((project: Project) => ({
		name: project.name,
		topics: project.topics,
		description: project.description,
		html_url: project.html_url,
		homepage: project.homepage,
		created_at: project.created_at,
	}));

	// return projects;
	const sortedProjects = projects.sort((a, b) => {
		return (
			parseISODate(b.created_at).getTime() -
			parseISODate(a.created_at).getTime()
		);
	});

	return sortedProjects;
}
