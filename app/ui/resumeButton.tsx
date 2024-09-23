"use client";
import Link from "next/link";
import { toast } from "sonner";

export default function ResumeButton() {
	const url =
		"https://drive.google.com/file/d/1F-LnJgWPgXy9Pf4109r-RhI3bs8FLqBS/view?usp=sharing";
	return (
		<div className="mt-3">
			<Link
				target="_blank"
				href={url}
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
				Resume
			</Link>
		</div>
	);
}
