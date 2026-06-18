import "./PhotoMarquee.css";

function PhotoMarquee({ images }) {
  const duplicated = [...images, ...images];

  return (
    <div className="photo-marquee">
      <div className="photo-track">
        {duplicated.map((image, index) => (
          <div className="photo-item" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoMarquee;