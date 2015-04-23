var App = function(appName) {
    this.name = appName;
};

App.prototype.doSomethingAsync = function() {
    setTimeout(function() {
        console.log('Async operation finished'); 
    }, 2000);
};
