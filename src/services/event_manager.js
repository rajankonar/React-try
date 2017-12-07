var {EventEmitter} = require('fbemitter');

const EventManager = function () {
  this.emitter = this.emitter || new EventEmitter();

  this.authChannel = 'authState';

  this.getEmitter = function() {
    return this.emitter;
  }
}

module.exports = new EventManager();