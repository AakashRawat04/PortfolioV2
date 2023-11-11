import Link from "next/link";

const links = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Projects", path: "/projects" },
	{ name: "Contact", path: "/contact" },
];

export default function NavLinks() {
	return (
		<>
			{links.map(({ name, path }) => (
				<Link
					key={name}
					href={path}
					className=" font-medium text-white hover:text-yellow-200"
				>
					{name}
				</Link>
			))}
		</>
	);
}
