<!DOCTYPE HTML>
<html>
<head>
    <title>Preposterous Tests (with Coverage report)</title>

    <script type="text/javascript"
            src="https://raw.github.com/lawrencec/preposterous/master/lib/ender.js"></script>
    <!--Library code-->
    <script type="text/javascript"
            src="https://raw.github.com/lawrencec/preposterous/master/src/instrumented/preposterous.js"></script>
    <!--Tests dependencies-->
    <script type="text/javascript" src="lib/chai/chai.js"></script>
    <script type="text/javascript" src="lib/mocha/mocha.js"></script>
    <script type="text/javascript"
            src="lib/sinon-chai/lib/sinon-chai.js"></script>
    <script type="text/javascript" src="lib/sinonjs/lib/sinon.js"></script>
    <script type="text/javascript" src="lib/sinonjs/lib/sinon/spy.js"></script>
    <script type="text/javascript"
            src="lib/sinonjs/lib/sinon/match.js"></script>
    <script type="text/javascript" src="lib/JSCovReporter/JSCovReporter.js"></script>

    <script>
        var assert = chai.assert,
                expect = chai.expect,
                should = chai.should(); // Note that should has to be executed

        mocha.setup('bdd');
    </script>

    <!--Tests-->
    <script type="text/javascript"
            src="https://raw.github.com/lawrencec/preposterous/master/src/tests/preposterous.js"></script>



    <link rel="stylesheet" href="lib/mocha/mocha.css"/>
    <link rel="stylesheet" href="lib/JSCovReporter/reporter.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>
<body class="lnguage-javascript">
<div id="readme">{{ content }}</div>
<h3>Test Results</h3>
<div id="mocha"></div>
<div id="coverage"></div>
<div id="menu"></div>
<script type="text/javascript">
    (function() {
        function coverageFunc() {
            if (typeof window.__$coverObject !== 'undefined') {
                var reporter = new JSCovReporter();
                reporter.initialize({ coverObject: window.__$coverObject })
            }
        }
        // if not run by phantomjs runner, start mocha
        if (location.hash.indexOf('#phjs') === -1) {
            mocha.run(coverageFunc);
        }
    })();
</script>
</body>
</html>