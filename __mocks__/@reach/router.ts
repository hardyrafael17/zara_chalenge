const router = jest.requireActual('@reach/router');

module.exports = {
  ...router,
  useLocation: jest.fn()
}
