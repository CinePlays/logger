# Intall

```console
$ npm install @cineplays/logger
```

# Basic Usage

```js
const logger = require("@cineplays/logger");

logger.log("Hello World!");
logger.warn("Hello World!");
logger.error("Hello World!");
logger.info("Hello World!");
logger.init("Hello World!");
logger.debug("Hello World!");
```

![Example](https://raw.githubusercontent.com/CinePlays/logger/master/media/%40cineplays-logger.jpg)

# Adding LogType

```js
const Logger = require("@cineplays/logger");
//You can set it to everything you want e.g. "1", "main",...
const logger = new Logger.LogType("index.js");

logger.log("Hello World!");
logger.warn("Hello World!");
logger.error("Hello World!");
logger.info("Hello World!");
logger.init("Hello World!");
logger.debug("Hello World!");
```

![Example](https://raw.githubusercontent.com/CinePlays/logger/master/media/%40cineplays-logger-2.png)
