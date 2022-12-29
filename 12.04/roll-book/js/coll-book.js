let studentList = [
	{
		id: 1,
		name: '张世权',
		sex: 0,
	},
	{
		id: 2,
		name: '吴倩',
		sex: 1,
	},
	{
		id: 3,
		name: '李宏恩',
		sex: 0,
	},
	{
		id: 4,
		name: '宋增杰',
		sex: 0,
	},
	{
		id: 5,
		name: '杨志豪',
		sex: 0,
	},
	{
		id: 6,
		name: '郝嫚嫚',
		sex: 1,
	},
	{
		id: 7,
		name: '侯建荞',
		sex: 1,
	},
	{
		id: 8,
		name: '程怀博',
		sex: 0,
	},
	{
		id: 9,
		name: '周璇',
		sex: 1,
	},
	{
		id: 10,
		name: '张建雨',
		sex: 0,
	},
	{
		id: 11,
		name: '孙銘',
		sex: 0,
	},
	{
		id: 12,
		name: '孙旭瑶',
		sex: 1,
	},
	{
		id: 13,
		name: '章奥博',
		sex: 0,
	},
	{
		id: 14,
		name: '王伟宸',
		sex: 0,
	},
	{
		id: 15,
		name: '巴钦',
		sex: 0,
	},
	{
		id: 16,
		name: '代伊涵',
		sex: 0,
	},
	{
		id: 17,
		name: '邓林柯',
		sex: 0,
	},
	{
		id: 18,
		name: '张立',
		sex: 0,
	},
	{
		id: 19,
		name: '李妍',
		sex: 1,
	},
	{
		id: 20,
		name: '薛翔元',
		sex: 0,
	},
	{
		id: 21,
		name: '郑锋',
		sex: 0,
	},
	{
		id: 22,
		name: '江萌洋',
		sex: 1,
	},
	{
		id: 23,
		name: '张宗耀',
		sex: 0,
	},
	{
		id: 24,
		name: '章涵语',
		sex: 0,
	},
	{
		id: 25,
		name: '高鹏亚',
		sex: 0,
	},
	{
		id: 26,
		name: '刘艺',
		sex: 1,
	},
	{
		id: 27,
		name: '付高聪',
		sex: 0,
	},
	{
		id: 28,
		name: '宋海宇',
		sex: 0,
	},
	{
		id: 29,
		name: '王龙翔',
		sex: 0,
	},
	{
		id: 30,
		name: '徐婉颖',
		sex: 1,
	},
	{
		id: 31,
		name: '韩雨泽',
		sex: 0,
	},
];

// 设置定时器
var times;

// 封装日期函数
function dateEncapsulation() {
	let timer = new Date();
	let year = timer.getFullYear();
	let month = (timer.getMonth() + 1 + '').padStart(2, '0');
	let day = (timer.getDate() + '').padStart(2, '0');
	let hour = (timer.getHours() + '').padStart(2, '0');
	let minute = (timer.getMinutes() + '').padStart(2, '0');
	let second = (timer.getSeconds() + '').padStart(2, '0');
	// console.log(`""：${year}-${month}-${day} ${hour}:${minute}:${second} `);
	return ` ${year}-${month}-${day} ${hour}:${minute}:${second} `;
}
dateEncapsulation();
// 把数据渲染到页面上
function getCurrentTime() {
	var times = dateEncapsulation();
	let timesText = document.querySelector('.currentTime');
	timesText.innerText = `时间：${times}`;
}
getCurrentTime();
// 定时器 每秒执行一次
setInterval(function () {
	getCurrentTime();
}, 1000);
// 获取ul
let ul = document.querySelector('ul');
// 获取单人点名按钮
let oneButton = document.querySelector('.one');
// 获取双人点名按钮
let twoButton = document.querySelector('.two');
// 获取男生点名按钮
let manButton = document.querySelector('.man');
// 获取女生点名按钮
let womanButton = document.querySelector('.woman');

// 渲染列表展示名字
function renderStudent() {
	ul.innerHTML = '';
	studentList.forEach((item) => {
		var li = document.createElement('li');
		li.innerHTML = `<div>${item.name}<div>`;
		li.children[0].style.backgroundImage = randomGradient();
		ul.appendChild(li);
	});
}
renderStudent();
// 获取存放名字的dom节点
let pitchOn = document.querySelector('.top').children[1];
// console.log(pitchOn);
pitchOn.style.backgroundImage = randomGradient();
// console.log(pitchOn);
// 封装随机数的函数
function random(array) {
	// 获取随机数的最大值
	let max = array.length - 1;
	// 获取随机数的最小值
	let min = 0;
	// 生成随机数
	let randoms = Math.floor(Math.random() * (max - min) + min);
	return randoms;
}

// 单人点名
function oneStudent(event) {
	// 渲染背景颜色
	checkName(event.target.innerText);
	// console.log(event);
	if (event.target.innerText.includes('停')) {
		// 获取名单中随机出来的数字
		let randoms = random(studentList);
		// console.log(randoms);
		let checkName = studentList[randoms];
		// console.log(pitchOn);
		pitchOn.style.backgroundImage = randomGradient();
		pitchOn.innerText = checkName.name;
		oneButton.innerText = '单人点名';
	} else {
		oneButton.innerText = '停止';
	}
}

// 双人点名
function twoStudent(event) {
	checkName(event.target.innerText);
	if (event.target.innerText.includes('停')) {
		let oneRandom = random(studentList);
		let twoRandom = random(studentList);
		let oneCheckName = studentList[oneRandom];
		let twoCheckName = studentList[twoRandom];
		pitchOn.style.backgroundImage = randomGradient();
		pitchOn.innerText = `${oneCheckName.name},${twoCheckName.name}`;
		twoButton.innerText = '双人点名';
	} else {
		twoButton.innerText = '停止';
	}
}
// 男女下标分类存储
function classify() {
	// 男孩下标存放的数组
	let boyIndex = [];
	// 女孩存放的数组
	let girlIndex = [];
	studentList.forEach((item, index) => {
		if (item.sex === 0) {
			boyIndex.push(index);
		} else {
			girlIndex.push(index);
		}
	});
	return { boyIndex, girlIndex };
}

// 男生或者女生点名

function boyOrGirlStudent(sex, event) {
	checkName(event.target.innerText);
	if (event.target.innerText.includes('停')) {
		if (sex === 0) {
			manButton.innerText = '男生点名';
		} else {
			womanButton.innerText = '女生点名';
		}
		// 获取分类的下标
		let result = classify();
		// 获取不同的数组
		let boyIndex = result.boyIndex;
		girlIndex = result.girlIndex;
		// 判断获取的是男生还是女生
		let boyOrGirl = sex === 0 ? boyIndex : girlIndex;
		//  获取数组里的随机下标
		let boyOrGirlName = random(boyOrGirl);
		let checkBoyOrGirlName = studentList[boyOrGirl[boyOrGirlName]];
		pitchOn.innerText = `${checkBoyOrGirlName.name}`;
		pitchOn.style.backgroundImage = randomGradient();
	} else {
		if (sex === 0) {
			manButton.innerText = '停止';
		} else {
			womanButton.innerText = '停止';
		}
	}
}

// 封装随机颜色
function randomColor() {
	return Math.floor(Math.random() * 256);
}
// 封装随机渐变色
function randomGradient() {
	let start = randomColor();
	let end = randomColor();
	let color = `linear-gradient(to right, rgb(${start},${randomColor()},${randomColor()}),rgb(${end},${randomColor()},${randomColor()}))`;
	// console.log(color);
	return color;
}
// 动态修改同学背景颜色
function checkName(val) {
	if (val.includes('停')) {
		clearInterval(times);
	} else {
		times = setInterval(function () {
			renderStudent();
		}, 100);
	}
}
