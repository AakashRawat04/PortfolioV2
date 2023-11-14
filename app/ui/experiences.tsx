"use client";
import Link from "next/link";
import { toast } from "sonner";

const experiences = [
	{
		title: "Backend Developer Intern",
		company: "GourangaPaul and Sons",
		link: "http://gourangapaul.com/",
		duration: "April 2023 - September 2023",
		description: [
			"Worked on an Online Shopping Website.",
			"Maintained a Express JS website with EJS template rendring.",
			"Used Redis for OTP and session storage.",
			"Implemented multiple Payment Gateways.",
			"Hosted the website on an AWS server with nginx and pm2.",
			`Technologies worked on: Javascript, MongoDB, Redis, AWS, NGINX, Payment
    Gateways (Razorpay and CCAvenue)`,
		],
	},
	{
		title: "Freelance Project",
		company: "Social Media Backend API",
		link: "",
		duration: "2021 - Present",
		description: [
			`Worked on the Typescript Base Backend API of a social media application with
    ExpressJS.`,
			"Used Supabase as the Database.",
			`Technologies worked on: Typescript, Supabase, ExpressJS.`,
		],
	},
];

export default function ExperiencesList() {
	return (
		<div className="mt-9 flex flex-col gap-5">
			{experiences.map((experience, index) => (
				<div key={index}>
					<div className="flex flex-row items-center">
						<h2 className="font-bold text-lg text-green-400">
							{experience.title}
						</h2>
						<p className="px-2 text-sm">
							<small>{experience.duration}</small>
						</p>
					</div>
					<p className="text-sm text-gray-400">
						<Link
							href={experience.link}
							onClick={(e) => {
								if (!experience.link) {
									e.preventDefault();
									toast.error("The URL is not available", { duration: 1000 });
								}
							}}
						>
							{experience.company}
						</Link>
					</p>
					<ul className="mt-2 ">
						{experience.description.map((point, pointIndex) => (
							<li key={pointIndex}>
								<div className=" font-mono text-sm">- {point}</div>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
