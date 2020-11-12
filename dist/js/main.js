layui.use(['layer', 'element', 'util'], function () {
    var $ = layui.$,
        layer = layui.layer,
        element = layui.element,
        util = layui.util;

    $(".nav-btn").on('click', function () {
        $('.nav-btn dl').toggleClass('layui-show');
    });


    //文章图片点击事件(如果为pc端才生效)
    var device = layui.device();
    if (!(device.weixin || device.android || device.ios)) {
        $(".text img").click(function () {
            $.previewImage(this.src);
        });
        $.previewImage = function (src) {
            var img = new Image(), index = layer.load(2, { time: 0, scrollbar: false, shade: [0.02, '#000'] });
            img.style.background = '#fff',
                img.style.maxWidth = '100%',
                img.style.display = 'none';
            img.src = src;
            document.body.appendChild(img), img.onerror = function () {
                layer.close(index);
            }, img.onload = function () {
                var width = img.width > 1140 ? '1140px' : img.width
                layer.open({
                    type: 1, shadeClose: true, success: img.onerror, content: $(img), title: false,
                    area: [width, '95vh'], closeBtn: 1, skin: 'layui-layer-nobg', end: function () {
                        document.body.removeChild(img);
                    }
                });
            };
        };
    }

    //右下角工具箱（返回顶部）
    util.fixbar();

});