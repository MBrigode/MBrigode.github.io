let app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/1", {
        templateUrl : "landing.html"
    })
   
});

app.controller('blah', function ($scope) {
    let initUser = netlifyIdentity.currentUser();
    netlifyIdentity.on('init', () => {
        initUser = netlifyIdentity.currentUser();
    });
    netlifyIdentity.on('login', () => {
        if (initUser == null) {
            window.location.replace('#!1');
        }
        netlifyIdentity.close();
    });
    netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        window.location.replace('/');
    });
});


