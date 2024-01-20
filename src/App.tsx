import Navbar from "./Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-t from-emerald-400 to-green-200">
			<div className="sm:max-w-2xl mx-auto px-2 pt-2 sm:pt-4">
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
			<footer className="sm:max-w-2xl mx-auto px-1 pt-2 pb-1">
				<ul className="flex justify-between font-bold uppercase text-green-900 text-xs">
					<li className="pb-1">
						{new Date().toUTCString().slice(12, 16) + " | Haole Handyman LLC"}
					</li>
					<li>
						<a
							href="https://pappas.sh"
							className="decoration shadow-inner rounded bg-emerald-700 p-1 text-emerald-100"
							target="_blank"
						>
							~p
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default App;
