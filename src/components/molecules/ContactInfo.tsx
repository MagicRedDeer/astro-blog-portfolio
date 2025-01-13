import { MapPin, Phone, Mail, Clock } from 'lucide-preact';

type ContactDetail = {
  icon: typeof MapPin;
  label: string;
  value: string;
};

const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@example.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Fri, 9:00 AM - 5:00 PM PST',
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactDetails.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start">
          <div className="flex-shrink-0">
            <Icon className="w-6 h-6 text-primary-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">{label}</p>
            <p className="text-base text-gray-600">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}