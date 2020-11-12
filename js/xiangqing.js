 //拿到商品
 $.ajax({
         url: 'http://jx.xuzhixiang.top/ap/api/detail.php',
         data: {
             id: location.search.split('=')[1],
         },
         success: function(res) {
             $('.xq_tu img').attr('src', `../${res.data.pimg}`)
             $('#mingcheng').html(`${res.data.pname}`)
             $('#jiage').html(`${res.data.pdesc}`)
         }
     })
     //  加入购物车
 var jian = document.getElementById("jian");
 var zhi = document.getElementById("zhi");
 var jia = document.getElementById("jia");
 var btn = document.getElementById("btn");
 let paid = location.search.split('=')[1];
 jian.onclick = function() {
     zhi.value--;
     if (zhi.value <= 1) {
         zhi.value = 1;
     }
 }
 jia.onclick = function() {
     zhi.value++;
 }
 btn.onclick = function() {
     $.ajax({
         type: "Get",
         url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
         data: {
             uid: localStorage.getItem("u-id"),
             pid: paid,
             pnum: $("#zhi").val()
         }
     })
     location.href = "gouwuche.html";
 }