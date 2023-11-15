import { FormEvent, useState } from 'react';

import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

import { cn } from '@/lib/utils.ts';

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className={cn('grid gap-6')}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <fieldset className="grid gap-1 p-2 w-80">
            <Label htmlFor="email" className="pb-4 text-md text-center">Email</Label>
            <Input
              id="email"
              placeholder="email@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </fieldset>
          <fieldset className="grid gap-1 p-2 w-80">
            <Label htmlFor="email" className="pb-4 text-md text-center">Password</Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </fieldset>
        </div>
        <Button disabled={isLoading} className="w-full mt-3 text-md" size="lg">
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>}
          Sign In
        </Button>
      </form>
    </div>
  );
}
