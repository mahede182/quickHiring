const app = require("./app");
const config = require("./config");
const initDB = require("./config/init-db");

const bootstrap = async () => {
    await initDB();
    console.log("Database tables initialized");

    app.listen(config.port, () => {
        console.log(`Server running in ${config.nodeEnv} mode on port ${config.port}`);
    });
};

bootstrap();
