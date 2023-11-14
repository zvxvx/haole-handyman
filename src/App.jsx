import Navbar from "./Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import { Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png?w=250&h=250&format=webp";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-t from-emerald-400 to-green-200">
			<img src={logo} className="mx-auto my-auto mb-2" id="logo" alt="logo" />
			<Navbar />
			<div className="sm:max-w-2xl flex-col mx-auto rounded-md shadow-xl items-center justify-center border border-green-500 bg-gradient-to-t from-green-200/50 to-green-100/50 p-6">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/testimonials" element={<Testimonials />} />
				</Routes>
			</div>
			<footer className="w-full mt-2 flex items-center justify-center pb-2 text-md sm:text-center">
				<span>{new Date().toLocaleString().slice(6, 10) + "/"}</span>
				<a
					href="https://pappas.sh"
					className="font-bold underline"
					target="_blank"
				>
					pappas
				</a>
			</footer>
		</div>
	);
}

export default App;
