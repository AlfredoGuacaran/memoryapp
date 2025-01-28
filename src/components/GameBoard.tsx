import { Card } from '../types/game';
import { MemoryCard } from './MemoryCard';
import { Typography, Button, Row, Col, Card as AntCard, Space } from 'antd';

const { Title, Text } = Typography;

interface GameBoardProps {
  playerName: string;
  cards: Card[];
  errors: number;
  matches: number;
  isGameComplete: boolean;
  onCardClick: (card: Card) => void;
  onReset: () => void;
  onChangePlayer: () => void;
}

export const GameBoard = ({
  playerName,
  cards,
  errors,
  matches,
  isGameComplete,
  onCardClick,
  onReset,
  onChangePlayer,
}: GameBoardProps) => {
  return (
    <main className="p-4 md:p-8" role="main">
      <div className="max-w-6xl mx-auto">
        {/* Header with stats and controls */}
        <header className="mb-8">
          <Title level={2} className="text-center mb-6">
            Memory Game
          </Title>
          <Row gutter={[16, 16]} justify="center" className="mb-4">
            <Col xs={24} sm={8}>
              <AntCard className="text-center">
                <Text strong>Player</Text>
                <Title level={4} className="m-0">
                  {playerName}
                </Title>
              </AntCard>
            </Col>
            <Col xs={12} sm={8}>
              <AntCard className="text-center">
                <Text strong>Matches</Text>
                <Title level={4} className="m-0 text-green-500" aria-live="polite">
                  {matches}
                </Title>
              </AntCard>
            </Col>
            <Col xs={12} sm={8}>
              <AntCard className="text-center">
                <Text strong>Errors</Text>
                <Title level={4} className="m-0 text-red-500" aria-live="polite">
                  {errors}
                </Title>
              </AntCard>
            </Col>
          </Row>
          
          {/* Game controls */}
          <nav className="game-controls" aria-label="Game Controls">
            <Row justify="center">
              <Space>
                <Button 
                  type="primary" 
                  onClick={onReset}
                  aria-label="Restart Game"
                >
                  Restart Game
                </Button>
                <Button 
                  onClick={onChangePlayer}
                  aria-label="Change Player"
                >
                  Change Player
                </Button>
              </Space>
            </Row>
          </nav>
        </header>

        {/* Game completion message */}
        {isGameComplete && (
          <div 
            className="text-center mb-8" 
            role="alert" 
            aria-live="polite"
          >
            <Title level={3} className="text-green-500">
              🎉 Congratulations {playerName}! You won! 🎉
            </Title>
            <Space>
              <Button 
                type="primary" 
                size="large" 
                onClick={onReset}
                aria-label="Play Again"
              >
                Play Again
              </Button>
              <Button 
                size="large" 
                onClick={onChangePlayer}
                aria-label="Change Player"
              >
                Change Player
              </Button>
            </Space>
          </div>
        )}

        {/* Cards grid */}
        <section 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          role="grid"
          aria-label="Memory Game Board"
        >
          {cards.map((card, index) => (
            <div 
              key={card.id} 
              className="aspect-w-1 aspect-h-1"
              role="gridcell"
              aria-rowindex={Math.floor(index / 6) + 1}
              aria-colindex={(index % 6) + 1} 
            >
              <MemoryCard card={card} onClick={onCardClick} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}; 