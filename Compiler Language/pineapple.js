<script type="text/javascript">

// 点击特效
let create_emoji = function(e){
	// 获取随机emoji的函数
	let get_rand_emoji = function(){
		// 表情列表
		let emoji_dict = ['🍍']
		function getRndInteger(min, max) {
		    return Math.floor(Math.random() * (max - min + 1) ) + min;
		}
		return emoji_dict[getRndInteger(0, emoji_dict.length-1)]
	}

	let anim                                    // 动画计时器
	let increase=0                                 // 动画位置控制

	let emoji = document.createElement("b")    // 创建一个元素
	emoji.style.color = "#E94F06"     // 设置颜色
    emoji.style.zIndex = 9999         // 设置置于顶层
    emoji.style.position = "fixed" // 设置屏幕绝对定位
    emoji.style.userSelect = "none"       // 设置不可选中
    let x = e.clientX
    let y = e.clientY          // 获取位置
    emoji.style.left = (x-10)+ "px"
    emoji.style.top = (y-15) + "px"    // 将位置摆到中间
    emoji.innerText = get_rand_emoji()                 // 获取随机表情
    emoji.style.fontSize = Math.random() * 10 + 8 + "px"            // 大小
    clearInterval(anim)                // 清除计时器
    let $body = document.getElementsByTagName("body")[0]
    $body.appendChild(emoji)                   // 添加元素
    anim = setInterval(                    // 启动动画
    		function(){
    			if (++increase == 150){
    				clearInterval(anim)
    				$body.removeChild(emoji)
    			}
    			// 移动元素
    			emoji.style.top = (y-15) - increase + "px";
	        	emoji.style.opacity = (150 - increase) / 120;
    		}, 
    		10
	);
};

(function() {
    let $html = document.getElementsByTagName("html")[0]

	$html.onclick = function(e) {
        create_emoji(e)
    }
})();

</script>
