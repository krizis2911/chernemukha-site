import { useState } from "react";

const base = import.meta.env.BASE_URL;
const images = Array.from({ length: 10 }, (_, i) => `${base}reviews/${i + 1}.png`);

export default function AvitoReviewGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="mx-auto py-8 w-full max-w-4xl">
      <div className="relative bg-white shadow rounded-xl overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Отзыв ${currentIndex + 1}`}
          className="p-4 w-full h-[200px] object-contain"
        />
      </div>

      {/* 🔻 Стрелки — адаптивно: горизонтально на desktop, вертикально на mobile */}
      <div className="sm:top-1/2 sm:right-0 sm:left-0 sm:absolute flex justify-between mt-4 sm:mt-0 sm:px-4 sm:-translate-y-1/2">
        <button
          onClick={showPrev}
          className="bg-white hover:bg-gray-100 shadow px-4 py-2 rounded-full text-xl"
        >
          ←
        </button>
        <button
          onClick={showNext}
          className="bg-white hover:bg-gray-100 shadow px-4 py-2 rounded-full text-xl"
        >
          →
        </button>
      </div>
    </div>
  );
}
