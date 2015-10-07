(function(window) {
    
    var details = "dkjfjkdfkdf";
    
    var app = {
        
        data: [],
        
        init: function() {
            console.log("Setup App");
            this.getNetworkData("http://leonbaird.co.uk");
            this.username = "Bob";
            
            this.ui.loadUI();
            
            console.log("Details "+details);
            
            window.alert("HI");
        },
        
        getNetworkData: function(url) {
            console.log("Get data with url: "+url);
        },
        
        username: null,
        
        ui: {
            
            loadUI: function() {
                console.log("Loading UI");
            }
            
        }
        
    };
    
    window.app = app;
    
    app.init();
})(window);


// make class
function Person(surname, forename) {
    this.surname = surname;
    this.forename = forename;
}

Person.PersonTypeAdmin = "admin";
Person.PersonTypeNormal = "normal";

Person.prototype.activeMember = true;

Person.prototype.getFullName = function() {
    return this.forename+" "+this.surname;
}