"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const links = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Projects", path: "/projects" },
	{ name: "Contact", path: "/contact" },
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map(({ name, path }) => (
				<Link
					key={name}
					href={path}
					className={`font-medium text-white hover:text-yellow-100 ${
						pathname === path ? "text-yellow-300" : ""
					}`}
				>
					{name}
				</Link>
			))}
		</>
	);
}
