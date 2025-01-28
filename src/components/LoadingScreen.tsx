import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center">
      <Spin indicator={antIcon} />
      <h2 className="mt-4 text-lg font-medium text-gray-700">Loading Animals...</h2>
    </div>
  );
}; 