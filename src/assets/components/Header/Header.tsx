import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  return (
    <header className="bg-[#f4ebdc] w-full">
      <div className="flex justify-between items-center px-6 py-0">
        <Logo />
        <NavMenu />
           <MobileMenu />
      </div>
    </header>
  );
};
