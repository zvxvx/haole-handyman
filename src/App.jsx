import Navbar from "./Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import { Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import bg from "./assets/bg.jpg";

function App() {
	return (
		<div
			className="min-h-screen bg-green-300 pb-5"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<img
				src={logo}
				className="mx-auto my-auto w-1/6"
				id="logo"
				alt="logo"
			/>
			<Navbar />
			<div
				className="flex-col max-w-2xl mx-auto rounded-md shadow-xl items-center justify-center border border-green-500 bg-green-200/90 p-8"
			>
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
