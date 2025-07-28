import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import FetchDemo from './pages/FetchDemo';
import AxiosDemo from './pages/AxiosDemo';
import SWRDemo from './pages/SWRDemo';
import RTKQueryDemo from './pages/RTKQueryDemo';

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="fetch" element={<FetchDemo />} />
              <Route path="axios" element={<AxiosDemo />} />
              <Route path="swr" element={<SWRDemo />} />
              <Route path="rtk-query" element={<RTKQueryDemo />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
