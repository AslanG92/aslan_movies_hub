/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footerNavItem.css";
import { ChevronRight } from "lucide-react";

function FooterNavItem({ name }) {
	return (
		<li>
			<ChevronRight size={24} color="currentColor" />
			<a href="#">{name}</a>
		</li>
	);
}

export default FooterNavItem;
