import "./modal.css";
import { X } from 'lucide-react';

function Modal({ movie, status, toggleModal }) {
    return (
        <div className={`movieModal ${status ? "active" : undefined}`}>
            <a href="/" className="modalCloseBtn" onClick={toggleModal}> <X size={24} color="currentColor" strokeWidth={2} /></a>
            <iframe
                width="1280"
                height="720"
                src={movie.video}
                title={`${movie.title} | Official Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default Modal;