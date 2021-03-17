var apiUrl = "http://localhost:8080/blueprints/"
apiclient = (function() {
    return {
        getBlueprintsByAuthor: function(name, callback) {
            jQuery.ajax({
                url: apiUrl + name,
                success: function (result) {
                    callback(null, result);
                },
                async: true
            });
        },
        getBlueprintsByNameAndAuthor: function(author, name, callback) {
            jQuery.ajax({
                url: apiUrl+name+"/"+author,
                success: function (result) {
                    callback(null, result);
                },
                async: true
            });
        },
    };
})();

