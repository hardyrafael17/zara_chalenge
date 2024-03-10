import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroProvider, HeroContext } from './HeroProvider';

jest.mock('@reach/router', () => {
  return {
    useLocation: jest.fn().mockImplementation(() => {
      return { pathname: '/heroes' };
    }),
  };
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
    const TestComponent = () => {
      const context = React.useContext(HeroContext);
      return <div>{context.allHeroes.length}</div>;
    };
    render(
      <HeroProvider>
        <TestComponent />
      </HeroProvider>
    );
    expect(screen.getByText('0')).toBeTruthy();
  });
});
