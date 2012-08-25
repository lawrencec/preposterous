# PrePosterous [![Build Status](https://secure.travis-ci.org/lawrencec/preposterous.png)](http://travis-ci.org/lawrencec/preposterous)

Small library that fires 'before' (pre) and 'after' (post) events when methods are called.

## Cloning and Dependencies:

There are multiple testing libraries/frameworks that are used for the tests and are set up as git submodules. In order for the tests to work, these submodules
must be initialised correctly.

You can either clone this repo with the submodules in one command like so:

    git clone REPO_URL --recursive

or separately

    git clone REPO_URL
    <cd clonedrepo>
    git submodule update --init --recursive


[Ender](http://ender.no.de) and the following (ender) dependencies are required.

[aspectos](https://github.com/lawrencec/aspectos)
[bean](https://github.com/fat/bean)

A pre-built ender.js (with all dependencies) is provided in the /lib directory. If you have ender installed
you can re-build ender.js and the dependencies by <code>ender refresh</code> in the /lib directory.

## Usage

Aspectos provides three methods to provide the basic functionality of firing events
before, after or around any specified method.

### before


    var ActionObject = {
            doAction : preposterous.pre(
                function(args) {

                },
                'action' //event name to fire
            )
        },
        handlerObject = {
            handler: function(e) {

            }
        };


    // listen
    subscribe(ActionObject, 'beforeAction', handlerObject.handler);
    // fire
    ActionObject.doAction();
    // handlerObj.handler will get called receiving an event of 'beforeAction'

## after

    var ActionObject = {
            doAction : preposterous.post(
                function(args) {

                },
                'action' //event name to fire
            )
        },
        handlerObject = {
            handler: function(e) {

            }
        }


    // listen
    subscribe(ActionObject, 'action', handlerObject.handler);
    // fire
    ActionObject.doAction();
    // handlerObj.handler will get called receiving an event of 'action'

## around
    var ActionObject = {
            doAction : preposterous.prepost(
                function(args) {

                },
                'action' //event name to fire
            )
        },
        handlerObject = {
            handler: function(e) {

            }
        },
    // listen
    subscribe(ActionObject, 'beforeAction', handlerObject.handler);
    subscribe(ActionObject, 'action', handlerObject.handler);
    // fire
    ActionObject.doAction();
    // handlerObj.handler will get called twice first receiving an event of 'beforeAction'
    // and then again receiving an event of 'action'.

## Tests

See the index.html file in the tests directory

If you have testem installed run it from the root directory of the repo.

    testem

or

    testem ci -b Chrome

There are also jscoverage tests that can be seen in the src/tests/with-coverage.html page. Instrumented code is generated via [coverjs](https://github.com/arian/CoverJS) and report generated using [JSCovReporter](https://github.com/lawrencec/JSCovReporter)

Mocha tests can be run with phantomjs (note the ci hash parameter):

    phantomjs ./lib/test-helpers/run-mocha.js file://localhost/$(pwd)/src/tests/index.html#phjs