'use strict';

[
  'testCheck',
  'sorts'
].forEach(test => {
  require(`./challenges/${test}/${test}.spec.js`);
});
