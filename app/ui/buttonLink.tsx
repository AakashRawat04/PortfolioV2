"use client";
import Link from "next/link";
import { Project } from "../lib/definitions";
import { toast } from "sonner";

export default function ButtonLink({
	project,
	title,
	repo,
}: {
	project: Project;
	title: string;
	repo: boolean;
}) {
	const url = repo ? project.html_url : project.homepage;
	return (
		<>
			<Link
				target="_blank"
				href={url ? url : "#"}
				className="select-none rounded-lg  py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-gradient-to-br from-sky-900 to-sky-950"
				type="button"
				data-ripple-light="true"
				onClick={(e) => {
					if (!url) {
						e.preventDefault();
						toast.error("The url is not available", { duration: 1000 });
					}
				}}
			>
				{title}
			</Link>
		</>
	);
}
