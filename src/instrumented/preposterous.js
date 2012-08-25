if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
__$coverObject["src/preposterous.js"] = {};
__$coverObject["src/preposterous.js"].__code = "/*!\n  * preposterous.js - copyright Lawrence Carvalho 2012\n  *\n  * License MIT (c) Lawrence Carvalho 2012\n  * special thanks to:\n  * Mum (Hi Mum!)\n  *\n  */\n!function(name, context, definition) {\n  if (typeof module !== 'undefined') module.exports = definition(name, context);\n  else if (typeof define === 'function' && typeof define.amd === 'object') define(definition);\n  else context[name] = definition(name, context);\n}('preposterous', this, function(name, context) {\n    var aspectos = require('aspectos'),\n        before = aspectos.before,\n        after = aspectos.after,\n        around = aspectos.around,\n        fire = require('bean').fire,\n        preposterous;\n\n    preposterous = {\n        pre : function(fn, evtName) {\n            evtName = 'before' + evtName.charAt(0)\n                .toUpperCase() + evtName.slice(1);\n            return before(null, fn, function() {\n                    fire(\n                        this,\n                        evtName,\n                        new preposterous.EventTarget(\n                            evtName,\n                            this\n                        )\n                    );\n                }\n            );\n        },\n        post : function(fn, evtName) {\n            return after(null, fn, function() {\n                    fire(\n                        this,\n                        evtName,\n                        new preposterous.EventTarget(\n                            evtName,\n                            this\n                        )\n                    );\n                }\n            );\n        },\n        prepost : function(fn, evtName, datums) {\n            var doCancelEventFlag = false;\n            return around(null, fn, [\n                    function() {\n                        var beforeEvtName = [\n                                'before',\n                                evtName.charAt(0).toUpperCase(),\n                                evtName.slice(1)\n                            ].join(''),\n                            target = new preposterous.EventTarget(\n                                beforeEvtName,\n                                this,\n                                function() {\n                                  //cancel event\n                                  doCancelEventFlag = true;\n                                }\n                            );\n\n                        target.data = (datums && datums[0]) ?\n                              datums[0].apply(this, arguments) : arguments;\n                        //fire before event\n                        fire(\n                            this,\n                            beforeEvtName,\n                            target\n                        );\n                    },\n                    function() {\n                        var target = new preposterous.EventTarget(\n                            evtName,\n                            this,\n                            function() {\n                              //cancel event\n                              doCancelEventFlag = true;\n                            }\n                        );\n\n                        target.data = (datums && datums[1]) ?\n                              datums[1].apply(this, arguments) : arguments;\n                        // don't fire event if cancel flag is flagged\n                        if (doCancelEventFlag !== true) {\n                            fire(\n                                this,\n                                evtName,\n                                target\n                            );\n                        }\n                        //clean up flag\n                        delete doCancelEventFlag;\n                    }\n                ]\n            );\n        }\n    };\n\n    preposterous.EventTarget = function(evtName, target, cancel) {\n        this.evtName = evtName;\n        this.target = target;\n        this.canceler = cancel || function() {};//noop if undefined\n    };\n\n    preposterous.EventTarget.prototype.cancel = function() {\n        this.canceler();\n    };\n\n    return preposterous;\n});";
__$coverObject["src/preposterous.js"]["156:4067"] = 0;
__$coverObject["src/preposterous.js"]["197:419"] = 0;
__$coverObject["src/preposterous.js"]["475:668"] = 0;
__$coverObject["src/preposterous.js"]["675:3738"] = 0;
__$coverObject["src/preposterous.js"]["3745:3943"] = 0;
__$coverObject["src/preposterous.js"]["3950:4037"] = 0;
__$coverObject["src/preposterous.js"]["4044:4063"] = 0;
__$coverObject["src/preposterous.js"]["742:830"] = 0;
__$coverObject["src/preposterous.js"]["844:1174"] = 0;
__$coverObject["src/preposterous.js"]["901:1141"] = 0;
__$coverObject["src/preposterous.js"]["1238:1567"] = 0;
__$coverObject["src/preposterous.js"]["1294:1534"] = 0;
__$coverObject["src/preposterous.js"]["1642:1671"] = 0;
__$coverObject["src/preposterous.js"]["1685:3721"] = 0;
__$coverObject["src/preposterous.js"]["1768:2355"] = 0;
__$coverObject["src/preposterous.js"]["2382:2494"] = 0;
__$coverObject["src/preposterous.js"]["2564:2707"] = 0;
__$coverObject["src/preposterous.js"]["2266:2290"] = 0;
__$coverObject["src/preposterous.js"]["2789:3100"] = 0;
__$coverObject["src/preposterous.js"]["3127:3239"] = 0;
__$coverObject["src/preposterous.js"]["3335:3576"] = 0;
__$coverObject["src/preposterous.js"]["3642:3666"] = 0;
__$coverObject["src/preposterous.js"]["3019:3043"] = 0;
__$coverObject["src/preposterous.js"]["3397:3550"] = 0;
__$coverObject["src/preposterous.js"]["3816:3838"] = 0;
__$coverObject["src/preposterous.js"]["3848:3868"] = 0;
__$coverObject["src/preposterous.js"]["3878:3917"] = 0;
__$coverObject["src/preposterous.js"]["4015:4030"] = 0;
__$coverObject['src/preposterous.js']['156:4067']++;
!function (name, context, definition) {
    __$coverObject['src/preposterous.js']['197:419']++;
    if (typeof module !== 'undefined')
        module.exports = definition(name, context);
    else if (typeof define === 'function' && typeof define.amd === 'object')
        define(definition);
    else
        context[name] = definition(name, context);
}('preposterous', this, function (name, context) {
    __$coverObject['src/preposterous.js']['475:668']++;
    var aspectos = require('aspectos'), before = aspectos.before, after = aspectos.after, around = aspectos.around, fire = require('bean').fire, preposterous;
    __$coverObject['src/preposterous.js']['675:3738']++;
    preposterous = {
        pre: function (fn, evtName) {
            __$coverObject['src/preposterous.js']['742:830']++;
            evtName = 'before' + evtName.charAt(0).toUpperCase() + evtName.slice(1);
            __$coverObject['src/preposterous.js']['844:1174']++;
            return before(null, fn, function () {
                __$coverObject['src/preposterous.js']['901:1141']++;
                fire(this, evtName, new preposterous.EventTarget(evtName, this));
            });
        },
        post: function (fn, evtName) {
            __$coverObject['src/preposterous.js']['1238:1567']++;
            return after(null, fn, function () {
                __$coverObject['src/preposterous.js']['1294:1534']++;
                fire(this, evtName, new preposterous.EventTarget(evtName, this));
            });
        },
        prepost: function (fn, evtName, datums) {
            __$coverObject['src/preposterous.js']['1642:1671']++;
            var doCancelEventFlag = false;
            __$coverObject['src/preposterous.js']['1685:3721']++;
            return around(null, fn, [
                function () {
                    __$coverObject['src/preposterous.js']['1768:2355']++;
                    var beforeEvtName = [
                            'before',
                            evtName.charAt(0).toUpperCase(),
                            evtName.slice(1)
                        ].join(''), target = new preposterous.EventTarget(beforeEvtName, this, function () {
                            __$coverObject['src/preposterous.js']['2266:2290']++;
                            doCancelEventFlag = true;
                        });
                    __$coverObject['src/preposterous.js']['2382:2494']++;
                    target.data = datums && datums[0] ? datums[0].apply(this, arguments) : arguments;
                    __$coverObject['src/preposterous.js']['2564:2707']++;
                    fire(this, beforeEvtName, target);
                },
                function () {
                    __$coverObject['src/preposterous.js']['2789:3100']++;
                    var target = new preposterous.EventTarget(evtName, this, function () {
                            __$coverObject['src/preposterous.js']['3019:3043']++;
                            doCancelEventFlag = true;
                        });
                    __$coverObject['src/preposterous.js']['3127:3239']++;
                    target.data = datums && datums[1] ? datums[1].apply(this, arguments) : arguments;
                    __$coverObject['src/preposterous.js']['3335:3576']++;
                    if (doCancelEventFlag !== true) {
                        __$coverObject['src/preposterous.js']['3397:3550']++;
                        fire(this, evtName, target);
                    }
                    __$coverObject['src/preposterous.js']['3642:3666']++;
                    delete doCancelEventFlag;
                }
            ]);
        }
    };
    __$coverObject['src/preposterous.js']['3745:3943']++;
    preposterous.EventTarget = function (evtName, target, cancel) {
        __$coverObject['src/preposterous.js']['3816:3838']++;
        this.evtName = evtName;
        __$coverObject['src/preposterous.js']['3848:3868']++;
        this.target = target;
        __$coverObject['src/preposterous.js']['3878:3917']++;
        this.canceler = cancel || function () {
        };
    };
    __$coverObject['src/preposterous.js']['3950:4037']++;
    preposterous.EventTarget.prototype.cancel = function () {
        __$coverObject['src/preposterous.js']['4015:4030']++;
        this.canceler();
    };
    __$coverObject['src/preposterous.js']['4044:4063']++;
    return preposterous;
});