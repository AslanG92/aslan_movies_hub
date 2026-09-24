import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

function Blog() {
	const [blogs, setBlogs] = useState([]);

	const fetchData = () => {
		fetch("../../public/data/blogData.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data))
			.catch((e) => console.log(e.message));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<section id="blogs" className="blogs">
			<div className="container-fluid">
				<div className="row">
					<h2 className="section-title">Our Blog</h2>
				</div>

				<div className="row mt-5">
					{blogs && blogs.length > 0 && blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
				</div>
			</div>
		</section>
	);
}

export default Blog;
