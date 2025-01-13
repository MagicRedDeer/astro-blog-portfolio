import { Download } from 'lucide-preact';
import Button from '../atoms/Button';

type ResumeHeaderProps = {
  title: string;
};

export default function ResumeHeader({ title }: ResumeHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <Button
        variant="primary"
        href="/resume.pdf"
        className="inline-flex items-center"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </Button>
    </div>
  );
}