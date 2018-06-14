'use strict';

const robot = require("robotjs");
const { scan } = require('../init');
const log = console.log;

const args = process.argv;

/**
 * Determine if, a double or single tap was sent 
 * @param { Date } currentTap.
 * @param { Date } prevTap.
 */

const getTaps = (currentTap, prevTap) => {
  const seconds = (currentTap - prevTap) / 1000;
  if (seconds > 0.6) {
    log(`Tap detected: ${args[2] || "right"}`);
    launchAction(true);
  } else {
    log(`Tap detected: ${args[3] || "left"}`);
    launchAction(false);
  }
}

/**
 * Execute keyboard action default: left and right  
 * @param { boolean } tap.
 */

const launchAction = (tap) => {
  const action1 = args[2] || "right";
  const action2 = args[3] || "left";
  robot.keyTap(tap ? action1 : action2);
}

// Run wrapper
scan((miband, customData) => {
  miband.on('button', () => {
    const currentTap = new Date();
    getTaps(currentTap, customData.prevTap);
    customData.prevTap = currentTap;
  })
})