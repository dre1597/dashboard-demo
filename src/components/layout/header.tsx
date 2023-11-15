import { MobileNav } from '@/components/layout/mobile-nav.tsx';
import { MainNav } from '@/components/layout/main-nav.tsx';

export function Header() {
  return (
    <header className="w-full h-[70px] border-b flex justify-between items-center px-6">
      <MobileNav/>
      <MainNav/>
    </header>
  );
}
