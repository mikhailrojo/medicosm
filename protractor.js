exports.config = {
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
	specs: ['tests.js'],
	jasmineNodeOpts:{
		showColors: true,
		defaultTimeoutInterval: 30000
	},
	 jasmineNodeOpts: {
    // If true, print colors to the terminal.
    showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000}
    
};