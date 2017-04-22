'use strict';

[
  'testCheck'
].forEach(test => {
  require(`./challenges/${test}/${test}.spec.js`);
});
