import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../components/Card";
import filterListData from "../data/FilterListData";

function Schedule() {
	const filterList = filterListData;
	const [data, setData] = useState([]);
	const [movies, setMovies] = useState([]);
	const [filters, setFilters] = useState(filterList);

	const fetchData = () => {
		fetch("http://localhost:3000/data/movieData.json")
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((e) => console.log(e.message));
	};

	useEffect(() => {
		fetchData();
	}, []);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setMovies(data);
	}, [data]);

	const handleFilterMovies = (category) => {
		setFilters(
			filters.map((filter) => {
				filter.active = false;
				if (filter.name === category) {
					filter.active = true;
				}
				return filter;
			}),
		);

		if (category === "All") {
			setMovies(data);
			return;
		}
		setMovies(data.filter((movie) => movie.category.includes(category)));
	};

	return (
		<section id="schedule" className="schedule">
			<div className="container-fluid">
				<div className="row">
					<h2 className="section-title">choose and watch</h2>
				</div>

				<div className="row">
					{
						<ul className="filters">
							{filters.map((filter) => (
								<li
									key={filter._id}
									className={`${filter.active ? "active" : undefined}`}
									onClick={() => {
										handleFilterMovies(filter.name);
									}}
								>
									{filter.name}
								</li>
							))}
						</ul>
					}
				</div>

				<div className="row mt-5">
					{movies &&
						movies.length > 0 &&
						movies
							.filter((movie) => movie.type === "released")
							.map((movie) => <Card key={movie._id} movie={movie} />)}
				</div>
			</div>
		</section>
	);
}

export default Schedule;
