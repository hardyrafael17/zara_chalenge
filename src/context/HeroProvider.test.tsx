// import { render, screen, fireEvent } from '@testing-library/react';
import { HeroProvider, HeroContext } from './HeroProvider';
import { useLocation } from '@reach/router';

beforeEach(() => {
  useLocation.mockImplementation(() => ({
    pathname: '/about/',
  }));
});
describe('HeroProvider', () => {
  test('renders without crashing', () => {
    render(
      <HeroProvider>
        <div>Test</div>
      </HeroProvider>
    );
  });

  // test('provides the HeroContext to children', () => {
  //   const TestComponent = () => {
  //     const context = React.useContext(HeroContext);
  //     return <div>{context.allHeroes.length}</div>;
  //   };
  //   render(
  //     <HeroProvider>
  //       <TestComponent />
  //     </HeroProvider>
  //   );
  //   expect(screen.getByText('0')).toBeTruthy();
  // });
});
