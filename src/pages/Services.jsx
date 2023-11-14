import React from "react";
import ac from "../assets/services/ac.jpg";
import door from "../assets/services/door.jpg";
import electrical from "../assets/services/electrical.jpg";
import flooring from "../assets/services/flooring.jpg";
import kitchen from "../assets/services/kitchen.jpg";
import toilet from "../assets/services/toilet.jpg";

const images = [ac, door, electrical, flooring, kitchen, toilet];
const services = [
	"Cooling",
	"Refurbishing",
	"Electrical",
	"Flooring",
	"Kitchen",
	"Bathroom",
];
const Services = () => {
	return (
		<>
			<p className="text-center uppercase tracking-wide text-xl text-green-900 font-bold mb-2">
				Service examples include
			</p>
			<ul className="sm:flex gap-4 justify-center text-center font-bold mb-2">
				{services.map((service) => {
					return <li>{service}</li>;
				})}
			</ul>
			<div className="sm:grid gap-4 grid-cols-3 grid-rows-1 bg-green-100/50 border border-green-700 p-4 rounded shadow-xl mb-5">
				{images.map((image) => {
					return (
						<img className="border-2 border-black" src={image} alt="services" />
					);
				})}
			</div>
		</>
	);
};

export default Services;
