var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var pool = require('../database');
var helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  const rows = await pool.query('SELECT * FROM sw_users WHERE username = ?', [username]);
  if (rows.length > 0) {
    const user = rows[0];
    const validPassword = await helpers.matchPassword(password, user.password)
    if (validPassword) {
      done(null, user, req.flash('success', 'Bienvenido ' + user.username));
    } else {
      done(null, false, req.flash('message', 'Contraseña Incorrecta'));
    }
  } else {
    return done(null, false, req.flash('message', 'El usuario no existe, intentelo denuevo'));
  }
}));

passport.use('local.signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  const { fullname } = req.body;
  var newUser = {
    username: username,
    password: password,
    fullname: fullname
  };
  newUser.password = await helpers.encryptPassword(password);
  var result = await pool.query('INSERT INTO sw_users set ?', [newUser]);
  newUser.id = result.insertId;
  return done(null, newUser);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);

});

passport.deserializeUser(async (id, done) => {
  var rows = await pool.query('SELECT * FROM sw_users WHERE id = ?', [id]);
  done(null, rows[0]);
});