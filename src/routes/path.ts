export const rootPaths = {
  root: '/',
  pagesRoot: '/',
  authRoot: '/authentication',
  errorRoot: '/error',
};

/**
 * Object containing various paths used in the application.
 */
const paths = {
  default: `${rootPaths.root}`,
  transactions: `${rootPaths.pagesRoot}transactions`,
  creditCards: `${rootPaths.pagesRoot}credit-cards`,
  investments: `${rootPaths.pagesRoot}investments`,
  loans: `${rootPaths.pagesRoot}loans`,
  accounts: `${rootPaths.pagesRoot}accounts`,
  setting: `${rootPaths.pagesRoot}setting`,
  notFound: `${rootPaths.errorRoot}/404`,
};

export default paths;
