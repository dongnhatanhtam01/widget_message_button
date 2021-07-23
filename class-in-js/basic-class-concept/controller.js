const person_1 = new User();

person_1.setLogin('admin', '@156');

if (person_1.checkLogin()) {
 alert('Log in successfully!');
} else {
 alert('Log in failed!');
}