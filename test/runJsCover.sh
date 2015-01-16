#!/bin/sh

open http://localhost:8888/jscoverage.html?test/index.html

java -jar libs/jsCover/JSCover-all.jar -ws --document-root=.. --report-dir=reports --port=8888