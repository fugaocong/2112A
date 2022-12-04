// 获取input框
let input = document.querySelector("._input")
// 获取添加按钮
let submit = document.querySelector(".submit-but")
// 获取ul
let ul = document.querySelector("ul")
// 获取数据为空时显示的提示
let footer = document.querySelector("footer")
let num = document.querySelector(".num")
let span = document.querySelector(".span")
// 获取尾部
var options = document.querySelector(".options")
// input回车事件
input.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        if (input.value == "") {
            return false
        } else {
            add()
            toggle()
            foot()
            nums()
            input.value = ""
        }
    }
})
// sub添加事件
function down () {
    span.classList.add("span1")
    submit.style.transform = "rotate(0deg)";
}
function up () {
    //鼠标释放时让lock异步执行，setTimeout因为异步任务，所以会放到任务队列最后执行，让click事件先执行了
    span.classList.remove("span1")
    submit.style.transform = "rotate(4deg)";
    if (input.value == "") {
        return false
    } else {
        add()
        foot()
        input.value = ""
        toggle()
        nums()
    }
}

// 状态切换
function toggle () {
    let li = document.querySelectorAll("li")
    for (let i = 0; i < li.length; i++) {
        // 给li里面的按钮加事件
        li[i].children[0].onclick = function () {
            // 判断父级有没有选中的类名
            if (li[i].className.indexOf("completed") > -1) {
                // 有的话删除button样式
                this.classList.remove('check-btn')
                // 重新添加
                this.classList.add("checkbox-btn")
                // 给父级删除选中的样式
                this.parentNode.classList.remove("completed")
                // 删除第一个子节点
                this.firstChild.remove()
                // 添加一个子节点
                this.innerHTML = `
                 <div class="checkbox"></div>
                 `
            } else {
                // 有选中类名的话删除button当前的类名
                this.classList.remove('checkbox-btn')
                // 新添加一个类名
                this.classList.add("check-btn")
                // 给父级添加选中的类名
                this.parentNode.classList.add("completed")
                // 删除第一个子节点
                this.firstChild.remove()
                // 添加一个子节点
                this.innerHTML = `
                 <svg class="svg-inline--fa fa-check fa-w-16 check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-132cabf7="">
                     <path class="" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                 </svg>
                 `
            }
        }
    }
    foot()
    nums()
}
toggle()
// 添加
function add () {
    // 添加一个li
    let li = document.createElement("li")
    li.classList.add("todos-item")
    li.innerHTML = ` <button class="checkbox-btn" >
                         <div class="checkbox"></div>
                     </button>
                     <p class="content">${input.value}</p>
                     <button class="close-btn">
                         <svg class="svg-inline--fa fa-times fa-w-11 close" aria-hidden="true" focusable="false"
                                 data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 352 512" data-v-132cabf7="">
                             <path class="" fill="currentColor"
                                 d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                             </path>
                         </svg>
                     </button>
                     `
    ul.insertBefore(li, ul.children[0])
    foot()
}
// 删除事件
ul.onclick = function (e) {
    if (e.target.className == "close-btn") {
        // console.log(e.target);
        e.target.parentNode.remove()
    }
    foot()
    nums()
}
// 底部的显示与隐藏
function foot () {
    if (ul.children.length != '') {
        footer.style.display = "none"
        options.style.display = ""
    } else {
        footer.style.display = ""
        options.style.display = "none"
    }
}
foot()
// 计算所有没选中的数据的数量
function nums () {
    let li = document.querySelectorAll("li")
    let status = document.querySelectorAll(".completed")
    let num = document.querySelector(".num")
    let sum = li.length - status.length
    num.innerHTML = `${sum} item left`
}
nums()

//   选中删除
function delAll () {
    var lis = document.querySelectorAll('.option');
    lis[3].onclick = function () {
        let delsAll = document.querySelectorAll(".completed")
        for (let i = 0; i < delsAll.length; i++) {
            delsAll[i].remove()
            foot()
            // lis[0].classList.add("active")
            // lis[1].classList.remove("active")
            // lis[2].classList.remove("active")
            // lis[3].classList.remove("active")
            // lis[1].style.display = ""
            // lis[2].style.display = ""
        }
        tops()
    }

}
delAll()

// top切换
function tops () {
    // 获取所有的切换标签
    var lis = document.querySelectorAll('.option');
    // 循环所有的切换按钮
    for (let i = 0; i < lis.length; i++) {
        // 给切换按钮加下标
        lis[i].setAttribute("index", i)
        // 做点击事件
        lis[i].onclick = function () {
            let index = this.getAttribute("index")
            for (let j = 0; j < lis.length; j++) {
                // 删除要离开的标签的选中状态
                lis[j].classList.remove("active")
                // 给选中的标签加类名
                lis[index].classList.add("active")
            }
            if (index == 0) {
                let li = document.querySelectorAll("li")
                for (let i = 0; i < li.length; i++) {
                    li[i].style.display = ""
                }
            }
            if (index == 1) {
                let li = document.querySelectorAll("li")
                for (let i = 0; i < li.length; i++) {
                    li[i].style.display = ""
                    if (li[i].className.indexOf("completed") != -1) {
                        li[i].style.display = "none"
                    }
                }
            }
            if (index == 2) {
                let li = document.querySelectorAll("li")
                for (let i = 0; i < li.length; i++) {
                    li[i].style.display = ""
                    if (li[i].className.indexOf("completed") == -1) {
                        li[i].style.display = "none"
                    }
                }
            }
            // let li = document.querySelectorAll("li")
            // for (let i = 0; i < li.length; i++) {
            //     if (li[i].className.indexOf("completed") == -1) {
            //         lis[1].style.display = "none"
            //         lis[2].style.display = "none"
            //         lis[3].style.display = "none"
            //     }
            // }
            // for (let i = 0; i < li.length; i++) {
            //     if (li[i].className.indexOf("completed") != -1) {
            //         lis[1].style.display = ""
            //         lis[2].style.display = ""
            //         lis[3].style.display = ""
            //     }
            // }

        }
    }
    delAll()
}
tops()
