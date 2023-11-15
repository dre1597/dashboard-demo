import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils.ts';

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn('items-center space-x-4 lg:space-x-6 hidden md:flex', className)} {...props}>
      <Link
        to="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        to="/profile"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Profile
      </Link>
    </nav>
  );
}
