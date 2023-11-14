import { Project } from "./definitions";

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
		}));

	return filteredProjects;
}

export async function fetchProjects(username: string) {
	const url = `https://api.github.com/users/${username}/repos`;
	const response = await fetch(url, { next: { revalidate: 3600 } });
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
	}));

	return projects;
}
