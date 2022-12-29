function greeter(person: string) {
	return 'Hello,' + person;
}
let user: string = 'Jane';
document.body.innerHTML = greeter(user);
