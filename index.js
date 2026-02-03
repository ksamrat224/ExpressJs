const express = require('express');
const {createUserRoutes} = require('./user');
const {createCourseRoutes} = require('./course');
const app = express();

createUserRoutes(app);
createCourseRoutes(app);




app.listen(3000);

