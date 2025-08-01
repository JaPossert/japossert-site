import { 
  Linkedin, 
  Youtube, 
  Twitter, 
  ExternalLink, 
  Users, 
  UserCircle 
} from "lucide-react";

// Note: Some icons may need to be replaced with actual brand icons later
const SocialSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#", // Jakob will provide
      description: "Professional presence"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#", // Jakob will provide
      description: "Video explorations"
    },
    {
      name: "IYG",
      icon: Users,
      url: "#", // Jakob will provide
      description: "Community space"
    },
    {
      name: "Personal Intro",
      icon: UserCircle,
      url: "#", // Jakob will provide
      description: "Introduction"
    },
    {
      name: "X / Twitter",
      icon: Twitter,
      url: "#", // Jakob will provide
      description: "Brief thoughts"
    },
    {
      name: "Bluesky",
      icon: ExternalLink, // Placeholder, will need actual Bluesky icon
      url: "#", // Jakob will provide
      description: "Open social"
    },
    {
      name: "Mastodon",
      icon: ExternalLink, // Placeholder, will need actual Mastodon icon
      url: "#", // Jakob will provide
      description: "Federated presence"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center space-y-12">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Channels</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-cosmic text-lg leading-relaxed max-w-xl mx-auto">
            Minimal pathways to presence—not promotion
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 glow-hover presence-link"
              >
                <div className="text-center space-y-3">
                  <Icon className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-cosmic font-medium text-sm">{link.name}</h3>
                    <p className="text-ethereal text-xs mt-1">{link.description}</p>
                  </div>
                </div>
                
                {/* Tooltip on hover */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-card border border-border rounded-md px-3 py-1 text-xs text-cosmic whitespace-nowrap">
                    {link.description}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        
        <p className="text-ethereal text-sm italic">
          Links to be updated by Jakob
        </p>
      </div>
    </section>
  );
};

export default SocialSection;