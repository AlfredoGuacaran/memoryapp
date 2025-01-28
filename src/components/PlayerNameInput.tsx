import { useState } from 'react';
import { Input, Button, Form, Typography, Slider, InputNumber, Row, Col } from 'antd';

const { Title } = Typography;

interface PlayerNameInputProps {
  onSubmit: (name: string, numberOfPairs: number) => void;
  maxPairs: number;
}

export const PlayerNameInput = ({ onSubmit, maxPairs }: PlayerNameInputProps) => {
  const [name, setName] = useState('');
  const [pairs, setPairs] = useState(5);

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name.trim(), pairs);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4" role="main">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <Title level={2} className="text-center mb-6">
          Welcome to Memory Game!
        </Title>
        <Form 
          onFinish={handleSubmit} 
          layout="vertical" 
          className="w-full"
          aria-label="Game Setup Form"
        >
          <Form.Item
            label="Enter your name to start playing"
            name="playerName"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input
              size="large"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4"
              aria-label="Player Name Input"
              aria-required="true"
            />
          </Form.Item>
          <Form.Item
            label="Number of animal pairs to match"
            name="numberOfPairs"
            initialValue={pairs}
          >
            <Row gutter={16} align="middle">
              <Col span={16}>
                <Slider
                  min={2}
                  max={maxPairs}
                  value={pairs}
                  onChange={setPairs}
                  marks={{
                    2: '2',
                    [Math.round(maxPairs / 2)]: Math.round(maxPairs / 2),
                    [maxPairs]: maxPairs
                  }}
                  tooltip={{
                    formatter: (value) => `${value} pairs`
                  }}
                  aria-label="Number of Pairs Slider"
                  aria-valuemin={2}
                  aria-valuemax={maxPairs}
                  aria-valuenow={pairs}
                />
              </Col>
              <Col span={8}>
                <InputNumber
                  size="large"
                  min={2}
                  max={maxPairs}
                  value={pairs}
                  onChange={(value) => setPairs(value || 5)}
                  className="w-full"
                  aria-label="Number of Pairs Input"
                  role="spinbutton"
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
              disabled={!name.trim()}
              aria-disabled={!name.trim()}
            >
              Start Game
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}; 