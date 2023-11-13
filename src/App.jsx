import Navbar from "./Navbar";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<div id="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quote" element={<Quote />} />
					<Route path="/services" element={<Services />} />
					<Route path="/testimonials" element={<Testimonials />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
