import NavLinks from "./navLinks";

export default function Navbar() {
	return (
		<nav className="flex flex-col md:flex-row md:justify-center items-center pt-8 pb-8 sm:pb-16 w-full md:w-[740px] mx-auto">
			<div className="flex justify-center items-center gap-4 px-8 py-4 bg-neutral-900 rounded-2xl">
				<NavLinks />
			</div>
		</nav>
	);
}
