import { Toaster, toast } from "sonner";
import ExperiencesList from "../ui/experiences";
import ResumeButton from "../ui/resumeButton";

export default function Experiences() {
	return (
		<div className="flex justify-center items-center my-5 md:my-4">
			<Toaster richColors />
			<div className="text-white w-[350px] md:w-[740px]">
				<h1 className="font-bold text-3xl md:text-5xl mb-1 text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text">
					Experiences
				</h1>
				<p className="mt-4 text-sm">
					I have a deep-rooted interest in development and a strong desire to
					tackle real-world challenges. What&apos;s particularly appealing to me
					is the opportunity to work on solutions irrespective of the technology
					stack – I thrive on challenges that push me to learn and grow.
					I&apos;m eager to contribute my skills to a team that shares my
					passion for problem-solving and is committed to making a meaningful
					impact.
				</p>
				<ResumeButton />
				<ExperiencesList />
			</div>
		</div>
	);
}
