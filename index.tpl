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
    <style type="text/css">
        body {
            font-size: 16px;
        }

        pre {
            background-color: #F8F8F8;
            border: 1px solid #CCC;
            font-size: 13px;
            line-height: 19px;
            overflow: auto;
            padding: 6px 10px;
            border-radius: 3px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
        }
        a {
            color: #4183C4;
            text-decoration: none;
        }
    </style>
</head>
<body>
{{ content }}
<h3>Test Results</h3>
<div id="mocha"></div>
</body>
</html>