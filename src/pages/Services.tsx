import ac from "../assets/services/ac.jpg?w=550&h=700&format=webp&img";
import door from "../assets/services/door.jpg?w=550&h=700&format=webp&img";
import electrical from "../assets/services/electrical.jpg?w=550&h=700&format=webp&img";
import flooring from "../assets/services/flooring.jpg?w=550&h=700&format=webp&img";
import kitchen from "../assets/services/kitchen.jpg?w=550&h=700&format=webp&img";
import toilet from "../assets/services/toilet.jpg?w=550&h=700&format=webp&img";

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
				Service examples
			</p>
			<ul className="sm:flex grid grid-cols-2 gap-4 justify-center font-bold mb-2 text-center">
				{services.map((service, index) => {
					return (
						<li key={index} className="border-b border-green-500 mb-1">
							{service}
						</li>
					);
				})}
			</ul>
			<div className="sm:grid gap-4 grid-cols-2 bg-green-100/50 border border-green-300 p-4 rounded shadow-xl justify-items-center items-center">
				{images.map((image, index) => {
					return (
						<img
							key={index}
							className="border-2 border-green-800 rounded mb-1"
							src={image}
							alt="services"
							style={{ width: "550px" }}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Services;
