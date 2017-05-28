"use strict";
var books;
(function (books) {
    const myApp = angular.module('myApp');
    myApp.controller("BooksController", ["$scope", "$http", "$location", "$routeParams", function ($scope, $http, $location, $routeParams) {
            $scope.getBooks = function () {
                $http.get('/api/books').then(successCallback, failCallback);
                function successCallback(res) {
                    $scope.books = res.data;
                }
                function failCallback(err) {
                    console.log(err);
                }
            };
            $scope.getBook = function () {
                let id = $routeParams.id;
                $http.get('/api/books/' + id).then(successCallback, failCallback);
                function successCallback(res) {
                    $scope.book = res.data;
                }
                function failCallback(err) {
                    console.log(err);
                }
            };
            $scope.addBook = function () {
                //console.log($scope.book);
                $http.post('/api/books', $scope.book).then(successCallback, failCallback);
                function successCallback(res) {
                    window.location.href = "#/books";
                }
                function failCallback(err) {
                    console.log(err);
                }
            };
            $scope.updateBook = function () {
                //console.log($scope.book);
                let id = $routeParams.id;
                $http.put('/api/books/' + id, $scope.book).then(successCallback, failCallback);
                function successCallback(res) {
                    window.location.href = "#/books";
                }
                function failCallback(err) {
                    console.log(err);
                }
            };
            $scope.removeBook = function (id) {
                $http.delete('/api/books/' + id).then(successCallback, failCallback);
                function successCallback(res) {
                    window.location.href = "#/books";
                }
                function failCallback(err) {
                    console.log(err);
                }
            };
        }]);
})(books || (books = {}));
