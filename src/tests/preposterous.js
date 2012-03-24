/*global describe, xdescribe, beforeEach, afterEach, it, xit, expect, spyOn, Cohere, require */
describe('Preposterous basic behaviour', function() {
    "use strict";

    var preposterous = require('preposterous'),
        subscribe = require('bean').add,
        handlerObject;

    beforeEach(function() {
        handlerObject = {}
    });

    afterEach(function() {
        handlerObject = null;
    });

    it('fires pre event correctly', function() {
        var ActionObject = {
                doAction : preposterous.pre(
                    function(args) {

                    },
                    'action'
                )
            },
            handlerObject = {
                handler: function(e) {

                }
            },
            spiedCallback = spyOn(handlerObject, 'handler').andCallThrough();

        // listen
        subscribe(ActionObject, 'beforeAction', spiedCallback);
        // fire
        ActionObject.doAction();
        // check
        expect(spiedCallback.callCount).toEqual(1);
        expect(spiedCallback.argsForCall[0][0].evtName).toEqual('beforeAction');
    });

    it('fires post event correctly', function() {
        var ActionObject = {
                doAction : preposterous.post(
                    function(args) {

                    },
                    'action'
                )
            },
            handlerObject = {
                handler: function(e) {

                }
            },
            spiedCallback = spyOn(handlerObject, 'handler').andCallThrough();

        // listen
        subscribe(ActionObject, 'action', spiedCallback);
        // fire
        ActionObject.doAction();
        // check
        expect(spiedCallback.callCount).toEqual(1);
        expect(spiedCallback.argsForCall[0][0].evtName).toEqual('action');
    });

    it('fires pre/post events correctly', function() {
        var ActionObject = {
                doAction : preposterous.prepost(
                    function(args) {

                    },
                    'action'
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
        // check
        expect(spiedCallback.callCount).toEqual(2);
        expect(spiedCallback.argsForCall[0][0].evtName).toEqual('beforeAction');
        expect(spiedCallback.argsForCall[1][0].evtName).toEqual('action');
    });

    it('receives event data correctly', function() {
        var ActionObject = {
                doAction : preposterous.prepost(
                    function(args) {

                    },
                    'action',
                    [
                        function() {
                            return this.foo;
                        },
                        function() {
                            return this.foo;
                        }
                    ]
                ),
                foo : {
                    bar: 42
                }
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
        // check
        expect(spiedCallback.callCount).toEqual(2);
        expect(spiedCallback.argsForCall[0][0].evtName).toEqual('beforeAction');
        expect(spiedCallback.argsForCall[0][0].data.bar).toEqual(42);
        expect(spiedCallback.argsForCall[1][0].evtName).toEqual('action');
        expect(spiedCallback.argsForCall[1][0].data.bar).toEqual(42);
    });
});
