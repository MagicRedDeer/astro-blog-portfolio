import { Github, Linkedin, Mail, Twitter } from 'lucide-preact';

type SocialLink = {
  name: string;
  href: string;
  icon: typeof Github;
};

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <Icon className="w-5 h-5 mr-2" />
          {name}
        </a>
      ))}
    </div>
  );
}