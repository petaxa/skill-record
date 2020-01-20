// 配列
var recordImages = ['【マダーレッド】サーニャ.png','handpointer.png','hourglass.png','image.png','lock.png','laptop.png'];
var selectImages = ['a.png','image.png'];
var thirdImages = ['keyboard.png','laptop.png'];

// スキレコ全部を表示
function first(){
  var first = ' ';
  for(let i=0;i<recordImages.length;i++){
    var recordImage = recordImages[i];
    first += `<img src="images/${recordImage}"/>`;
    document.getElementById("record-images").innerHTML=first;
  }
}

function select(){
  var second = ' ';
  for(let i=0;i<selectImages.length;i++){
    var selectImage = selectImages[i];
    second += `<img src="images/${selectImage}"/>`;
    document.getElementById("select-images").innerHTML=second;
  }
}

function third(){
  var third = ' ';
  for(let i=0;i<thirdImages.length;i++){
    var thirdImage = thirdImages[i];
    third += `<img src="images/${thirdImage}"/>`;
    document.getElementById("third-images").innerHTML=third;
  }
}

first();
select();
third();



// ボタンクリック
document.getElementById('click').onclick=function(){
  document.getElementById("record-images").classList.toggle("remove");
}

document.getElementById('second').onclick=function(){
  document.getElementById("select-images").classList.toggle("remove");
}

document.getElementById('third').onclick=function(){
  document.getElementById("third-images").classList.toggle("remove");
}
