module.exports.add = (a, b) => a + b;

module.exports.square = a => a * a;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.setName = (user, fullname) => {
  let res = fullname.split(" "),
    [firstName, ...rest1] = res,
    [lastName, ...rest2] = res.reverse();
  user.firstName = firstName;
  user.lastName = lastName;
  return user;
};
