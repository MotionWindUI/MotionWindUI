import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  testMatch: ['<rootDir>/packages/**/__tests__/**/*.(test|spec).(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    // Aliases for monorepo packages
    '^@components/(.*)$': '<rootDir>/packages/components/$1',
    '^@hooks/(.*)$': '<rootDir>/packages/hooks/$1',
    '^@core/(.*)$': '<rootDir>/packages/core/$1',
    '^@utils/(.*)$': '<rootDir>/packages/utils/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{ts,tsx}',
    '!<rootDir>/packages/**/*.d.ts',
    '!<rootDir>/packages/**/__tests__/**',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  coverageDirectory: '<rootDir>/coverage',
};

export default config;
