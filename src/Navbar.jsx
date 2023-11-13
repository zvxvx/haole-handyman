import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="flex justify-center pb-4">
			<ul className="flex">
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/services">Services</CustomLink>
				<CustomLink to="/testimonials">Testimonials</CustomLink>
				<Link className="font-bold px-3 py-2 text-slate-800 rounded-lg hover:bg-green-200 hover:text-green-800" to="https://www.instagram.com/haolehandymanllc" target="_blank">
					Instagram
				</Link>
			</ul>
		</nav>
	);

	function CustomLink({ to, children }) {
		const resolvedPath = useResolvedPath(to);
		const isActive = useMatch({ path: resolvedPath.pathname, end: true });
		return (
			<li className={ isActive ? "font-bold px-3 py-2 rounded-lg bg-green-100 text-green-800" : "font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-green-200 hover:text-green-800"}>
				<Link to={to}>{children}</Link>
			</li>
		);
	}
};

export default Navbar;
