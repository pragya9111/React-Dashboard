import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './pages/Dashboard';
import { DarkModeProvider } from './context/DarkModeContext';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </DarkModeProvider>
  );
};

export default App;