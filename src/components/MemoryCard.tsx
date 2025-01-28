import { Card } from '../types/game';
import Image from 'next/image';

interface MemoryCardProps {
  card: Card;
  onClick: (card: Card) => void;
}

export const MemoryCard = ({ card, onClick }: MemoryCardProps) => {
  return (
    <div
      className="memory-card relative w-full pt-[100%] cursor-pointer perspective-1000"
      onClick={() => onClick(card)}
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 transform-style-3d ${
          card.isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="memory-card__front absolute inset-0 bg-blue-500 rounded-lg shadow-lg backface-hidden">
          <div className="w-full h-full flex items-center justify-center text-white text-4xl">
            ?
          </div>
        </div>

        {/* Back of card (image) */}
        <div className="memory-card__back absolute inset-0 rounded-lg shadow-lg backface-hidden rotate-y-180 overflow-hidden">
          <Image
            src={card.imageUrl}
            alt="Card"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}; 