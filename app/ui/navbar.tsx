import Link from "next/link";

export default function Navbar() {
	return (
		// <nav>
		// 	<div className="flex justify-around items-center bg-gray-200 p-4 w-fit">
		// 		<Link href="/" className="text-gray-800">
		// 			Home
		// 		</Link>
		// 		<Link href="/projects" className="text-gray-800">
		// 			Projects
		// 		</Link>
		// 		<Link href="/about" className="text-gray-800">
		// 			About Me
		// 		</Link>
		// 		<Link href="/contact" className="text-gray-800">
		// 			Contact Me
		// 		</Link>
		// 	</div>
		// </nav>
		<nav className="p-4 w-full flex justify-center">
			<div className="p-1 flex items-center bg-slate-800 rounded-3xl w-fit">
				<div className="flex w-fit text-white p-2">
					<Link href="/" className="mx-2">
						Home
					</Link>
					<Link href="/projects" className="mx-2">
						Projects
					</Link>
					<Link href="/about" className="mx-2">
						About Me
					</Link>
					<Link href="/contact" className="mx-2">
						Contact Me
					</Link>
				</div>
			</div>
		</nav>
	);
}
