import { Project } from "../lib/definitions";
import ButtonLink from "./buttonLink";

export default function DisplayProjects({ projects }: { projects: Project[] }) {
	return (
		<>
			{projects.map((project: Project) => (
				<div
					key={project.name}
					className="relative flex flex-col bg-gradient-to-br from-gray-800 to-zinc-900 p-2 shadow-md w-96 rounded-lg bg-clip-border"
				>
					<div className="p-6">
						<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
							{project.name}
						</h5>
						<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
							{project.description}
						</p>
					</div>
					<div className="p-6 pb-4 flex gap-2 flex-wrap text-sm pt-0">
						{project.topics.map((topic) => (
							<div key={topic} className="text-purple-400">
								{topic}
							</div>
						))}
					</div>
					<div className="p-6 pt-0 flex gap-4">
						<ButtonLink project={project} title="Repository" repo={true} />
						<ButtonLink project={project} title="Visit" repo={false} />
					</div>
				</div>
			))}
		</>
	);
}
