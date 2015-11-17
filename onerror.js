window.onerror = function(msg, file, line, col, error) {
    // callback is called with an Array[StackFrame]
    
    function callback (result) {
    	// body...
    	console.log(result);
    }

    function errback (error) {
    	// body...
    	//console.log(error);
    }


    StackTrace.fromError(error).then(callback).catch(errback);
};