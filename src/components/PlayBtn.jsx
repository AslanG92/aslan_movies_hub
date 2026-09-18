import { useState } from "react";
import "./playBtn.css";
import { Play } from "lucide-react";
import Modal from "./Modal";


function PlayBtn({ movie }) {
    const [modal, setModal] = useState(false);

    const toggleModal = (e) => {
        e.preventDefault();
        setModal(!modal);
    };

    return (
        <>
            <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? "active" : undefined}`}>
                <a href="/" className="playBtn" aria-label="movie trailer link" onClick={toggleModal}>
                    <Play className="playIcon" />
                </a>
                <p>Watch Trailer</p>
            </div>

            {movie.active && <Modal movie={movie} status={modal} toggleModal={toggleModal} />}
        </>
    );
}

export default PlayBtn;
