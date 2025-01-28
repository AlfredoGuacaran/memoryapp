import { useState, useEffect } from 'react';

const PLAYER_NAME_KEY = 'memoryGamePlayerName';

export const usePlayerName = () => {
  const [playerName, setPlayerName] = useState<string>('');
  const [isNameSet, setIsNameSet] = useState<boolean>(false);

  useEffect(() => {
    const storedName = localStorage.getItem(PLAYER_NAME_KEY);
    if (storedName) {
      setPlayerName(storedName);
      setIsNameSet(true);
    }
  }, []);

  const saveName = (name: string) => {
    localStorage.setItem(PLAYER_NAME_KEY, name);
    setPlayerName(name);
    setIsNameSet(true);
  };

  const clearName = () => {
    localStorage.removeItem(PLAYER_NAME_KEY);
    setPlayerName('');
    setIsNameSet(false);
  };

  return {
    playerName,
    isNameSet,
    saveName,
    clearName,
  };
}; 