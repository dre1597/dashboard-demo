import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle.tsx';
import './App.css';
import { Button } from '@/components/ui/button/button.tsx';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed top-4 right-4">
        <ModeToggle/>
      </div>
      <Button variant="default" size="default">Button</Button>
    </ThemeProvider>
  );
}

export default App;
