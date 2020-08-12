const logger = require("./index");
const { TestScheduler } = require("jest");

test("Running functions", () => {
  expect(logger.log("TEST")).toBeUndefined();
  expect(logger.init("TEST")).toBeUndefined();
  expect(logger.warn("TEST")).toBeUndefined();
  expect(logger.error("TEST")).toBeUndefined();
  expect(logger.debug("TEST")).toBeUndefined();
  expect(logger.info("TEST")).toBeUndefined();
});
