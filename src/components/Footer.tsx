const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © 2026 John Doe. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Built with <span className="text-primary">♥</span> and lots of coffee
        </p>
      </div>
    </footer>
  );
};

export default Footer;
