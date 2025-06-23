import { useState } from 'react';
import { Link } from 'react-router-dom';

type NavItem = { to: string; label: string };

const links: NavItem[] = [
  { to: '/',         label: 'Главная'      },
  { to: '/about',    label: 'О нас'        },
  { to: '/gallery',  label: 'Фотографии'   },
  { to: '/prices',   label: 'Цены'         },
  { to: '/contacts', label: 'Контакты'     }, // отдельная страница «Контакты»
];

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      {/* Кнопка-гамбургер */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Открыть меню"
        className="focus:outline-none text-gray-800 text-4xl"
      >
        ☰
      </button>

      {open && (
        <div className="top-full right-0 z-50 absolute bg-[#f4ebdc] shadow-lg mt-2 rounded-lg w-52 animate-fade-in">
          <ul
            className="flex flex-col gap-4 px-4 py-6 text-gray-800 text-2xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className="inline-block after:-bottom-[1px] after:left-0 after:absolute relative after:bg-current after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="https://wa.me/79050487219"
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
