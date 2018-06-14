'use strict';

global.TextDecoder = require('util').TextDecoder;
const MiBand = require('miband');
const bluetooth = require('webbluetooth').bluetooth;
const notifier = require('node-notifier');
const log = console.log;

// Default data
const customData = {
  prevTap: new Date()
}

/**
 * Async function that connect automatically nearest xiaomi mi band 2 device 
 * @param { function } cb. Executes arbitrary cb
 */

const scan = async (cb) => {
  try {
    log('Requesting Bluetooth Device...');
    const device = await bluetooth.requestDevice({
      filters: [
        { services: [MiBand.advertisementService] }
      ],
      optionalServices: MiBand.optionalServices
    });

    device.addEventListener('gattserverdisconnected', () => {
      log('Device disconnected');
    });

    log('Connecting to the device...');

    initServer(device, cb)

  } catch (error) {
    log('Argh!', error);
  }
}

/**
 * Async function that executes mi band init statement. (mi band api)
 * @param { function } cb. Executes arbitrary cb
 */

const initServer = async (device, cb) => {
  const server = await device.gatt.connect();

  notifier.notify({
    title: 'AutoClicker',
    message: 'Mi band 2 are now connected',
    wait: false,
    timeout: 5
  });
  log('Connected');

  let miband = new MiBand(server);

  await miband.init();

  cb(miband, customData)
}


module.exports = {
  scan: scan
}