const NotifySend = require('node-notifier').NotifySend;

var notifier = new NotifySend();

notifier.notify({
  title: 'Foo',
  message: 'Hello World',
  // .. and other notify-send flags:
  urgency: void 0,
  time: void 0,
  category: void 0,
  hint: void 0
});