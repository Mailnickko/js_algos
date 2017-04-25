'use strict';

[
  'testCheck',
  'sorts',
  'rps_permutation',
  'linked_lists'
].forEach(test => {
  require(`./challenges/${test}/${test}.spec.js`);
});
