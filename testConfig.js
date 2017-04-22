'use strict';

const Mocha = require('mocha');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const MANIFEST = './manifest.js';
const runner = new Mocha({
  ui: 'bdd',
  reporter: 'spec',
  bail: false,
  timeout: 10000,
  slow: 3000
});

const getLocationArg = () => {
  // gets arg ie. npm test problems/anagrams/tests
    // returns  problems/anagrams/tests
  return process.argv[2] ? `challenges/${process.argv[2]}` : '';
}

const isDirectory = (filePath) => {
  return fs.lstatSync(filePath).isDirectory();
}

const pathBuilder = (rootDir, childPath) => {
  return path.join(process.cwd(), rootDir, childPath);
}

const testCollector = (rootDir) => {
  const files = glob.sync('**/*.spec.js', { cwd: rootDir });
  files.forEach(file => runner.addFile(pathBuilder(rootDir, file)));
}

const testContainer = (location) => {
  // if location is specified ie. npm test myChallenge
  if (location) {
    // if is dir, run all tests in dir
    if (isDirectory(location)) {
      testCollector(location);
    } else {
      runner.addFile(location);
    }
  } else {
    // run all tests
    runner.addFile(MANIFEST);
  }
}

const runTests = () => {
  testContainer(getLocationArg());
  runner.run();
}

runTests();
