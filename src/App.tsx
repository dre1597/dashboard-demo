import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle.tsx';
import { router } from '@/router.ts';

import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed top-4 right-4">
        <ModeToggle/>
      </div>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
