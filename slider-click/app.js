'use strict';

const robot = require("robotjs");
const notifier = require('node-notifier');
const { scan } = require('../init');
const log = console.log;

const args = process.argv;
console.log(args);

/**
 * Determine if, a double or single tap was sent 
 * @param { Date } currentTap.
 * @param { Date } prevTap.
 */

const getTaps = (currentTap, prevTap) => {
  const seconds = (currentTap - prevTap) / 1000;
  if (seconds < 0.6) {
    log('Tap < detected');
    launchAction(true)
  } else {
    log('Tap > detected');
    launchAction(false)
  }
}

const launchAction = (tap) => {
  const action1 = args[2] || "left";
  const action2 = args[3] || "right";
  robot.keyTap(tap ? action1 : action2);
}

scan((miband, customData) => {
  miband.on('button', () => {
    const currentTap = new Date();
    getTaps(currentTap, customData.prevTap);
    customData.prevTap = currentTap;
  })
})