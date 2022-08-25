import React, { useEffect, useRef, useState } from "react";
import placeholder from "../images/placeholder.jpg";

export default function Image({ image }) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(image.download_url);
        }
      },
      {
        rootMargin: "400px",
      }
    );

    return observer.observe(imageRef.current);
  }, [image.download_url]);

  return (
    <div>
      <img ref={imageRef} key={image.id} src={imageSrc} alt={image.author} width="50%" />
    </div>
  );
}
