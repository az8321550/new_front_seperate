module.exports = function (app) {

  app.get('/help', function (req, res) {
    res.render('help/help');
  });

  app.get('/help/:path', function (req, res) {
    res.render('help/help_'+req.params.path);
  });
/*
  app.get('/help/express', function (req, res) {
    res.render('help_express');
  });

  app.get('/help/issue', function (req, res) {
    res.render('help_issue');
  });

  app.get('/help/step', function (req, res) {
    res.render('help_step');
  });

  app.get('/help/credits', function (req, res) {
    res.render('help_credits');
  });

  app.get('/help/identity', function (req, res) {
    res.render('help_identity');
  });

  app.get('/help/real', function (req, res) {
    res.render('help_real');
  });

  app.get('/help/custom', function (req, res) {
    res.render('help_custom');
  });

  app.get('/help/service', function (req, res) {
    res.render('help_service');
  });

  app.get('/help/feature', function (req, res) {
    res.render('help_feature');
  });

  app.get('/help/return', function (req, res) {
    res.render('help_return');
  });

  app.get('/help/transport', function (req, res) {
    res.render('help_transport');
  });

  app.get('/help/coupon', function (req, res) {
    res.render('help_coupon');
  });

  app.get('/help/size', function (req, res) {
    res.render('help_size');
  });*/

};
