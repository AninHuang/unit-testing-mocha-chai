# unit-testing-mocha-chai
Simply setup the Mocha unit testing framework along with Chai which is an assertion library

* Install Mocha & Chai
```bash
$ npm install mocha chai --save-dev
```

* Replace test scripts in package.json
```bash
"scripts": {
    "test": "mocha"
  }
```

* Exercute Mocha
```bash
$ npm run test

# Only show the result (No error msg)
$ npm run test -s
```

* Alter test scripts in package.json for only showing the result
```bash
"scripts": {
    "test": "mocha || true"
  }
```

