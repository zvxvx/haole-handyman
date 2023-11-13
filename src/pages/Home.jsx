import owners from "../assets/owners.jpg";

const Home = () => {
	const requestQuote = (e) => {
		e.preventDefault();
		const email = "haolehandymanllc@gmail.com";
		const subject = "Hello, I would like to request a service quote.";
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(
			subject
		)}`;
	};
	return (
		<>
			<div
				id="home"
				className="max-w-mlg mx-auto bg-green-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl"
			>
				<div className="md:flex">
					<div className="md:shrink-0">
						<img
							className="w-full object-cover md:h-full w-60"
							src={owners}
							id="owners"
							alt="Jadyi and Brad"
						/>
					</div>
					<div className="p-8" id="about">
						<div className="uppercase tracking-wide text-md text-indigo-500 font-semibold">
							About
						</div>
						<p>
							Brad, originally from Texas, moved here in 2019 and fell in love
							with the island life. He cares about providing quality work and
							customer service. Just as important is his belief in giving fair
							prices to the residents of O'ahu.
						</p>
						<p>
							His partner, Jaydi, was born on Kaua'i, but was raised on O'ahu.
							You'll likely hear her voice on the other end when you give Ha'ole
							Handyman a call. They complement each other well and look forward
							to helping you on your next project!
						</p>
						<h3 className="uppercase tracking-wide text-md text-indigo-500 font-semibold">
							Need a quote?
						</h3>
						<p>
							Provide us with your name, a good phone number or email to respond
							to, and a description of what service you'd like to request. The
							more information you provide us, the more accurate the quote will
							be.
						</p>
						<button type="button" onClick={requestQuote}>
							Request Service Quote
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
