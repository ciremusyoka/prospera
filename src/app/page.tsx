import Link from "next/link";
import Footer from "@component/footer";
import { SIGN_IN_URL, TITLE } from "@constant/constants.path";

async function HomePage() {
	return (
		<div className="bg-gradient-to-b from-lightColor to-primaryColor min-h-screen flex flex-col justify-between">
		<main className="flex flex-col items-center text-center px-6 pt-30">
			<h1 className="text-4xl font-extrabold text-darkColor">
				Welcome to {TITLE}
			</h1>
			<p className="mt-8 text-lg italic text-secondaryColor">
				Safe & Simple. Invest Smart. Grow Steady.
			</p>
			<h2 className="mt-10 max-w-2xl text-base text-darkColor leading-relaxed">
				Secure your future with stable <b> USDT </b> investments. 
				<br /> Fast deposits, transparent growth plans, and referral rewards — all in one trusted platform.
			</h2>

			<div className="mt-12">
				<h3 className="text-xl font-semibold text-darkColor">Get Started Today</h3>
				<p className="mt-2 text-sm text-secondaryColor">
					Join us and take the first step towards financial security.
				</p>
				<div className="mt-10">
					<Link href={SIGN_IN_URL} className="px-8 py-3 bg-gradient-to-r from-primaryColor to-secondaryColor text-lightColor font-medium rounded-lg shadow-md hover:opacity-90 transition">
						Get Started
					</Link>
				</div>
				
			</div>
		</main>
		<Footer />
		</div>
	);
}

export default HomePage;
