var tape = require("tape"),
    spatialsankey = require("../");

tape("spatialsankey() is truthy.", function(test) {
  test.ok(spatialsankey.spatialsankey());
  test.end();
});
