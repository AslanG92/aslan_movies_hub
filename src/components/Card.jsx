import "./card.css";
import { Play } from "lucide-react";
import { Plus } from "lucide-react";

function Card({ movie }) {
    return (
        <div className="col-lg-2 col-md-4 col-sm-6 d-flex align-items-stretch mb-4">
            <div className="movie-card w-100 d-flex flex-column">
                <img src={movie.previewImg} alt="Movie Preview Img" className="img-fluid object-fit-cover w-100 h-100" />

                <p>
                    {movie.length} | {movie.category}
                </p>

                <div className="content">
                    <h3>{movie.title}</h3>

                    <div className="card-icons">
                        <Play className="icon" />
                        <Plus className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;