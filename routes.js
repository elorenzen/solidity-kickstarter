const routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new');
routes.add('/campaigns/:campaign_id', '/campaigns/show');

module.exports = routes;