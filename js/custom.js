(function() {
  "use strict";
  'use strict';


  var app = angular.module('viewCustom', ['angularLoad']);

  /****************************************************************************************************/

  /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

  /*var app = angular.module('centralCustom', ['angularLoad']);*/

  /****************************************************************************************************/


})


var app = angular.module('viewCustom', ['angularLoad']);


  app.controller('prmLogoAfterController', [function() {
    var vm = this;
    vm.getIconLink = getIconLink;

    function getIconLink() {
      return vm.parentCtrl.iconLink;
    }
  }]);


  //update template to include new URL for institution
  app.component('prmLogoAfter', {
    bindings: {
      parentCtrl: '<'
    },
    controller: 'prmLogoAfterController',
    template: '<div class="product-logo product-logo-local" layout="row" layout-align="start center" layout-fill id="banner"><a href="http://library.sjsu.edu"><img class="logo-image" alt="{{::(\'nui.header.LogoAlt\' | translate)}}" ng-src="{{$ctrl.getIconLink()}}"/></a></div>'
  });


//add libchat box  
var s=document.createElement('script');
s.id='localScript';
s.src='//v2.libanswers.com/load_chat.php?hash=8c0496fac5d8ab8f9d72f363985cdf46';
document.body.appendChild(s);


//add San Jose Library Catalog
app.component('prmFacetAfter', {
    controller: function() {
        angular.element(document).ready(function () {
           var eNode = angular.element(document.querySelectorAll("prm-facet .margin-top-small"));
           if (eNode != null && eNode != undefined){
                eNode.append("<span><a href='http://discover.sjlibrary.org/iii/encore_sjpl/?lang=eng' target='_blank' title='San Jose Library Catalog'>San Jose Library Catalog</a></span>");
                //console.log(eNode.text());
           }

        });
     }
});




//test below

/* app.controller('SearchBarAfterController', [function () {
        var vm = this;


        vm.getSelectdScope = getSelectdScope;
        vm.getQuery = getQuery;


        function getSelectdScope() {
            return vm.parentCtrl.scopeField;
        }

        function getQuery() {
            return vm.parentCtrl.mainSearchField;
        }
    }]);


app.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<'},
    controller: 'SearchBarAfterController',
    template: '<div layout="row" layout-align="center center"> <md-card flex="80"><md-card-title><md-card-title-text><span class="md-headline">This is a demo presenting the ability to display query information below the search box</span><span class="md-subhead">Query: {{$ctrl.getQuery()}}</span><span class="md-subhead">Scope: {{$ctrl.getSelectdScope()}}</span></md-card-title-text></md-card-title></md-card></div>'
});
*/

