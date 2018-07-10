# **keyboard**
<h1 align="center">Slider remote control</h1> <br>
<p align="center">
A simple implementation of keyboard actions in xiaomi mi band 2 in tap button.
 <img alt="xiaomi mi band passing slider in tap action gif" title="mi band 2 slider header" src="https://raw.githubusercontent.com/NoRoboto/mi-band2-scripts/master/src/slider_header.gif">
</p>

## Features
* Allows use 2 action (single and double tap): [**Key list**](https://robotjs.io/docs/syntax#keys)
* Bluetooth comunication.
* Pure Nodejs :smile_cat:.

## Pre-conditions
#### <i class="icon-list"></i> We need

> - [Nodejs](https://nodejs.org/en/) >= 6.1
> - [NPM](https://www.npmjs.com/)
> - (Optional) [Yarn](https://yarnpkg.com/en/)
> - Bluetooth

## Run (Main folder)
```
yarn keyboard arg1 arg2
or
npm run-script keyboar arg1 arg2
```
Or ``` node app.js key1 key2 ``` in **keyboard** folder

## Example
```
npm run-script keyboard
```
**default:** key1: left, key2: right 

```
npm run-script keyboard "up" "down"
```
