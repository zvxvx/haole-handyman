import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="max-w-2xl flex justify-center mx-auto bg-green-200/90 rounded-md mb-2 border border-green-500 shadow-md">
			<ul className="flex">
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/services">Services</CustomLink>
				<CustomLink to="/testimonials">Testimonials</CustomLink>
				<CustomLink to="https://www.instagram.com/haolehandymanllc">
					Instagram
				</CustomLink>
			</ul>
		</nav>
	);

	function CustomLink({ to, children }) {
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
};

export default Navbar;
