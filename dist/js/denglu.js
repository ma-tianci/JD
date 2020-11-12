// ajax登录
$('.submit').click(function() {
    $.ajax({
        url: "http://jx.xuzhixiang.top/ap/api/login.php",
        type: "POST",
        data: {
            username: $(".text").val(),
            password: $(".password").val()

        },
        success: function(res) {
            console.log(res);
            console.log(res.data);

            if (res.code == 1) {
                localStorage.setItem("u-id", res.data.id);
                localStorage.setItem("u-token", res.data.token)
                alert("登录成功")
                location.href = "../index.html"
            } else {
                alert(res.msg)
            }
        }
    })
})