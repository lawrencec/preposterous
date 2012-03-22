/*!
  * preposterous.js - copyright Lawrence Carvalho 2012
  *
  * License MIT (c) Lawrence Carvalho 2012
  * special thanks to:
  * Mum (Hi Mum!)
  *
  */
!function(name, context, definition) {
  if (typeof module !== 'undefined') module.exports = definition(name, context);
  else if (typeof define === 'function' && typeof define.amd === 'object') define(definition);
  else context[name] = definition(name, context);
}('preposterous', this, function(name, context) {
    var aspectos = require('aspectos'),
        before = aspectos.before,
        after = aspectos.after,
        around = aspectos.around,
        fire = require('bean').fire,
        preposterous;

    preposterous = {
        pre : function(fn, evtName) {
            evtName = 'before' + evtName.charAt(0)
                .toUpperCase() + evtName.slice(1);
            return before(null, fn, function() {
                    console.log(arguments, evtName, this);
                    fire(
                        this,
                        evtName,
                        new preposterous.EventTarget(
                            evtName,
                            this
                        )
                    );
                }
            );
        },
        post : function(fn, evtName) {
            evtName = 'after' + evtName.charAt(0)
                .toUpperCase() + evtName.slice(1);
            return after(null, fn, function() {
                    console.log(arguments, evtName, this);
                    fire(
                        this,
                        evtName,
                        new preposterous.EventTarget(
                            evtName,
                            this
                        )
                    );
                }
            )
        },
        prepost : function(fn, evtName, datums) {
            var doCancelEventFlag = false;
            return around(null, fn, [
                    function() {
                        var beforeEvtName = [
                                'before',
                                evtName.charAt(0).toUpperCase(),
                                evtName.slice(1)
                            ].join(''),
                            target = new preposterous.EventTarget(
                                beforeEvtName,
                                this,
                                function() {
                                  //cancel event
                                  doCancelEventFlag = true;
                                }
                            );

                        target.data = (datums && datums[0]) ?
                              datums[0].apply(this, arguments) : arguments;
                        //fire before event
                        fire(
                            this,
                            beforeEvtName,
                            target
                        );
                    },
                    function() {
                        var target = new preposterous.EventTarget(
                            beforeEvtName,
                            this,
                            function() {
                              //cancel event
                              doCancelEventFlag = true;
                            }
                        );

                        target.data = (datums && datums[1]) ?
                              datums[1].apply(this, arguments) : arguments;
                        // don't fire event if cancel flag is flagged
                        if (doCancelEventFlag !== true) {
                            fire(
                                this,
                                evtName,
                                target
                            );
                        }
                        //clean up flag
                        delete doCancelEventFlag;
                    }
                ]
            );
        }
    };

    preposterous.EventTarget = function(evtName, target, cancel) {
        this.evtName = evtName;
        this.target = target;
        this.canceler = cancel || function() {};//noop if undefined
    };

    preposterous.EventTarget.prototype.cancel = function() {
        this.canceler();
    };

    return preposterous;
});