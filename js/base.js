// 获取ID号
function id(obj) {
    return document.getElementById(obj);
}
//绑定事件
function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
// 获取屏幕宽度高度
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
// 添加class
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}
// 删除class
function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}

// 获取浏览器地址栏参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  decodeURI(r[2]); return null;
}

    var provinceArr = [];
    provinceArr[0] = ["广东省"];
    provinceArr[1] = ["湖北省"];
    provinceArr[2] = ["北京市"];

    var cityArr = [];
    cityArr[0] = ['广州市', '佛山市', '东莞市', '中山市'];
    cityArr[1] = ['武汉市', '宜昌市', '荆门市', '荆州市', '咸宁市'];
    cityArr[2] = ["北京市"];

    //当省份的选择发生变化时调用 该方法   将市县加载到下拉选择框
    function getCity()
    {
        //1.获取省份选择框的对象
        var provincesobj=id("province");
        //2.获取市县选择框的对象
        var cityobj=id("city");
        //3.获取被选择的省份的索引
        var index=provincesobj.selectedIndex;
        console.log(index);
        // alert(provincesobj[index].value+","+provincesobj[index].text);
        ////4.通过省份的索引获取它的value值，value值也是它在数组的索引值
        var value=provincesobj[index].value;
        console.log(provincesobj[index].value+","+provincesobj[index].text);
        console.log(value);
        
        //5.获取对应省份的市县数组
        var cityName=cityArr[value];
        //6.将下拉框清楚索引为0之后的，只保留第一个
        cityobj.length=1;
        //通过循环遍历市县元素给下拉框赋值
        console.log(cityArr[value]);
        for(var i=1;i<cityArr[value].length;i++)
        {
            cityobj.options[cityobj.options.length]=new Option(cityName[i],i);
            
        }
        
    }

    function fnInfo(oInfo, sInfo)
	{
	    oInfo.innerHTML = sInfo;
	    oInfo.style.WebkitTransform = oInfo.style.transform = "scale(1)";
	    oInfo.style.opacity = 1;
	    setTimeout(function(){
	        oInfo.style.WebkitTransform = oInfo.style.transform = "scale(0)";
	      oInfo.style.opacity = 0;
	    }, 2000);
	    oInfo.style.height = "0";
	}

	function checkPhone(){ 
	    var phone = id('y_mobile').value;
	    // alert(phone);
	    var info = id('span');
	    if(!(/^1[34578]\d{9}$/.test(phone))){ 
	        fnInfo(info, phone+"不是有效电话号码");
	        id('y_mobile').value = "";
	        return false; 
	    } 
	}

	function onCli(){
		// alert("xxx");
		var aIn = id("submit");
		var onCli = id("onCli");
		var aInput = aIn.getElementsByTagName("input");
		var pr = id("province");
		var ci = id("city");
		// alert(pr.length);
		// alert(pr.value + pr.options[pr.selectedIndex].text);
		// alert(aInput.length);
		for(let i = 0; i < aInput.length; i++){
			// alert(aInput[i].value);
			if (aInput[i].value == "") {
					fnInfo(onCli, "请填写完整");
					return false;
			}
		}
		if (pr.value == "" || ci.value == "") {
			fnInfo(onCli, "请填写完整");
			return false;
		}

		var prStr = pr.options[pr.selectedIndex].text;
		var ciStr = ci.options[ci.selectedIndex].text;
		var inStr = [];
		for(let i = 0; i < aInput.length - 1; i++){
			inStr.push(aInput[i].value);
		}
		var str = inStr.toString() + "," + prStr + "," + ciStr;
		console.log(str);
		console.log(inStr.toString(), prStr, ciStr);
		window.open("index1.html?str="+str);

	}