import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <Label htmlFor="email">Email</Label>
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
      <fieldset>
        <Label htmlFor="email">Password</Label>
        <Input
          id="password"
          placeholder="********"
          type="password"
          autoCorrect="off"
          disabled={isLoading}
        />
      </fieldset>
      <Button disabled={isLoading}>
        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>}
        Sign In
      </Button>
    </form>
  );
}
