/* eslint-disable */
export default {
  displayName: 'org',
  preset: './jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: './coverage/org',
  testMatch: ['<rootDir>/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/**/*(*.)@(spec|test).[jt]s?(x)'],
};
