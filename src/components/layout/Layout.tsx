import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/fetch', label: 'Fetch API', icon: '📡' },
    { path: '/axios', label: 'Axios', icon: '🔧' },
    { path: '/swr', label: 'SWR', icon: '⚡' },
    { path: '/rtk-query', label: 'RTK Query', icon: '⚛️' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation Header */}
      <nav className="bg-surface shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-textPrimary">Data Fetching Demo</span>
            </Link>
            
            <div className="hidden md:flex space-x-2">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive(path)
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-textSecondary hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <details className="relative">
                <summary className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary cursor-pointer">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="absolute right-0 mt-2 w-64 bg-surface rounded-lg shadow-xl border py-2 z-50">
                  {navItems.map(({ path, label, icon }) => (
                    <Link
                      key={path}
                      to={path}
                      className={`flex items-center space-x-4 px-5 py-4 text-base transition-colors ${
                        isActive(path)
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-textSecondary hover:bg-primary/5'
                      }`}
                    >
                      <span className="text-xl">{icon}</span>
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
