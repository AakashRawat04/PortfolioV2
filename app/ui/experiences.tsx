"use client";
import Link from "next/link";
import { toast } from "sonner";

const experiences = [
	{
		title: "SDE Intern",
		company: "Emendo AI",
		link: "https://www.emendo.ai/",
		duration: "June 2024 - Present",
		description: [
			"Part of the migration team, successfully transitioning the architecture from DynamoDB to Aurora PostgreSQL with 0 down time.",
			"Developed and maintained essential services, including, Calendar Service, Users Service, Reminders Service",
			"Worked on AWS CDK for the entire infrastructure as code.",
			"Utilized serverless architecture to enhance system efficiency and scalability.",
			"Worked extensively with AWS services: AWS Lambda, SES, SQS for asynchronous workflows, AWS Step Functions (focused on Textract feature), EventBridge Scheduler, SNS, Cognito.",
		],
	},
	{
		title: "Backend Developer Intern",
		company: "Padhai Academy",
		link: "",
		duration: "March 2024 - June 2024",
		description: [
			"As a founding backend engineer at Padhai Academy, I was responsible for building the base layer API server for the organization using GraphQL. I worked closely with PostgreSQL and Supabase, implementing RLS policies to enhance data security. I dedicated a significant amount of time to making endpoints efficient by utilizing dataloaders for caching, which improved performance and scalability.",
		],
	},
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
		duration: "June 2023",
		description: [
			`Worked on the Typescript Base Backend API of a social media application with
    ExpressJS.`,
			"Used Supabase as the Database.",
			`Technologies worked on: Typescript, Supabase, ExpressJS.`,
		],
	},
	{
		title: "Syndiacte",
		company: "NextTechLab",
		link: "https://nexttechlab.in/",
		duration: "June 2024 - Present",
		description: [
			"Currently leading a team of top bright minds of SRM IST Chennai.",
			"started off as an associate later got promoted as a member.",
		],
	},
	{
		title: "Former Associate Lead",
		company: "SRMKZILLA",
		link: "https://www.srmkzilla.net/",
		duration: "October 2022 - June 2024",
		description: [
			`Started off as a member and later got promoted as an associate lead.`,
			"Worked on KZCMS backend.",
			`Facilitated several internal sessions to educate team members.`,
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
							target="_blank"
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
