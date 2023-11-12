import Image from "next/image";
import Link from "next/link";

const technologies = [
	{
		name: "Javascript",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png",
		link: "/projects/js",
	},
	{
		name: "Typescript",
		image: "https://bestofjs.org/logos/typescript.dark.svg",
		link: "projects/ts",
	},
	{
		name: "NextJs",
		image: "https://bestofjs.org/logos/nextjs.dark.svg",
		link: "projects/nextjs",
	},
	{
		name: "NodeJs",
		image: "https://bestofjs.org/logos/nodejs.dark.svg",
		link: "projects/nodejs",
	},
	{
		name: "Prisma",
		image: "https://bestofjs.org/logos/prisma.dark.svg",
		link: "projects/prisma",
	},
	{
		name: "GoLang",
		image:
			"https://geekole.com/wp-content/uploads/2022/12/golang_logo_gopher_geekole.png",
		link: "projects/golang",
	},
	{
		name: "TailwindCSS",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
		link: "projects/tailwindcss",
	},
	{
		name: "tRPC",
		image: "https://bestofjs.org/logos/trpc.dark.svg",
		link: "projects/trpc",
	},
	{
		name: "AWS",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png",
		link: "projects/aws",
	},
];

export default function Technologies() {
	return (
		<>
			{technologies.map(({ name, image, link }) => (
				<Link
					key={name}
					href={link}
					className=" font-medium text-white hover:text-yellow-200"
				>
					<div className="flex items-center gap-4 hover:scale-105 ease-in-out duration-200">
						<div className="rounded-full bg-zinc-900 w-[60px] h-[60px] flex justify-center items-center">
							<Image width={30} height={30} src={image} alt={name} />
						</div>
						<h3 className="text-[14px] md:text-[16px]">{name}</h3>
					</div>
				</Link>
			))}
		</>
	);
}
