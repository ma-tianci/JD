    //拿到商品
    $.ajax({
        type: "Get",
        url: 'http://jx.xuzhixiang.top/ap/api/productlist.php?',
        data: {
            uid: 125521
        },
        success: function(res) {
            console.log(res.data)
            let html = ''
            res.data.forEach(v => {
                html += `<figure>
                                <a href="html/xiangqing.html?product_id=${v.pid}"><img src="${v.pimg}" alt=""></a>
                                <figcaption>
								<p>${v.pname}</p>
								<b>￥${v.pdesc}</b>
                                </figcaption>
							</figure>`

            })
            $('#sp_liebiao').html(html)
        }
    })

    var Oli = document.querySelectorAll(".jd");
    var Op = document.querySelector(".jieshu");
    // console.log(Oli);

    function time(date) {
        var nowDate = new Date();
        var ss = Math.floor((date - nowDate) / 1000);
        var h = Math.floor(ss / 3600);
        var m = Math.floor(ss / 60 % 60);
        var s = Math.floor(ss % 60);

        function format(num) {
            return num < 10 ? "0" + num : num;
        }
        h = format(h);
        m = format(m);
        s = format(s);
        Oli[0].innerText = h;
        Oli[1].innerText = m;
        Oli[2].innerText = s;
        if (ss <= 0) {
            clearInterval(timer);
            Op.innerText = "秒杀结束";
        }
    }

    var oDate = new Date("2020/11/26 12:49:30");
    time(oDate);
    var timer = setInterval(function() {
        time(oDate);
    }, 1000)