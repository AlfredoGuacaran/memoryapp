import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: [
    '@ant-design/cssinjs',
    'antd',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-table',
    'rc-tree',
    'rc-select',
    'rc-input',
    'rc-field-form',
    'rc-textarea',
    'rc-checkbox',
    'rc-menu',
    'rc-dropdown',
    'rc-virtual-list',
    'rc-trigger',
    'rc-tooltip',
    'rc-drawer',
    'rc-dialog',
    'rc-motion'
  ],
};

export default nextConfig;
