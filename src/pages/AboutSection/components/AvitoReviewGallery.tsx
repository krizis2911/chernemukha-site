import { useState } from "react";

const images = Array.from({ length: 10 }, (_, i) => `/reviews/${i + 1}.png`);

export default function AvitoReviewGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative mx-auto py-8 w-full max-w-4xl">
      <div className="relative bg-white shadow rounded-xl overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Отзыв ${currentIndex + 1}`}
          className="p-4 w-full h-[200px] object-contain"
        />
      </div>

      {/* Кнопки ← и → */}
      <button
        onClick={showPrev}
        className="top-1/2 left-2 z-10 absolute bg-white hover:bg-gray-100 shadow px-3 py-1 rounded-full text-xl -translate-y-1/2"
      >
        ←
      </button>
      <button
        onClick={showNext}
        className="top-1/2 right-2 z-10 absolute bg-white hover:bg-gray-100 shadow px-3 py-1 rounded-full text-xl -translate-y-1/2"
      >
        →
      </button>
    </div>
  );
}
