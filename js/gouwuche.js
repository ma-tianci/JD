// 获取购物车中商品
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
                html += `<li class="${v.pid}">
            <input type="checkbox">
            <img src="../${v.pimg}" alt="">
            <p>${v.pname}</p>
            <i>${v.pdesc}</i>
            <div class="tianjia">
                <div class="jia">
                    +
                </div>
                <input type="text" value="${v.pnum}" class="zhi">
                <div class="jian">
                    -
                </div>
            </div>
            <b>${v.pdesc}</b>
            <button class="shan">
                删除
            </button>
        </li>`
            })
            $('#car_box').html(html)
        }
    })
    // 加减商品数量
var jian = document.getElementsByClassName('jian');
var zhi = document.getElementsByClassName("zhi");
var jia = document.getElementsByClassName("jia");
var shan = document.getElementsByClassName("shan");
console.log(jian);
jian[0].onclick = function() {
    zhi[0].value--;
    if (zhi[0].value <= 1) {
        zhi[0].value = 1;
    }
    $.ajax({
        type: "Get",
        url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
        data: {
            uid: localStorage.getItem("u-id"),
            pid: paid,
            pnum: $("#zhi").val()
        }
    })
}
jia[0].onclick = function() {
    zhi[0].value++;
}