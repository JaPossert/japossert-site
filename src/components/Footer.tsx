const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="text-ethereal text-sm">
            Built with intention
          </p>
          <p className="text-muted-foreground text-xs">
            No cookies, no analytics, no newsletter—just a doorway
          </p>
        </div>
        
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent opacity-40 mx-auto"></div>
        
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Jakob
        </p>
      </div>
    </footer>
  );
};

export default Footer;