angular.module('Filters',[])

.filter('uniFilter', function() { //the custom university list filter. Names take priority over location
  return function(items, props) {
    var out = [];
    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var university=item.value;
        var keys = Object.keys(props);
        itemMatches = false;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var text = props[key].toLowerCase();
          if(university[key]){ //if university key
            if(university[key].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }
          else if(university.location[key]){ //if location key
            if(university.location[key].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }
        }
        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }
    return out;
  };
});