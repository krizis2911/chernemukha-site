import { useState } from 'react';

const base = import.meta.env.BASE_URL;
const images = Array.from({ length: 10 }, (_, i) => `${base}reviews/${i + 1}.png`);

export default function AvitoReviewGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () =>
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <div className="mx-auto py-8 w-full max-w-4xl">
      {/* ---------- лента + боковые стрелки на ПК ---------- */}
      <div className="flex justify-center items-center">
        {/* левая стрелка (скрыта на мобилке) */}
        <button
          onClick={showPrev}
          className="hidden sm:inline-flex justify-center items-center bg-white hover:bg-gray-100 shadow mr-4 rounded-full w-10 h-10 text-2xl"
        >
          ←
        </button>

        {/* сама карточка отзыва */}
        <div className="bg-white shadow p-4 rounded-xl overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Отзыв ${currentIndex + 1}`}
            className="mx-auto w-[300px] sm:w-[460px] h-[200px] object-contain"
          />
        </div>

        {/* правая стрелка (скрыта на мобилке) */}
        <button
          onClick={showNext}
          className="hidden sm:inline-flex justify-center items-center bg-white hover:bg-gray-100 shadow ml-4 rounded-full w-10 h-10 text-2xl"
        >
          →
        </button>
      </div>

      {/* ---------- стрелки под картинкой на мобилке ---------- */}
      <div className="sm:hidden flex justify-between mt-4">
        <button
          onClick={showPrev}
          className="bg-white hover:bg-gray-100 shadow rounded-full w-10 h-10 text-xl"
        >
          ←
        </button>
        <button
          onClick={showNext}
          className="bg-white hover:bg-gray-100 shadow rounded-full w-10 h-10 text-xl"
        >
          →
        </button>
      </div>
    </div>
  );
}
