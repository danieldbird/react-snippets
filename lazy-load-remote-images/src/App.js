import React, { useEffect, useState } from "react";
import LazyLoadImage from "./components/LazyLoadImage";
import { fetchImages } from "./utils/fetchImages";

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages().then((images) => {
      setImages(images);
    });
  }, []);

  console.log(images);

  return (
    <div>
      <div className="images">
        {images &&
          images.map((image) => {
            return <LazyLoadImage key={image.id} image={image} />;
          })}
      </div>
    </div>
  );
}
