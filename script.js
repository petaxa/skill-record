$(function(){
　//ローディングエリアを取得
　var loading = $("#loading");
　//ローディングエリアを隠す処理
　var isHidden = function(){
　　loading.fadeOut(1000); //1000ミリ秒かけてフェードアウト
　};
　//1000ミリ秒後にloadingFunc開始
　setTimeout(isHidden,1000);
});

// 配列
var allImages = ['【ビーターラビット】キリト.png','handpointer.png','hourglass.png','image.png','lock.png','laptop.png','a.png','image.png','keyboard.png','laptop.png'];
var recordImages = ['【マダーレッド】サーニャ.png','handpointer.png','hourglass.png','image.png','lock.png','laptop.png'];
var selectImages = ['a.png','image.png'];
var thirdImages = ['keyboard.png','laptop.png'];

// スキレコ全部を表示
function all(){
  var whole = ' ';
  for(let i=0;i<allImages.length;i++){
    var allImage = allImages[i];
    whole += `<img src="images/${allImage}"/>`;
    document.getElementById('all-images').innerHTML=whole;
  }
}
all();


// 属性別表示
function first(){
  var first = ' ';
  for(let i=0;i<recordImages.length;i++){
    var recordImage = recordImages[i];
    first += `<img src="images/${recordImage}"/>`;
    document.getElementById("record-images").innerHTML=first;
  }
}

function second(){
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
second();
third();



// ボタンクリック
document.getElementById('click').onclick=function(){
  document.getElementById("record-images").classList.toggle("remove");
  document.getElementById("all-images").classList.add("remove");
  document.getElementById("click").classList.toggle("btn-color");
}

document.getElementById('second').onclick=function(){
  document.getElementById("select-images").classList.toggle("remove");
  document.getElementById("all-images").classList.add("remove");
}

document.getElementById('third').onclick=function(){
  document.getElementById("third-images").classList.toggle("remove");
  document.getElementById("all-images").classList.add("remove");
}

document.getElementById('all').onclick=function(){
  document.getElementById('all-images').classList.remove('remove');
  document.getElementById("record-images").classList.add("remove");
  document.getElementById("select-images").classList.add("remove");
  document.getElementById("third-images").classList.add("remove");
}
