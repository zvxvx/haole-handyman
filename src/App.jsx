import Navbar from "./Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import { Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-green-300 to-green-200">
			<img src={logo} className="mx-auto my-auto w-[50%] sm:w-64" id="logo" alt="logo" />
			<Navbar />
			<div className="flex-col max-w-2xl mx-auto rounded-md shadow-xl items-center justify-center border border-green-500 bg-green-200/90 p-6">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/testimonials" element={<Testimonials />} />
				</Routes>

			</div>
			<footer className="w-full mt-2 flex items-center justify-center pb-2 text-sm text-gray-900 sm:text-center">
				<span>{new Date().toLocaleString().slice(6, 10) + "/design/"}</span>
				<a href="https://pappas.sh" className="font-bold" target="_blank">
					pappas
				</a>
			</footer>
		</div>
	);
}

export default App;
