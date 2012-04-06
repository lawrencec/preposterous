# PrePosterous ![Build Status](https://secure.travis-ci.org/lawrencec/preposterous.png)](http://travis-ci.org/lawrencec/preposterous)

Small library that fires 'before' (pre) and 'after' (post) events when methods are called.

## Cloning and Dependencies:

The Jasmine testing framework is used for the tests and is added as a submodule.

You can either clone this repo with the submodules in one command like so:

    git clone REPO_URL --recursive

or separately

    git clone REPO_URL
    <cd clonedrepo>
    git submodule update --init --recursive

[Ender](http://ender.no.de) and the following dependencies are required.

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
    subscribe(ActionObject, 'beforeAction', handlerObject);
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
    subscribe(ActionObject, 'action', handlerObject);
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
        spiedCallback = spyOn(handlerObject, 'handler').andCallThrough();

    // listen
    subscribe(ActionObject, 'beforeAction', spiedCallback);
    subscribe(ActionObject, 'action', spiedCallback);
    // fire
    ActionObject.doAction();
    // handlerObj.handler will get called twice first receiving an event of 'beforeAction'
    // and then again receiving an event of 'action'.

## Tests

See the index.html file in the tests directory