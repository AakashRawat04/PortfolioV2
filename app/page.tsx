import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 ">
			<div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">Welcome to my website!</h1>
				<p className="mt-3 text-2xl">I am a full stack developer.</p>
			</div>
		</main>
	);
}
