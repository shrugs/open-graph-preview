(function () {
  'use strict';

  angular.module('cardPreview', [
      'ngRoute',
      'ngMaterial'
  ])

  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/'});

  }])

  .controller('MainCtrl', function($scope) {

    var chunk = function(chunks, input) {
      var out = [];
      var chunkSize = Math.ceil(input.length / chunks);

      for (var i = 0; i < input.length; i+=chunkSize) {
        out.push(input.slice(i, i + chunkSize));
      }

      return out;
    };

    $scope.data = {
      'custom@handle': '@mattgcondon',
      'customStatusText': 'This is an awesome sample status!',
      'customUsername': 'Matt Condon',
      'customIconUrl': 'https://pbs.twimg.com/profile_images/597965187333894144/W9M7fOr6_400x400.jpg',
      'og:title': 'My Awesome Article',
      'og:description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam odio, fringilla eu ultricies id, aliquet et mi. Aenean nec libero bibendum, aliquam ex in, iaculis massa. Ut eleifend eget arcu at.',
      'og:image': 'http://stylonica.com/wp-content/uploads/2014/03/cats_animals_kittens_cat_kitten_cute_desktop_1680x1050_hd-wallpaper-753974.jpeg',
      'og:url': 'http://mat.tc',
      'og:site_name': 'mat.tc',
      'twitter:site': '@mattgcondon',
      'twitter:creator': '@mattgcondon',
      'twitter:card': 'photo',
      'facebook:card': 'photo'
    };


    $scope.tags = chunk(1, [
      {
        property: 'customStatusText',
        type: 'text'
      },
      {
        property: 'og:title',
        type: 'string'
      },
      {
        property: 'og:description',
        type: 'text'
      },
      {
        property: 'og:image',
        type: 'url'
      },
      {
        property: 'og:site_name',
        type: 'string'
      },
      {
        property: 'custom@handle',
        type: 'string'
      },
      {
        property: 'customIconUrl',
        type: 'url'
      },
      {
        property: 'customUsername',
        type: 'string'
      },
      {
        property: 'og:url',
        type: 'url'
      },
      {
        property: 'twitter:site',
        type: 'string'
      },
      {
        property: 'twitter:creator',
        type: 'string'
      },
      // {
      //   property: 'twitter:image0',
      //   type: 'url'
      // },
      // {
      //   property: 'twitter:image1',
      //   type: 'url'
      // },
      // {
      //   property: 'twitter:image2',
      //   type: 'url'
      // },
      // {
      //   property: 'twitter:image3',
      //   type: 'url'
      // },
      // {
      //   property: 'twitter:app:name:iphone',
      //   type: 'string'
      // },
      // {
      //   property: 'twitter:app:id:iphone',
      //   type: 'string'
      // },
      // {
      //   property: 'twitter:app:url:iphone',
      //   type: 'url'
      // }
    ]);

    $scope.cardTypes = [
        'summary',
        'summary_large_image',
        'photo',
        // 'gallery',
        // 'app',
        // 'player',
        // 'product'
      ];

      $scope.facebookCardTypes = [
        'article',
        'photo',
        'article_large_photo'
      ];

  });



}());
