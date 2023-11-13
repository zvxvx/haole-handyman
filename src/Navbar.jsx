import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Navbar = () => {
	return (
		<nav id="nav">
			<Link to="/" id="title">
				Site Name
			</Link>
			<ul>
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/quote">Quote</CustomLink>
				<CustomLink to="/services">Services</CustomLink>
				<CustomLink to="/testimonials">Testimonials</CustomLink>
				<Link to="https://www.instagram.com/haolehandymanllc" target="_blank">
					Instagram
				</Link>
			</ul>
		</nav>
	);

	function CustomLink({ to, children }) {
		const resolvedPath = useResolvedPath(to);
		const isActive = useMatch({ path: resolvedPath.pathname, end: true });
		return (
			<li className={isActive ? "active" : ""}>
				<Link to={to}>{children}</Link>
			</li>
		);
	}
};

export default Navbar;
