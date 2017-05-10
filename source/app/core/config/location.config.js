//LocationConfig.$inject = ['$locationProvider'];

function LocationConfig($locationProvider) {
  'ngInject';
  /*
    * Attempt to use HTML5 History API for routing, if available.
    * Otherwise, route using hashbangs.
    * NOTE: HTML5 mode requires proper server side configuration.
    * NOTE: HTML5 mode requires the existence of a <base> tag in HTML.
    */
  $locationProvider.html5Mode(true);
}

export {LocationConfig};
