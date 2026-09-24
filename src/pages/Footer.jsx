/* eslint-disable jsx-a11y/anchor-is-valid */
import FooterNavItem from "../components/FooterNavItem";
import "./footer.css";
import { Send, Tv, Camera, Share2 } from "lucide-react";

function Footer() {
	const usefulLinks = ["Home", "Movies", "My List", "Terms of service", "Privacy Policy"];
	const locations = ["Alberta", "Los Angeles", "London", "Brazil", "Norway"];

	return (
		<footer id="footer" className="footer">
			<div className="footer-top">
				<div className="container">
					<div className="row gy-4">
						<div className="col-lg-5 col-md-12 footer-info">
							<a href="/" className="logo d-flex align-items-center">
								<span>CINEMA</span>
							</a>
							<p>
								Watch captivating films and TV series, experience a sea of motions and enjoyment from viewing
								unforgettable and inspiring works by top directors...
							</p>
							<div className="social-links mt-3">
								<a aria-label="twitter link" href="#" className="twitter">
									<Send className="icon" color="#1DA1F2" size={24} strokeWidth={2} />
								</a>
								<a aria-label="facebook link" href="#" className="facebook">
									<Share2 className="icon" color="#1877F2" size={24} strokeWidth={2} />
								</a>
								<a aria-label="instagram link" href="#" className="instagram">
									<Camera className="icon" color="#E1306C" size={24} strokeWidth={2} />
								</a>
								<a aria-label="youtube link" href="#" className="youtube">
									<Tv className="icon" color="#FF0000" size={24} strokeWidth={2} />
								</a>
							</div>
						</div>

						<div className="footer-links col-lg-2 col-6">
							<h3>Useful links</h3>
							<ul>
								{usefulLinks.map((link) => (
									<FooterNavItem key={link} name={link} />
								))}
							</ul>
						</div>

						<div className="footer-links col-lg-2 col-6">
							<h3>Our Cinemas</h3>
							<ul>
								{locations.map((link) => (
									<FooterNavItem key={link} name={link} />
								))}
							</ul>
						</div>

						<div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
							<h3>Contact Us</h3>
							<p>
								Street name <br />
								City Name, State 123435
								<br />
								Canada
								<br />
								<br />
								<strong>Phone:</strong> +1 2345 3434 21
								<br />
								<strong>Email:</strong> info@example.com
								<br />
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="copyright">
					&copy; Copyright{" "}
					<strong>
						<span>Aslan Goliev</span>
					</strong>
					. All Rights Reserved
				</div>

				<div className="credits">
					Designed by <strong>Aslan Goliev</strong>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
