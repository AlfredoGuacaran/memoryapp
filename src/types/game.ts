export interface Card {
  id: number;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: Card[];
  errors: number;
  matches: number;
  selectedCards: Card[];
  isGameComplete: boolean;
}

export interface GameStats {
  playerName: string;
  errors: number;
  matches: number;
} 

export interface ImageData {
  url: string;
  uuid: string;
  title: string;
  content_type: string;
}