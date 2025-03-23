import slackLogo from './../../public/slack_logo.png';
import { Search } from 'lucide-react';
import Button from '../components/Button'; // Assuming you've implemented the Button component

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <img src={slackLogo} alt="Slack" height="25" width="100" className="h-15 w-auto" />
          
          <nav className="hidden md:flex space-x-6">
            <button className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center">
              Product
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900 font-medium text-sm">Enterprise</button>
            <button className="text-gray-700 hover:text-gray-900 font-medium text-sm">Resources</button>
            <button className="text-gray-700 hover:text-gray-900 font-medium text-sm">Pricing</button>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Search size={18} />
          </button>
          
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
            Sign in
          </a>
          
          <Button variant="secondary" className="hidden sm:block">
            TALK TO SALES
          </Button>
          
          <Button variant="primary" className="hidden sm:block">
            TRY FOR FREE
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;