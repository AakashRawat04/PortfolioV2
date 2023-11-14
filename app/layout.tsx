import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Aakash Rawat",
	description: "Portfolio website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${poppins.className} overflow-y-scroll no-scrollbar`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
