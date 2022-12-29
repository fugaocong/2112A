/** 封装axios*/
interface Params {
	method: string;
	url: string;
}
enum CODE {
	SUCCESS = 200,
	READY = 4,
}
function ajaxGet(method: Params['method'], url: Params['url']) {
	let ajax: XMLHttpRequest = new XMLHttpRequest();
	ajax.open(method, url);
	ajax.send();
	ajax.onreadystatechange = function () {
		if (ajax.status == CODE.SUCCESS && ajax.readyState == CODE.READY) {
			console.log(ajax.response);
		}
	};
}
