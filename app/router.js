import EmberRouterScroll from '@ember/routing/router';
import config from 'for-sale/config/environment';

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
});
