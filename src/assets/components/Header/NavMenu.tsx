import { Link } from 'react-router-dom';

type NavLink =
  | { to: string; label: string; external?: false }
  | { href: string; label: string; external: true };

const links: NavLink[] = [
  { to: '/',         label: 'Главная'     },
  { to: '/about',    label: 'О нас'       },
  { to: '/gallery',  label: 'Фотографии'  },
  { to: '/prices',   label: 'Цены'        },
  { to: '/contacts', label: 'Контакты'    },
  {
    href: 'https://wa.me/79050487219',
    label: 'Забронировать',
    external: true,
  },
];

const linkClass = `
  relative text-gray-800
  after:content-['']
  after:absolute after:left-0 after:bottom-[2px]
  after:h-[2px] after:w-0 after:bg-current
  after:transition-[width] after:duration-300
  hover:after:w-full
`;

export const NavMenu = () => (
  <nav
    className="hidden md:flex flex-shrink-0 gap-10 min-w-0 text-3xl whitespace-nowrap"
    style={{ fontFamily: "'Great Vibes', cursive" }}
  >
    {links.map((item) =>
      item.external ? (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {item.label}
        </a>
      ) : (
        <Link key={item.to} to={item.to} className={linkClass}>
          {item.label}
        </Link>
      )
    )}
  </nav>
);
