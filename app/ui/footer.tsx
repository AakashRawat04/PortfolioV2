import Link from "next/link";

export default function Footer() {
	return (
		<>
			<footer className="flex border-t-2 border-neutral-900 items-center justify-center w-full">
				Made with ❤️ By
				<Link
					target="_blank"
					href="https://github.com/aakashrawat04"
					className="text-blue-500 ml-1"
				>
					Aakash
				</Link>
			</footer>
		</>
	);
}
