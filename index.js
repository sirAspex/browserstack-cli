#!/usr/bin/env node

const pkg = require('./package.json');
const cfg = require('./config.json');
const app = require('commander');

var browserstack = require('./services/browserstack').init(cfg);

// register all commands
require('./commands/info').init(app, browserstack);
require('./commands/screenshot').init(app, browserstack);
require('./commands/phantom').init(app);

// current app version
app.version('bs-cli: ' + pkg.version);

// notice that we have to parse in a new statement.
app.parse(process.argv);

// if program was called with no arguments, show help.
if (app.args.length === 0) app.help();
