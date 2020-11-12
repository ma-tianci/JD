// 获取购物车中商品


function mm() {
    $.ajax({
        type: "Get",
        url: 'http://jx.xuzhixiang.top/ap/api/cart-list.php',
        data: {
            id: localStorage.getItem("u-id")
        },
        async: false,
        success: function(res) {
            console.log(res.data)
            let html = ''
            res.data.forEach(v => {
                html += `<li li_id="${v.pid}" class="lid">
                <input type="checkbox" class="choose">
                <img src="../${v.pimg}" alt="">
                <p>${v.pname}</p>
                <i class="danjia">${v.pdesc}</i>
                <div class="tianjia">
                    <div class="jia">
                        +
                    </div>
                    <input type="text" value="${v.pnum}" class="zhi">
                    <div class="jian">
                        -
                    </div>
                </div>
                <b class="xiaoji">${v.pdesc}</b>
                <button class="shan">
                    删除
                </button>
            </li>`
            })
            $('#car_box').html(html)
        }
    })
}
mm();


//选择框判断
var totoalchoose = document.querySelector("#quan");

function clickchoose() {
    var achoose = document.querySelectorAll('.choose'); //单选框
    // console.log(achoose.length)
    //点击全选的时候将所有单选框勾选上
    totoalchoose.onclick = function() {
        for (let j = 0; j < achoose.length; j++) {
            if (totoalchoose.checked) {
                achoose[j].checked = true;
            } else {
                achoose[j].checked = false;
            }
        }
    }

    //调用的时候遍历一遍单选按钮
    for (let i = 0; i < achoose.length; i++) {
        let flag = true;
        if (!achoose[i].checked) {
            flag = false;
            break;
        }
        totoalchoose.checked = flag;
    }

    //判断勾选的单选框的选择情况，有一个没选择全选按钮就不勾选
    for (let j = 0; j < achoose.length; j++) {
        achoose[j].onclick = function() {
            let flag = true;
            for (let i = 0; i < achoose.length; i++) {
                if (!achoose[i].checked) {
                    flag = false;
                    break;
                }
            }
            totoalchoose.checked = flag;
        }
    }
}
clickchoose();
// 加减商品数量
var jian = document.getElementsByClassName('jian');
var zhi = document.getElementsByClassName("zhi");
var jia = document.getElementsByClassName("jia");
var shan = document.getElementsByClassName("shan");
var lid = document.getElementsByClassName("lid");
var danjia = document.getElementsByClassName("danjia");
var xiaoji = document.getElementsByClassName("xiaoji");
// var paid = lid.getAttribute("li_id");
for (let i = 0; i < shan.length; i++) {
    $(jia[i]).click(function() {
        console.log($(danjia[i]).val());
        let paid = lid[i].getAttribute("li_id");
        zhi[i].value++
            $(xiaoji[i]).text($(danjia[i]).val() * $(zhi[i]).val())
            // console.log($(zhi).val())
        $.ajax({
            type: "Get",
            url: "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
            data: {
                uid: localStorage.getItem("u-id"),
                pid: paid,
                pnum: $(zhi[i]).val()
            }
        })
    })
}
console.log(jian);
for (let i = 0; i < shan.length; i++) {
    $(jian[i]).click(function() {
        let paid = lid[i].getAttribute("li_id");
        zhi[i].value--;
        if (zhi[i].value <= 1) {
            zhi[i].value = 1;
        }

        $.ajax({
            type: "Get",
            url: "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
            data: {
                uid: localStorage.getItem("u-id"),
                pid: paid,
                pnum: $(zhi[i]).val()
            }
        })
    })
}

for (let i = 0; i < shan.length; i++) {
    $(shan[i]).click(function() {
        let paid = lid[i].getAttribute("li_id");
        console.log("1");
        $.ajax({
            type: "Get",
            url: "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
            data: {
                uid: localStorage.getItem("u-id"),
                pid: paid
            }
        })
        mm();
    })
}