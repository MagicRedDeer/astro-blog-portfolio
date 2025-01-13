import { Code, Award, Clock } from 'lucide-preact';

type SkillCardProps = {
  name: string;
  description: string;
  proficiency: number;
  yearsOfExperience?: number;
  certifications?: string[];
  links?: string[];
};

export default function SkillCard({
  name,
  description,
  proficiency,
  yearsOfExperience,
  certifications,
  links
}: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
        <span className="text-sm font-medium px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
          {proficiency}%
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="space-y-3">
        {yearsOfExperience && (
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-primary-600" />
            <span>{yearsOfExperience} years of experience</span>
          </div>
        )}
        
        {certifications && certifications.length > 0 && (
          <div className="flex items-center text-sm text-gray-600">
            <Award className="w-4 h-4 mr-2 text-primary-600" />
            <span>{certifications.join(', ')}</span>
          </div>
        )}
        
        {links && links.length > 0 && (
          <div className="flex items-center text-sm text-gray-600">
            <Code className="w-4 h-4 mr-2 text-primary-600" />
            <div className="flex gap-2">
              {links.map((link) => (
                <a
                  key={link}
                  href={link}
                  className="text-primary-600 hover:text-primary-700 hover:underline"
                >
                  {link.startsWith('/projects') ? 'Project' : 'Blog'}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${proficiency}%` }}
          />
        </div>
      </div>
    </div>
  );
}