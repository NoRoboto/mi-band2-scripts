'use strict';

const { scan } = require('../init');

// Run wrapper
scan((miband, customData) => {
  miband.showNotification('message');
  console.log("Sending message to mi band 2!")
})