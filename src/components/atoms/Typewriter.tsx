import { useEffect, useState } from 'preact/hooks';
import { 
  TYPEWRITER_SPEEDS, 
  getNextWordIndex, 
  updateTypewriterText 
} from '../../utils/typewriter';

type TypewriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export default function Typewriter({
  words,
  typingSpeed = TYPEWRITER_SPEEDS.TYPING,
  deletingSpeed = TYPEWRITER_SPEEDS.DELETING,
  pauseDuration = TYPEWRITER_SPEEDS.PAUSE,
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentIndex];
    
    const timeout = setTimeout(() => {
      const newText = updateTypewriterText(currentText, currentWord, isDeleting);
      setCurrentText(newText);

      if (isDeleting && newText === '') {
        setIsDeleting(false);
        setCurrentIndex(prev => getNextWordIndex(prev, words.length));
      } else if (!isDeleting && newText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}