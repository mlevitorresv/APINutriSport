"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3000;
app_1.app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
