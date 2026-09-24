import "./trend.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Импортируем стили для стрелок
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import TrendCard from "../components/TrendCard";

function Trend() {
	const [slides, setSlides] = useState([]);

	const fetchData = () => {
		fetch("http://localhost:3000/data/movieData.json")
			.then((res) => res.json())
			.then((data) => setSlides(data))
			.catch((e) => console.log(e.message));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const comingMovies = slides.filter((slide) => slide.type === "coming");

	return (
		<section id="trend" className="trend">
			<div className="container-fluid">
				<div className="row">
					<h2 className="section-title">Coming Soon</h2>
				</div>

				<div className="row">
					{comingMovies && comingMovies.length > 0 ? (
						<Swiper
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
								480: {
									slidesPerView: 3,
									spaceBetween: 30,
								},
								640: {
									slidesPerView: 4,
									spaceBetween: 30,
								},
								992: {
									slidesPerView: 6,
									spaceBetween: 30,
								},
							}}
							spaceBetween={30}
							navigation={true}
							modules={[Navigation]}
							className="trendSwiper"
						>
							{comingMovies.map((slide) => (
								<SwiperSlide key={slide._id} className="d-flex align-items-stretch mb-4">
									<TrendCard slide={slide} />
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<div className="text-center w-100 py-5 text-white">Loading movies...</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default Trend;
