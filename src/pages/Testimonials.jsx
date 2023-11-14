import React from "react";

const Testimonials = () => {
	return (
		<>
			<p className="uppercase tracking-wide text-lg text-green-800 font-bold">
				Testimonials
			</p>
			<p className="bg-green-100/80 border border-green-400 rounded-lg shadow-lg p-3 mb-5">
				"I had a fantastic experience with Haole Handyman! Brad arrived
				punctually, efficiently installed 5 fans and 4 light fixtures, and
				everything went smoothly. I'm definitely looking forward to
				collaborating with Brad on several more projects in the future. Highly
				recommended!"
				<span className="uppercase tracking-wide text-md text-green-800 font-bold">
					{" "}
					- Terence T.
				</span>
			</p>
			<p className="bg-green-100/80 border border-green-400 rounded-lg shadow-lg p-3 mb-5">
				"My wife and I had a terrible leak under our kitchen sink. Brad came in
				on a Sunday and worked on the problem. Fixed it all in a manner of a few
				hours. He provided excellent service and I am pleased to report
				everything looks great! Our house is back in order thanks to him."
				<span className="uppercase tracking-wide text-md text-green-800 font-bold">
					{" "}
					- James K.
				</span>
			</p>
			<p className="bg-green-100/80 border border-green-400 rounded-lg shadow-lg p-3 mb-5">
				"My mom & her husband just bought a condo and it needed some work done.
				I called Ha'ole Handyman and Brad came to meet them onsite and went over
				everything they needed/wanted. Within a few weeks, everything was done
				professionally and to their liking. Scope of work ranged from flooring,
				window repair, and closet organizer installation. Mahalo, Brad!"
				<span className="uppercase tracking-wide text-md text-green-800 font-bold">
					- Jim C.
				</span>
			</p>
			<p className="bg-green-100/80 border border-green-400 rounded-lg shadow-lg p-3 mb-5">
				"My tenants were moving out and I needed a lot of work done. Brad came
				in and got everything done and then some to make sure my house was move
				in ready. He worked long hours and was patient with me as I continued to
				make the list of work longer. Made things much easier for me."
				<span className="uppercase tracking-wide text-md text-green-800 font-bold">
					- Jessica D.
				</span>
			</p>
			<p className="bg-green-100/80 border border-green-400 rounded-lg shadow-lg p-3 mb-5">
				"Called Brad Weaks at the last minute to fix the bathroom sink stopper
				that was broken. He made time after his long day and squeezed this job
				because my tenant could not use the sink. He installed a new assembly
				which he picked up at Home Depot and charged me a very reasonable price.
				I am definitely going to call him for more handyman projects and you
				should too."
				<span className="uppercase tracking-wide text-md text-green-800 font-bold">
					- Patti K.
				</span>
			</p>
			<div className="text-center">
				<a
					href="https://www.yelp.com/biz/haole-handyman-aiea"
					target="_blank"
					className="uppercase font-bold"
				>
					Read more reviews at Yelp.
				</a>
			</div>
		</>
	);
};

export default Testimonials;
