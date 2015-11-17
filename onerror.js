window.onerror = function(msg, file, line, col, error) {
    // callback is called with an Array[StackFrame]

    function callback(result) {
        // body...

        for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }

    function errback(error) {
        // body...
        //console.log(error);
    }


    StackTrace.get().then(callback).catch(errback);
};
