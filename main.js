
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

var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');
if(hashInLocalStorage){
    hash = hashInLocalStorage;
}

var index = 0;
while(index < keys['length']){
    var div = document.createElement('div');
    div.className = 'row';
    main.appendChild(div);
    var row = keys[index];
    var index2 = 0;
    while (index2 < row['length']){
        var kbd = document.createElement('kbd');
        var span = document.createElement('span');
        span.textContent = row[index2];
        kbd.appendChild(span);
        kbd.className = 'key';
        span.className = 'text';
        var button = document.createElement('button');
        kbd.appendChild(button);
        button.textContent = '编辑';
        button.id = row[index2];//button是个容器
        var img = document.createElement('img');
        if(hash[row[index2]]){
            img.src = 'http://'+hash[row[index2]]+'/favicon.ico';
        }else {
            img.src = './qq.jpg'
        }

        img.onerror = function (xxx) {
            xxx.target.src = './qq.jpg'
        };

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
        kbd.appendChild(img);
        kbd.appendChild(button);
        div.appendChild(kbd);
        index2 ++ ;
    }
    index = index + 1;
}

document.onkeypress = function (listener) {
    var key = listener['key'];
    var website = hash[key];
    // location.href = 'http://'+website
    window.open('http://'+website,'_blank')
};