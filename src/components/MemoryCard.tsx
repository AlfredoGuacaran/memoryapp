import { Card } from '../types/game';
import Image from 'next/image';

interface MemoryCardProps {
  card: Card;
  onClick: (card: Card) => void;
}

export const MemoryCard = ({ card, onClick }: MemoryCardProps) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(card);
    }
  };

  const cardTitle = card.isFlipped || card.isMatched ? card.imageUrl.split('/').pop()?.replace('.jpg', '') : 'hidden card';

  return (
    <div
      role="button"
      tabIndex={0}
      className="memory-card relative w-full pt-[100%] cursor-pointer perspective-1000 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
      onClick={() => onClick(card)}
      onKeyDown={handleKeyPress}
      aria-label={`Memory card: ${cardTitle}`}
      aria-pressed={card.isFlipped}
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 transform-style-3d ${
          card.isFlipped ? 'rotate-y-180' : ''
        }`}
        aria-hidden="true"
      >
        {/* Front of card */}
        <div 
          className="memory-card__front absolute inset-0 bg-blue-500 rounded-lg shadow-lg backface-hidden"
          aria-hidden="true"
        >
          <div className="w-full h-full flex items-center justify-center text-white text-4xl">
            ?
          </div>
        </div>

        {/* Back of card (image) */}
        <div 
          className="memory-card__back absolute inset-0 rounded-lg shadow-lg backface-hidden rotate-y-180 overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src={card.imageUrl}
            alt={`Picture of ${cardTitle}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}; 