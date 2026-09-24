import "./blogCard.css";

function BlogCard({ blog }) {
	return (
		<div className="blog col-xl-3 col-md-6 mb-4">
			<article className="d-flex flex-column h-100">
				<div className="post-img">
					<img src={blog.thumbnail} alt="blog pic" className="img-fluid" />
				</div>

				<p className="post-category">{blog.category}</p>

				<h2 className="title">
					<a href="/">{blog.title}</a>
				</h2>

				<div className="d-flex align-items-center mt-auto">
					<img
						src={`${process.env.PUBLIC_URL}/${blog.author.img}`}
						alt="post pic"
						className="img-fluid post-author-img flex-shrink-0"
					/>
					<div className="post-meta">
						<p className="post-author-list">{blog.author.name}</p>
						<p className="post-date">
							<time dateTime="2026-01-01">{blog.date}</time>
						</p>
					</div>
				</div>
			</article>
		</div>
	);
}

export default BlogCard;
