export function GalleryItem({ title, paragraphs, image }) {
    return (
        <div className='gallery-container'>
            <div>
                <h2>{title}</h2>
                {paragraphs.map((text, index) => <p key={index}>{text}</p>)}
            </div>

            {/* Maybe this could be a carousel! */}
            <img className="gallery-image" src={image} alt={title} />
        </div >
    );
}
