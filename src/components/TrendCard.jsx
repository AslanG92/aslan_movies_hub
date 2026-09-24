/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Calendar } from "lucide-react";
import "./trendCard.css";

function TrendCard({ slide }) {
	return (
		<div className="trend-card  w-100 d-flex flex-column">
			<img
				alt="movies pic"
				src={`${process.env.PUBLIC_URL}/${slide.previewImg}`}
				className="img-fluid object-fit-cover w-100 h-100"
			/>
			<a href="#">
				Add to calendar
				<Calendar />
			</a>
		</div>
	);
}

export default TrendCard;
