import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { PlayerNameInput } from '../components/PlayerNameInput';
import { GameBoard } from '../components/GameBoard';
import { LoadingScreen } from '../components/LoadingScreen';
import { usePlayerName } from '../hooks/usePlayerName';
import { useMemoryGame } from '../hooks/useMemoryGame';
import { ImageData } from '../types/game';
const { Content } = Layout;



export default function HomePage() {
  const [images, setImages] = useState<string[]>([]);
  const [allImages, setAllImages] = useState<ImageData[]>([]);
  const [numberOfPairs, setNumberOfPairs] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  
  const { playerName, isNameSet, saveName, clearName } = usePlayerName();
  const { gameState, handleCardClick, resetGame } = useMemoryGame(images);

  // Fetch all available images once
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://challenge-uno.vercel.app/api/images');
        const data: ImageData[] = await response.json();
        setAllImages(data);
        // Initialize with default number of pairs
        const initialImageUrls = data.slice(0, numberOfPairs).map(image => image.url);
        setImages(initialImageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [numberOfPairs]);

  // Update images when number of pairs changes
  useEffect(() => {
    if (allImages.length > 0) {
      const imageUrls = allImages.slice(0, numberOfPairs).map(image => image.url);
      setImages(imageUrls);
    }
  }, [numberOfPairs, allImages]);

  const handlePlayerSubmit = (name: string, pairs: number) => {
    setNumberOfPairs(pairs);
    saveName(name);
  };

  const handleChangePlayer = () => {
    clearName();
    resetGame();
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <StyleProvider>
      <Layout className="min-h-screen bg-gray-50">
        <Content>
          {!isNameSet ? (
            <PlayerNameInput 
              onSubmit={handlePlayerSubmit} 
              maxPairs={allImages.length} 
            />
          ) : (
            <GameBoard
              playerName={playerName}
              cards={gameState.cards}
              errors={gameState.errors}
              matches={gameState.matches}
              isGameComplete={gameState.isGameComplete}
              onCardClick={handleCardClick}
              onReset={resetGame}
              onChangePlayer={handleChangePlayer}
            />
          )}
        </Content>
      </Layout>
    </StyleProvider>
  );
}
