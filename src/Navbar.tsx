import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Navbar = () => {
	type CustomLinks = {
		to: string,
		children: string
	}
	const CustomLink = ({ to, children }: CustomLinks) => {
		const resolvedPath = useResolvedPath(to);
		const isActive = useMatch({ path: resolvedPath.pathname, end: true });
		const activeStyle =
			"font-bold px-3 py-2 rounded-sm bg-green-100/60 text-green-700 shadow-[0px_0px_3px_green]";
		const inactiveStyle =
			"font-bold px-3 py-2 text-slate-800 rounded-lg hover:text-green-700";
		return (
			<li className={isActive ? activeStyle : inactiveStyle}>
				<Link to={to}>{children}</Link>
			</li>
		);
	}

	return (
		<nav className="sm:max-w-2xl justify-center mx-auto bg-green-100/60 rounded-md mb-2 border border-green-500 shadow-md">
			<ul className="sm:flex sm:justify-center">
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/services">Services</CustomLink>
				<CustomLink to="/testimonials">Testimonials</CustomLink>
				<CustomLink to="https://www.instagram.com/haolehandymanllc">
					Instagram
				</CustomLink>
			</ul>
		</nav>
	);
};

export default Navbar;
