try {
  var reject = require('reject');
} catch (e) {
  var reject = require('..');
}

var assert = require('assert');

describe('reject', function(){
  it('should return the rejected keys', function(){
    var arr = [ 1, 2, 3, 4, 5 ];
    assert.deepEqual(
      [ 2, 4 ],
      reject(arr, function(value){ if( value == 1 || value == 3 || value == 5 ) return value; })
    );
  });

  it('should return an empty array', function(){
    var arr = [ 1, 2, 3, 4, 5 ];
    assert.deepEqual(
      [],
      reject(arr, function(value){ if( value != 'a' ) return value; })
    );
  });

  it('should return all the elements', function(){
    var arr = [ 1, 2, 3, 4, 5 ];
    assert.deepEqual(
      [ 1, 2, 3, 4, 5 ],
      reject(arr, function(value){ if( !value ) return value; })
    );
  });
});