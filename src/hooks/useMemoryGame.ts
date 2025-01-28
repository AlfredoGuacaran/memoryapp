import { useState, useEffect } from 'react';
import { Card, GameState } from '../types/game';

const FLIP_DELAY = 1000;

export const useMemoryGame = (images: string[]) => {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    errors: 0,
    matches: 0,
    selectedCards: [],
    isGameComplete: false,
  });

  useEffect(() => {
    if (images.length > 0) {
      initializeGame(images);
    }
  }, [images]);

  const initializeGame = (images: string[]) => {
    const duplicatedImages = [...images, ...images];
    const shuffledCards: Card[] = duplicatedImages
      .map((imageUrl, index) => ({
        id: index,
        imageUrl,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setGameState(prev => ({
      ...prev,
      cards: shuffledCards,
      errors: 0,
      matches: 0,
      selectedCards: [],
      isGameComplete: false,
    }));
  };

  const handleCardClick = (clickedCard: Card) => {
    if (
      clickedCard.isMatched ||
      clickedCard.isFlipped ||
      gameState.selectedCards.length >= 2
    ) {
      return;
    }

    const updatedCards = gameState.cards.map(card =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );

    const updatedSelectedCards = [...gameState.selectedCards, clickedCard];

    if (updatedSelectedCards.length === 2) {
      const [firstCard, secondCard] = updatedSelectedCards;
      const isMatch = firstCard.imageUrl === secondCard.imageUrl;

      setTimeout(() => {
        const finalCards = updatedCards.map(card => {
          // If it's a match, keep matched cards flipped
          if (isMatch && updatedSelectedCards.some(selected => selected.id === card.id)) {
            return { ...card, isFlipped: true, isMatched: true };
          }
          // If it's not a match, only flip back the selected cards
          if (!isMatch && updatedSelectedCards.some(selected => selected.id === card.id)) {
            return { ...card, isFlipped: false };
          }
          // Keep other cards in their current state
          return card;
        });

        const newMatches = gameState.matches + (isMatch ? 1 : 0);
        const isGameComplete = newMatches === images.length;

        setGameState(prev => ({
          ...prev,
          cards: finalCards,
          errors: prev.errors + (isMatch ? 0 : 1),
          matches: newMatches,
          selectedCards: [],
          isGameComplete,
        }));
      }, FLIP_DELAY);
    }

    setGameState(prev => ({
      ...prev,
      cards: updatedCards,
      selectedCards: updatedSelectedCards,
    }));
  };

  const resetGame = () => {
    if (images.length > 0) {
      initializeGame(images);
    }
  };

  return {
    gameState,
    handleCardClick,
    resetGame,
  };
}; 