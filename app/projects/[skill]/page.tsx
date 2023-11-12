import { fetchProjectWithSkills } from "@/app/lib/data";
import { Toaster } from "sonner";
import DisplayProjects from "@/app/ui/displayProjects";

export default async function ProjectsWithSkill({
	params,
}: {
	params: { skill: string };
}) {
	const projects = await fetchProjectWithSkills(params.skill);
	return (
		<main>
			<Toaster richColors />
			<div className="flex flex-col justify-center items-center my-10 md:my-5 md:mx-auto">
				<div className="text-white">
					<h2 className="font-bold text-3xl">
						Projects With{" "}
						<span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
							{params.skill.charAt(0).toUpperCase() + params.skill.slice(1)}
						</span>
					</h2>
					<div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-y-8 md:gap-x-8 mt-10">
						<DisplayProjects projects={projects} />
					</div>
				</div>
			</div>
		</main>
	);
}
