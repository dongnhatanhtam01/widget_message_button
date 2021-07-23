function User() {
 this.username = '';
 this.password = '';

 return this
}

User.prototype.setLogin = function (username, password) {
 this.username = username;
 this.password = password;
}

User.prototype.checkLogin = function () {
 return (this.username === 'admin' && this.password === '@456');
}
