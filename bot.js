/*
 * Vanity
 * Version 2.6
 * Devourz
 */

const Files = require(require('path').join(process.cwd(), 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}