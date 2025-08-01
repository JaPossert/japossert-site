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
        
        <div className="flex flex-col items-center mx-auto">
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent opacity-40"></div>
          <div className="w-0 h-0 border-l-[2px] border-r-[2px] border-t-[3px] border-l-transparent border-r-transparent border-t-primary opacity-40 -mt-px"></div>
        </div>
        
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Jakob
        </p>
      </div>
    </footer>
  );
};

export default Footer;