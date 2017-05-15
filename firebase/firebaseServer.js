var urlMonitor = require('./Firebase/url-monitor,js');
var dataMonitor = require('./Firebase/data-monitor.js');

urlMonitor.listen();
dataMonitor.listen();
