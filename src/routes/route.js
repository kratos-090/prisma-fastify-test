const controller = require('../controllers/controller');

const routes = [
    {
        method: "POST",
        url: "/api/user",
        handler: controller.createUser,
    }
]

module.exports = routes;