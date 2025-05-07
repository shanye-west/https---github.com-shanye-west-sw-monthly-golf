import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-heading font-bold text-primary hover:text-primary/90 transition-colors">
              SW Golf
            </Link>
            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors font-medium hidden sm:inline-block"
              >
                Home
              </Link>
              <Link 
                to="/admin" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Admin
              </Link>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-card border-t border-border py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 SW Monthly Golf. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/admin" 
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 