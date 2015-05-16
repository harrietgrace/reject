/**
 * Expose `reject`.
 */

module.exports = reject;

/**
 * Return an array of all elements the predicate doesn't return truthy for.
 *
 * @param {Array} collection
 * @param {Function} predicate
 * @return {Array}
 */

function reject(collection, predicate){
  var results = [];

  if (collection == null) return results;

  for (var i = 0; i < collection.length; i +=1) {
    if (!predicate(collection[i])) results.push(collection[i]);
  }

  return results;
}
