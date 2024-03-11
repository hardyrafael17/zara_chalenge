import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HeroProvider, HeroContext } from './HeroProvider';
import axios, { AxiosResponse } from 'axios';

// Mock the useLocation hook from @reach/router
jest.mock('@reach/router', () => {
  return {
    useLocation: jest.fn().mockImplementation(() => {
      return { pathname: '/heroes' };
    }),
  };
});

// Mock the axios module
jest.mock('axios'),
  () => {
    const responseData = {
      status: 200,
      statusText: 'OK',
      data: {
        data: {
          results: [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Spider-Man' },
          ],
        },
      },
    };
    return {
      get: jest.fn().mockResolvedValue(responseData),
    };
  };

afterEach(() => {
  jest.clearAllMocks();
});

describe('HeroProvider', () => {
  test('renders without crashing', () => {
    render(
      <HeroProvider>
        <div>Test</div>
      </HeroProvider>
    );
  });

  test('provides the HeroContext to children', () => {
    let contextValues = {} as any;
    const TestComponent = () => {
      contextValues = React.useContext(HeroContext);
      return <div>{contextValues.allHeroes.length}</div>;
    };
    render(
      <HeroProvider>
        <TestComponent />
      </HeroProvider>
    );
    expect(contextValues.allHeroes.length).toBe(0);
  });
});
