import Image from "next/image";
import Technologies from "./ui/technologies";
import CommitGraph from "./ui/commitGraph";

export default function Home() {
	return (
		<main>
			<div className="flex flex-col-reverse md:flex-row justify-center items-center">
				<div className="text-white w-[350px] md:w-[450px]">
					<h1 className="font-bold text-3xl md:text-5xl mb-1 text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text">
						Aakash Rawat
					</h1>
					<p className=" text-lg mt-2 font-bold">
						Dev seeking a <span className="text-green-300">new</span> coding
						journey!
					</p>
					<p className="mt-4 text-left font-light text-zinc-400">
						Hello, I&apos;m Aakash Rawat, a second-year student at SRM Institute
						of Science and Technology, Chennai. I&apos;m a passionate full-stack
						developer with a love for exploring cutting-edge technologies. My
						journey involves crafting solutions, building applications, and
						embracing continuous learning. Let&apos;s connect and build
						something amazing together!
					</p>
				</div>
				<Image
					width={600}
					height={600}
					src="/profileImage.jpeg"
					alt="Aakash Rawat Profile Image"
					className="mb-10 md:mb-0 h-[120px] w-[120px] md:h-[240px] md:w-[240px] grayscale-0 hover:grayscale rounded-full ml-0 md:ml-10 transition duration-300"
				/>
			</div>
			<div className="flex justify-center items-center my-10 md:my-16">
				<div className="text-white w-[350px] md:w-[740px]">
					<h2 className="text-3xl font-bold">Technologies</h2>
					<p className="mt-4 text-left">
						I like playing around and learning new programming languages,
						frameworks and libraries. These are the technologies that I love
						working with:
					</p>
					<div className="grid grid-cols-2 gap-y-5 md:grid-cols-3 md:gap-y-8 md:gap-x-4 mt-10">
						<Technologies />
					</div>
					<CommitGraph />
				</div>
			</div>
		</main>
	);
}
