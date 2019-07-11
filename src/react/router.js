const devDomain = 'https://dev.domain/api/v1';
const prodDomain = '/api/v1';

const devRoutes = {
  test: {
    someRequest: `${devDomain}/go/?debug=1`,
  },
};

const prodRoutes = {
  test: {
    someRequest: `${prodDomain}/go/`,
  },
};

const routes = process.env.NODE_ENV === 'dev' ? devRoutes : prodRoutes;

export default routes;
