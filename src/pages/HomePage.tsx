import { Link } from 'react-router-dom';

const HomePage = () => {
  const demoCards = [
    {
      to: '/fetch',
      icon: '📡',
      title: 'Fetch API',
      description: 'Native browser API with manual state management and error handling.',
      color: 'primary',
    },
    {
      to: '/axios',
      icon: '🔧',
      title: 'Axios',
      description: 'HTTP client library with interceptors and advanced error handling.',
      color: 'secondary',
    },
    {
      to: '/swr',
      icon: '⚡',
      title: 'SWR',
      description: 'Data fetching with automatic caching and revalidation strategies.',
      color: 'accent',
    },
    {
      to: '/rtk-query',
      icon: '⚛️',
      title: 'RTK Query',
      description: 'The official data fetching and caching solution for Redux.',
      color: 'purple-500',
    },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        {/* <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-textPrimary mb-6 leading-tight">
            Data Fetching in React
          </h1>
          <p className="text-xl text-textSecondary mb-10 max-w-3xl mx-auto">
            Explore and compare popular data fetching methods in React with practical demos using the DummyJSON products API.
          </p>
          <div className="bg-surface rounded-xl shadow-lg p-6 max-w-4xl mx-auto border">
            <h2 className="text-2xl font-semibold mb-4 text-textPrimary">API Endpoint Used</h2>
            <code className="bg-primary/10 px-4 py-2 rounded-lg text-primary font-mono text-lg">
              https://dummyjson.com/products
            </code>
          </div>
        </div> */}

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {demoCards.map(card => (
            <Link
              key={card.to}
              to={card.to}
              className="group bg-surface rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border hover:border-primary"
            >
              <div className={`text-4xl mb-5 text-${card.color}`}>{card.icon}</div>
              <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-textSecondary mb-6">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
