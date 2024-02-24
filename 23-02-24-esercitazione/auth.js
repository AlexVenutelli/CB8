const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "admin") {
    req.user = { name: "admin" };
    next();
  } else {
    console.log(user);
    res.status(401).send(`l'utente ${user} non è autorizzato`);
  }
};

module.exports = authorize;
