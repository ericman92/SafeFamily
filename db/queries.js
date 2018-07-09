var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/safefamily";
var db = pgp(connectionString);

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function createUser(req, res, next) {
  console.log('hi')
  const hash = authHelpers.createHash(req.body.password);

  db.none('INSERT INTO users (username, password_digest, email, firstname, lastname, age, phone, group_id) VALUES (${username}, ${password}, ${email}, ${firstname}, ${lastname}, ${age}, ${phone}, ${group} )', {username: req.body.username, password: hash, email: req.body.email, firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age, phone: req.body.phone, group: req.body.group})
    .then((data) => {
      res.status(200)
         .json({
           message: "Registration successful.",
           data:data
         })
    })
    .catch((err) => {
      console.log(err)
      res.status(500)
         .json({
           message: err
         })
    })
}

function updateLocation (req, res, next) {
  console.log("inside update!")
  db.none('UPDATE users set lastLat = ${lastLat}, lastLong = ${lastLong} WHERE username = ${username}', { lastLat: req.body.lastLat, lastLong: req.body.lastLong, username: req.body.username}).then(() => {
    res.send("success")
  }).catch((err) => {
    return next(err)
  })
}


function displayGroup (req, res, next) {
  console.log('trying to display group')
  db.any('SELECT username, firstname, lastname, age, email, phone, lastLat, lastLong FROM  users WHERE group_id = 1')
  .then((data) => {
    res.status(200)
    .json({
      status: 'Success',
      data: data,
      message: 'Retrieved all users'
    })
  }).catch((err) => {
    return (err)
  })
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("Log out success");
}

function loginUser(req, res) {
  res.json(req.user);
};

module.exports = {
  createUser: createUser,
  logoutUser: logoutUser,
  loginUser: loginUser,
  updateLocation: updateLocation,
  displayGroup: displayGroup,
};
