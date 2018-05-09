
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



index = 0;
while(index < keys['length']){
    Y = document.createElement('div');
    X.appendChild(Y);
    row = keys[index];
    index2 = 0;
    while (index2 < row['length']){
        Z = document.createElement('kbd');
        Z.textContent = row[index2];
        Y.appendChild(Z);
        index2 ++ ;
    }
    index = index + 1;
}
