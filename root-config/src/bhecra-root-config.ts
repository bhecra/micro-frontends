import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';
import { HTMLLayoutData } from 'single-spa-layout/dist/types/isomorphic/constructRoutes';
import microfrontendLayout from './microfrontend-layout.html';
// import './assets/styles/styles.css';
// import './assets/img/Cover.png';

const data: HTMLLayoutData = {
  props: {
    myProp: 'Bhecra',
  },
  loaders: {},
};
const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

registerApplication({
  name: '@bhecra/angular-mf',
  app: () => System.import('@bhecra/angular-mf'),
  activeWhen: ['/'],
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
