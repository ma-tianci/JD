$(".submit").click(function() {
    $.ajax({
        url: "http://jx.xuzhixiang.top/ap/api/reg.php",
        type: "GET",
        data: {
            username: $('.text').val(),
            password: $('.password').val()

        },
        success: function(res) {
            console.log(res);

            if (res.code == 1) {
                alert(res.msg);
                location.href = "denglu.html";
            } else {
                alert(res.msg);
            }
        }
    })
})