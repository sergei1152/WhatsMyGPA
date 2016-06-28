angular.module('Filters',[])

.value('searchStatus',function(){
  return {
    success: true
  }
})

.filter('uniFilter', ['$filter','searchStatus',function($filter,searchStatus) { //the custom university list filter. Names take priority over key over location
  return function(items, props) { //items is the list of universities as an object, props is the search string
    var key_out=[]; //list of universities that match key
    var name_out = []; //list of universities that match name
    var location_out=[]; //list of universities that match location
    var out=[]; //concatanated list of name over location
    var search=props.toLowerCase();
    if (typeof items==='object' && search!=='') { //if not an empty search string
      for(var university in items){
        if(items.hasOwnProperty(university)){
          if(items[university].name.toLowerCase().indexOf(search)!==-1){ //match on the name
            name_out.push(items[university]);
          }
          //if it matches location
          else if (items[university].location.city.toLowerCase().indexOf(search)!==-1 || items[university].location.country.toLowerCase().indexOf(search)!==-1 || items[university].location.state.toLowerCase().indexOf(search)!==-1){
            location_out.push(items[university]);
          }
          else if (university.toLowerCase().indexOf(search)!==-1){ //key matches
            key_out.push(items[university]);
          }
        }
      }
      name_out=$filter('orderBy')(name_out, 'name', false); //filter the resulting array in alphabetical order
      location_out=$filter('orderBy')(location_out, 'name', false); //filter the resulting array in alphabetical order
      key_out=$filter('orderBy')(key_out, 'name', false); //filter the resulting array in alphabetical order
      out=name_out.concat(location_out.concat(key_out));
    } 
    else if(typeof items ==='object') { //just return the entire list of universities in alphabetical order
      for(var uni in items){
        if(items.hasOwnProperty(uni)){
          out.push(items[uni]);
        }
      }
      out=$filter('orderBy')(out, 'name', false); //filter the resulting array in alphabetical order
    }
    else{
      console.error('WARNING: uniFilter only works with objects as inputs');
    }
    if(out.length===0){
      searchStatus.success=false;
    }
    else{
      searchStatus.success=true;
    }
    return out;
  };
}]);