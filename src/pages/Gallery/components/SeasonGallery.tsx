import { useState } from "react";

// Базовый путь для GitHub Pages
const base = import.meta.env.BASE_URL;

// Массив путей к файлам
const generateImages = (folder: string, count: number) =>
  Array.from({ length: count }, (_, i) => `${base}photos/${folder}/${i + 1}.jpg`);

const categories = {
  winter: generateImages("winter", 5),
  summer: generateImages("summer", 4),
  indoor: generateImages("indoor", 11),
};

// Шрифт в стиле "Great Vibes"
const fancyFont = { fontFamily: "'Great Vibes', cursive" };

// Базовый класс кнопки
const tabBaseClass =
  "px-4 sm:px-6 py-2 text-2xl sm:text-3xl font-semibold border-b-2 transition-colors";

// Генератор класса для кнопки
const getTabClass = (
  active: boolean,
  color: "blue" | "green" | "rose"
): string => {
  if (active) return `${tabBaseClass} border-${color}-600 text-${color}-600`;
  return `${tabBaseClass} border-transparent text-gray-500 hover:text-${color}-500`;
};

export default function SeasonGallery() {
  const [tab, setTab] = useState<"winter" | "summer" | "indoor">("winter");

  const images = categories[tab];

  return (
    <div>
      {/* Вкладки */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
        <button
          onClick={() => setTab("winter")}
          className={getTabClass(tab === "winter", "blue")}
          style={fancyFont}
        >
          Зимой ❄
        </button>
        <button
          onClick={() => setTab("summer")}
          className={getTabClass(tab === "summer", "green")}
          style={fancyFont}
        >
          Летом 🌿
        </button>
        <button
          onClick={() => setTab("indoor")}
          className={getTabClass(tab === "indoor", "rose")}
          style={fancyFont}
        >
          Внутри дома 🏠
        </button>
      </div>

      {/* Галерея */}
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Фото ${index + 1}`}
            className="shadow rounded-md w-full h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
