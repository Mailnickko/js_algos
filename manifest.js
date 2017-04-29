'use strict';

[
  'testCheck',
  'sorts',
  'rps_permutation',
  'linked_lists',
  'balanced_brackets',
  'longest_palindrome'
].forEach(test => {
  require(`./challenges/${test}/${test}.spec.js`);
});
