function addCSRFToken(req, res, next) {
  res.locals.csrftoken = req.csrfToken();
  next();
}

modules.export = addCSRFToken;
