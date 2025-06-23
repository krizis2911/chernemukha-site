import { useState } from 'react';
import { Link } from 'react-router-dom';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Главная' },
    { to: '/about', label: 'О нас' },
    { to: '/gallery', label: 'Фотографии' },
    { to: '/prices', label: 'Цены' },
    { to: '/#contacts', label: 'Контакты' },
  ];

  return (
    <div className="md:hidden relative">
      {/* Кнопка меню */}
      <button
        onClick={() => setOpen(!open)}
        className="focus:outline-none text-gray-800 text-4xl"
        aria-label="Открыть меню"
      >
        ☰
      </button>

      {open && (
        <div className="top-full right-0 z-50 absolute bg-[#f4ebdc] shadow-lg mt-2 rounded-lg w-52 animate-fade-in">
          <ul
            className="flex flex-col gap-4 px-4 py-6 text-gray-800 text-2xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="inline-block after:-bottom-[1px] after:left-0 after:absolute relative after:bg-current after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/79999999999"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-block after:-bottom-[1px] after:left-0 after:absolute relative after:bg-current after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300"
              >
                Забронировать
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
