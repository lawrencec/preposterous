/*global describe, xdescribe, beforeEach, afterEach, it, xit, expect, sinon.spy, Cohere, require */
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
            mySpy = sinon.spy(handlerObject, 'handler');

        // listen
        subscribe(ActionObject, 'beforeAction', mySpy);
        // fire
        ActionObject.doAction();
        // check
        expect(mySpy).to.have.been.calledOnce;
        expect(mySpy.getCall(0).args[0].evtName).to.equal('beforeAction');
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
            mySpy = sinon.spy(handlerObject, 'handler');

        // listen
        subscribe(ActionObject, 'action', mySpy);
        // fire
        ActionObject.doAction();
        // check
        expect(mySpy).to.have.been.calledOnce;
        expect(mySpy.getCall(0).args[0].evtName).to.equal('action');
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
            mySpy = sinon.spy(handlerObject, 'handler');

        // listen
        subscribe(ActionObject, 'beforeAction', mySpy);
        subscribe(ActionObject, 'action', mySpy);
//        fire
        ActionObject.doAction();
        // check
        expect(mySpy.callCount).to.equal(2);
        expect(mySpy.getCall(0).args[0].evtName).to.equal('beforeAction');
        expect(mySpy.getCall(1).args[0].evtName).to.equal('action');
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
            mySpy = sinon.spy(handlerObject, 'handler');

        // listen
        subscribe(ActionObject, 'beforeAction', mySpy);
        subscribe(ActionObject, 'action', mySpy);
        // fire
        ActionObject.doAction();
        // check
        expect(mySpy.callCount).to.equal(2);
        expect(mySpy.getCall(0).args[0].evtName).to.equal('beforeAction');
        expect(mySpy.getCall(0).args[0].data.bar).to.equal(42);
        expect(mySpy.getCall(1).args[0].evtName).to.equal('action');
        expect(mySpy.getCall(1).args[0].data.bar).to.equal(42);
    });
});
