<!DOCTYPE HTML>
<html>
<head>
    <title>Preposterous Tests</title>

    <script type="text/javascript"
            src="https://raw.github.com/lawrencec/preposterous/master/lib/ender.js"></script>
    <!--Library code-->
    <script type="text/javascript"
            src="https://raw.github.com/lawrencec/preposterous/master/src/preposterous.js"></script>
    <!--Tests dependencies-->
    <script type="text/javascript" src="lib/chai/chai.js"></script>
    <script type="text/javascript" src="lib/mocha/mocha.js"></script>
    <script type="text/javascript"
            src="lib/sinon-chai/lib/sinon-chai.js"></script>
    <script type="text/javascript" src="lib/sinonjs/lib/sinon.js"></script>
    <script type="text/javascript" src="lib/sinonjs/lib/sinon/spy.js"></script>
    <script type="text/javascript"
            src="lib/sinonjs/lib/sinon/match.js"></script>
    <script>
        var assert = chai.assert,
                expect = chai.expect,
                should = chai.should(); // Note that should has to be executed

        mocha.setup('bdd');
    </script>

    <!--Tests-->
    <script type="text/javascript"
            src="https://raw.github.com/lawrencec/preposterous/master/src/tests/preposterous.js"></script>

    <!-- Testem support -->
    <script type="text/javascript">
        $.domReady(function() {
            mocha.run()
        });
    </script>

    <link rel="stylesheet" href="lib/mocha/mocha.css"/>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
{{ content }}
<h3>Test Results</h3>
<div id="mocha"></div>
</body>
</html>