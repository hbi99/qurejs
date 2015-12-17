
/*
 * 
 */

var Qure = require('../src/qure.js');

describe('Testing XHR, with POST method', function() {

	/* 
	 * 
	 */
	it('on file system', function(done) {
		
		Qure
			.xhr({
				method : 'POST',
				url  : 'http://sandbox/node-response/post.php',
				data : {
					"foo": "bar"
				}
			})
			.then(function(res) {
				console.log(res);
				done();
			});
		
	});

});

