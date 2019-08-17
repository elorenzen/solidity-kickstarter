const routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new');
routes.add('/campaigns/:campaign_id', '/campaigns/show');
routes.add('/campaigns/:campaign_id/requests', '/campaigns/requests/index');

module.exports = routes;