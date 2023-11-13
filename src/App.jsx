import Navbar from "./Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import { Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";

function App() {
	return (
		<div className="h-screen bg-gradient-to-r from-green-300 to-green-200">
			<img src={logo} className="mx-auto my-auto w-1/6" id="logo" alt="logo" />
			<Navbar />
			<div className="mx-auto my-auto">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/testimonials" element={<Testimonials />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
