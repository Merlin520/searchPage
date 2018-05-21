
//1.初始化数据
    var hashA = init();
    var keys = hashA['keys'];
    var hash = hashA['hash'];





//2.生成键盘
generateKeyboard(keys,hash);




//3.监听用户（键盘）
ListenToUser(hash);




//工具函数
function getFormLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName) {
    return document.createElement(tagName);
}

function createSpan(textContent) {
    var span = tag('span');
    span.textContent = textContent;
    span.className = 'text';
    return span
}

function createButton(id) {
    var button = tag('button');
    // kbd.appendChild(button);
    button.textContent = '编辑';
    button.id = id;//button是个容器
    button.onclick = function (Q) {
        var button2 = Q['target'];
        var img2 = button2.previousSibling;
        var o = button2['id'];
        var p = prompt('给我一个网址');
        hash[o] = p ;
        img2.src = 'http://'+p+'/favicon.ico';
        img2.onerror = function (xxx) {
            xxx.target.src = './qq.jpg'
        };
        localStorage.setItem('zzz',JSON.stringify(hash))
    };
    return button
}

function createImage(domain) {
    var img = tag('img');
    if(domain){
        img.src = 'http://'+domain+'/favicon.ico';
    }else {
        img.src = './qq.jpg'
    }
    img.onerror = function (xxx) {
        xxx.target.src = './qq.jpg'
    };
    return img
}

function init() {
    var keys = {
        0:['q','w','e','r','t','y','u','i','o','p'],
        1:['q','w','e','r','t','y','u','i','o'],
        2:['q','w','e','r','t','y'],
        length:3
    };

    var hash = {
        q:'qq.com',
        w:'weibo.com',
        b:'baidu.com'
    };

    var hashInLocalStorage = getFormLocalStorage('zzz');
    if(hashInLocalStorage){
        hash = hashInLocalStorage;
    }
    return{
        "keys":keys,
        "hash":hash
    }

}

function generateKeyboard(keys,hash) {
    for(var index = 0;index < keys['length'];index++){
        var div = tag('div');
        div.className = 'row';

        main.appendChild(div);

        var row = keys[index];
        for(index2 = 0;index2 < row['length'];index2 ++ ){
            var span = createSpan(row[index2]);


            var button = createButton(row[index2]);



            var img = createImage(hash[row[index2]]);



            var kbd = tag('kbd');
            kbd.className = 'key';

            kbd.appendChild(span);
            kbd.appendChild(img);
            kbd.appendChild(button);
            div.appendChild(kbd);
        }
    }
}

function ListenToUser(hash) {
    document.onkeypress = function (listener) {
        var key = listener['key'];
        var website = hash[key];
        // location.href = 'http://'+website
        window.open('http://'+website,'_blank')
    };
}