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
        setBlueprint: function(author, name, newPlan) {

            var putPromise = $.ajax({
                url: "/blueprints/" + author + "/" + name + "/",
                type: "PUT",
                data: newPlan,
                contentType: "application/json"
                });
                putPromise.then(
                function() {
                    console.log(putPromise);
                    app.getBlueprintsByAuthor(author);
                },
                function() {
                    console.info("Error");
                }
            );
        },


    };
})();

