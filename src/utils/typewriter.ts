// Constants for typewriter animation
export const TYPEWRITER_SPEEDS = {
  TYPING: 40,    // Reduced from 100ms
  DELETING: 20,  // Reduced from 50ms
  PAUSE: 1000,   // Reduced from 2000ms
} as const;

// Helper to get next word index
export const getNextWordIndex = (currentIndex: number, totalWords: number): number => 
  (currentIndex + 1) % totalWords;

// Helper to handle text manipulation
export const updateTypewriterText = (
  currentText: string, 
  targetWord: string, 
  isDeleting: boolean
): string => {
  if (isDeleting) {
    return currentText.slice(0, -1);
  }
  return targetWord.slice(0, currentText.length + 1);
};