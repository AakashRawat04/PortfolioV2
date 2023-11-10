import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div className="flex flex-col-reverse md:flex-row justify-center items-center">
				<div className="text-white w-[350px] md:w-[450px]">
					<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 glitch">
						Aakash Rawat
					</h1>
					<p className=" text-lg mt-2 glitch">
						Dev seeking a new coding journey!
					</p>
					<p className="mt-4 text-left">
						I am a full stack developer. Welcome to my little corner of the web!
						I am a civil engineer graduated from National Autonomous University
						of Mexico (UNAM) who decided to break into tech in his late 20s. I
						am interested in web developement, UI/UX design and data analysis.
					</p>
				</div>
				<Image
					width={600}
					height={600}
					src="/profileImage.jpeg"
					alt="Aakash Rawat Profile Image"
					className="mb-10 md:mb-0 h-[120px] w-[120px] md:h-[240px] md:w-[240px] rounded-full ml-0 md:ml-10 grayscale hover:grayscale-0 transition duration-300"
				/>
			</div>
		</main>
	);
}
