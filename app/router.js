import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('foo');
  this.route('bar');
  this.route('alpha');
  this.route('beta');
  this.route('gamma');
});

export default Router;
