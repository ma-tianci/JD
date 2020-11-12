    //拿到商品
    $.ajax({
        type: "Get",
        url: 'http://jx.xuzhixiang.top/ap/api/productlist.php?pagesize=2',
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