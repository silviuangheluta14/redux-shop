import { useState } from "react";

export default function ImageCarousel({
  images,
  alt,
}: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const many = images.length > 1;

  function go(step: number) {
    setIndex((i) => (i + step + images.length) % images.length);
  }

  return (
    <div className="carousel" aria-label="Product images">
      <div className="carousel-main">
        <button
          className="carousel-nav prev"
          onClick={() => go(-1)}
          disabled={!many}
          aria-label="Previous image"
        >
          ‹ 
        </button>

        <img
          src={images[index]}
          alt={`${alt} – image ${index + 1} of ${images.length}`}
        />

        <button
          className="carousel-nav next"
          onClick={() => go(1)}
          disabled={!many}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {many && (
        <div className="carousel-thumbs">
          {images.map((src, i) => (
            <button
              key={src + i}
              className={`thumb ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
