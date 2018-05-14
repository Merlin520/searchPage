
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

index = 0;
while(index < keys['length']){
    Y = document.createElement('div');
    X.appendChild(Y);
    row = keys[index];
    index2 = 0;
    while (index2 < row['length']){
        Z = document.createElement('kbd');
        Z.textContent = row[index2];
        button = document.createElement('button');
        Z.appendChild(button);
        button.textContent = '编辑';
        button.id = row[index2];//button是个容器
        button.onclick = function (Q) {
          o = Q.target.id;
          p = prompt('给我一个网址');
          hash[o] = p ;
          localStorage.setItem('zzz',JSON.stringify(hash))
        };
        Y.appendChild(Z);

        index2 ++ ;
    }
    index = index + 1;
}

document.onkeypress = function (listener) {
    key = listener['key'];
    website = hash[key];
    // location.href = 'http://'+website
    window.open('http://'+website,'_blank')
};