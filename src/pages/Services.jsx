import React from "react";
import ac from "../assets/services/ac.jpg";
import door from "../assets/services/door.jpg";
import electrical from "../assets/services/electrical.jpg";
import flooring from "../assets/services/flooring.jpg";
import kitchen from "../assets/services/kitchen.jpg";
import toilet from "../assets/services/toilet.jpg";

const images1 = [ac, door, electrical];
const images2 = [flooring, kitchen, toilet];
const services1 = ["Cooling", "Doors", "Electrical"];
const services2 = ["Flooring", "Kitchen", "Bathroom"];
const Services = () => {
	return (
		<>
			<p className="text-center uppercase tracking-wide text-xl text-green-900 font-bold mb-5">
				Service examples include
			</p>
			<div className="grid gap-4 grid-cols-3 grid-rows-1 bg-green-100/50 border border-green-700 p-2 rounded shadow-xl mb-5">
				{services1.map((service) => {
					return (
						<span className="border-b-2 border-green-800 font-bold uppercase text-center">
							{service}
						</span>
					);
				})}
				{images1.map((image) => {
					return (
						<img className="border-2 border-black" src={image} alt="services" />
					);
				})}
			</div>
			<div className="grid gap-4 grid-cols-3 grid-rows-1 bg-green-100/50 border border-green-700 p-2 rounded shadow-xl">
				{services2.map((service) => {
					return (
						<span className="border-b-2 border-green-800 font-bold uppercase text-center">
							{service}
						</span>
					);
				})}
				{images2.map((image) => {
					return (
						<img className="border-2 border-black" src={image} alt="services" />
					);
				})}
			</div>
		</>
	);
};

export default Services;
