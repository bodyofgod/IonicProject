angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/Home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.whatIsFirstAid', {
    url: '/What',
    views: {
      'side-menu21': {
        templateUrl: 'templates/whatIsFirstAid.html',
        controller: 'whatIsFirstAidCtrl'
      }
    }
  })

  .state('menu.staySafe', {
    url: '/Stay',
    views: {
      'side-menu21': {
        templateUrl: 'templates/staySafe.html',
        controller: 'staySafeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.helpSaveLives', {
    url: '/HelpSave',
    views: {
      'side-menu21': {
        templateUrl: 'templates/helpSaveLives.html',
        controller: 'helpSaveLivesCtrl'
      }
    }
  })

  .state('menu.emergencyAction', {
    url: '/Emergency',
    views: {
      'side-menu21': {
        templateUrl: 'templates/emergencyAction.html',
        controller: 'emergencyActionCtrl'
      }
    }
  })

  .state('menu.HowToVideos', {
    url: '/videos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/HowToVideos.html',
        controller: 'HowToVideosCtrl'
      }
    }
  })

  .state('menu.firstAidWhyTheBig', {
    url: '/First',
    views: {
      'side-menu21': {
        templateUrl: 'templates/firstAidWhyTheBig.html',
        controller: 'firstAidWhyTheBigCtrl'
      }
    }
  })

  .state('menu.howFirstAidWork', {
    url: '/How',
    views: {
      'side-menu21': {
        templateUrl: 'templates/howFirstAidWork.html',
        controller: 'howFirstAidWorkCtrl'
      }
    }
  })

  .state('menu.help', {
    url: '/Help',
    views: {
      'side-menu21': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/Home')

  

});