import Navbar from "./Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-t from-emerald-400 to-green-200">
			<div className="sm:max-w-2xl mx-auto px-2 pt-5">
				<ul className="flex justify-between font-bold uppercase text-green-900 text-xl sm:text-2xl">
					<li>Haole Handyman</li>
					<li>
						<a href="tel:+1808-721-4647">808-721-4647</a>
					</li>
				</ul>
			</div>
			<Navbar />
			<div className="sm:max-w-2xl flex-col mx-auto rounded-md shadow-xl items-center justify-center border border-green-500 bg-gradient-to-t from-green-200/50 to-green-100/50 p-6">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/testimonials" element={<Testimonials />} />
				</Routes>
			</div>
			<footer className="w-full mt-2 items-center justify-center pb-2 text-sm sm:text-center text-emerald-900 font-bold">
				<p>
					{new Date().toLocaleString().slice(6, 10) + " | Haole Handyman LLC"}
				</p>
				<a
					href="https://pappas.sh"
					className=" underline decoration-emerald-800 decoration-2"
					target="_blank"
				>
					~/p
				</a>
			</footer>
		</div>
	);
}

export default App;
