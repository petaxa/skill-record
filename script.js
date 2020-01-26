

// skill data
var timeImages = ['【ビーターラビット】キリト.png','handpointer.png','hourglass.png','image.png','lock.png','laptop.png','a.png','image.png','keyboard.png','laptop.png','【マダーレッド】サーニャ.png','handpointer.png','【マダーレッド】サーニャ.png','handpointer.png','【マダーレッド】サーニャ.png','handpointer.png','【マダーレッド】サーニャ.png','handpointer.png','【マダーレッド】サーニャ.png','handpointer.png','【マダーレッド】サーニャ.png','handpointer.png',];
var typeImages = ['a.png','keyboard.png','lock.png','a.png'];
var swordImages = ['【マダーレッド】サーニャ.png','handpointer.png','hourglass.png','image.png','lock.png','laptop.png'];
var rapierImages = ['a.png','image.png'];
var clubImages = ['keyboard.png','laptop.png'];
var daggerImages = ['image.png','【ビーターラビット】キリト.png'];
var axeImages = ['a.png','keyboard.png'];
var spearImages = ['handpointer.png','【マダーレッド】サーニャ.png'];
var bowImages = ['laptop.png','hourglass.png'];
var shieldImages = ['lock.png','a.png'];


// スキレコ全部を表示
  // 時系列順
function time(){
  var time = ' ';
  for(let i=0;i<timeImages.length;i++){
    var timeImage = timeImages[i];
    let name = i;
    time += `<img src="images/skill/${timeImage}"/>`;
    document.getElementById('time-images').innerHTML=time;
  }
}
time();

  // タイプ順
function type(){
  var type = ' ';
  for(let i=0;i<typeImages.length;i++){
    var typeImage = typeImages[i];
    type += `<img src="images/skill/${typeImage}"/>`;
    document.getElementById('type-images').innerHTML=type;
  }
}
type();


// 属性別表示
function sword(){
  var sword = ' ';
  for(let i=0;i<swordImages.length;i++){
    var swordImage = swordImages[i];
    sword += `<img src="images/skill/${swordImage}"/>`;
    document.getElementById("sword-images").innerHTML=sword;
  }
}

function rapier(){
  var rapier = ' ';
  for(let i=0;i<rapierImages.length;i++){
    var rapierImage = rapierImages[i];
    rapier += `<img src="images/skill/${rapierImage}"/>`;
    document.getElementById("rapier-images").innerHTML=rapier;
  }
}

function club(){
  var club = ' ';
  for(let i=0;i<clubImages.length;i++){
    var clubImage = clubImages[i];
    club += `<img src="images/skill/${clubImage}"/>`;
    document.getElementById("club-images").innerHTML=club;
  }
}
function dagger(){
  var dagger = ' ';
  for(let i=0;i<daggerImages.length;i++){
    var daggerImage = daggerImages[i];
    dagger += `<img src="images/skill/${daggerImage}"/>`;
    document.getElementById("dagger-images").innerHTML=dagger;
  }
}
function axe(){
  var axe = ' ';
  for(let i=0;i<axeImages.length;i++){
    var axeImage = axeImages[i];
     axe+= `<img src="images/skill/${axeImage}"/>`;
    document.getElementById("axe-images").innerHTML=axe;
  }
}

function spear(){
  var spear = ' ';
  for(let i=0;i<spearImages.length;i++){
    var spearImage = spearImages[i];
    spear += `<img src="images/skill/${spearImage}"/>`;
    document.getElementById("spear-images").innerHTML=spear;
  }
}
function bow(){
  var bow = ' ';
  for(let i=0;i<bowImages.length;i++){
    var bowImage = bowImages[i];
    bow += `<img src="images/skill/${bowImage}"/>`;
    document.getElementById("bow-images").innerHTML=bow;
  }
}
function shield(){
  var shield = ' ';
  for(let i=0;i<shieldImages.length;i++){
    var shieldImage = shieldImages[i];
    shield += `<img src="images/skill/${shieldImage}"/>`;
    document.getElementById("shield-images").innerHTML=shield;
  }
}

sword();
rapier();
club();
dagger();
axe();
spear();
bow();
shield();



// ボタンクリック
document.getElementById('sword').onclick=function(){
  document.getElementById("sword-images").classList.toggle("remove");
  document.getElementById("time-images").classList.add("remove");
  document.getElementById("all").classList.remove("btn-color");
  document.getElementById("sword").classList.toggle("btn-color");
}

document.getElementById('rapier').onclick=function(){
  document.getElementById("rapier-images").classList.toggle("remove");
  document.getElementById("time-images").classList.add("remove");
  document.getElementById("all").classList.remove("btn-color");
  document.getElementById("rapier").classList.toggle("btn-color");
}

document.getElementById('club').onclick=function(){
  document.getElementById("club-images").classList.toggle("remove");
  document.getElementById("time-images").classList.add("remove");
  document.getElementById("all").classList.remove("btn-color");
  document.getElementById("club").classList.toggle("btn-color");
}

document.getElementById('dagger').onclick=function(){
  document.getElementById("dagger-images").classList.toggle("remove");
  document.getElementById("time-images").classList.add("remove");
  document.getElementById("all").classList.remove("btn-color");
  document.getElementById("dagger").classList.toggle("btn-color");
}

document.getElementById('axe').onclick=function(){
  document.getElementById("axe-images").classList.toggle("remove");
  document.getElementById("time-images").classList.add("remove");
  document.getElementById("all").classList.remove("btn-color");
  document.getElementById("axe").classList.toggle("btn-color");
}

document.getElementById('spear').onclick=function(){
  document.getElementById("spear-images").classList.toggle("remove");
  document.getElementById("time-images").classList.add("remove");
  document.getElementById("all").classList.remove("btn-color");
  document.getElementById("spear").classList.toggle("btn-color");
}

document.getElementById('bow').onclick=function(){
  document.getElementById("bow-images").classList.toggle("remove");
  document.getElementById("time-images").classList.add("remove");
  document.getElementById("all").classList.remove("btn-color");
  document.getElementById("bow").classList.toggle("btn-color");
}

document.getElementById('shield').onclick=function(){
  document.getElementById("shield-images").classList.toggle("remove");
  document.getElementById("time-images").classList.add("remove");
  document.getElementById("all").classList.remove("btn-color");
  document.getElementById("shield").classList.toggle("btn-color");
}




document.getElementById('all').onclick=function(){
  // モーダル表示
    // クラス取得
  var rom = $('#all-modal').hasClass('remove');
    // if
  if(rom){
    $('#all-modal').fadeIn(1000);
  }else{
    $('#all-modal').fadeOut(1000);
  }
  document.getElementById("all-modal").classList.toggle("remove");
}

document.getElementById("time").onclick=function(){
  document.getElementById('time-images').classList.toggle('remove');
  document.getElementById("all").classList.toggle("btn-color");
  // 属性別表示を解除
  document.getElementById("type-images").classList.add("remove");
  document.getElementById("sword-images").classList.add("remove");
  document.getElementById("rapier-images").classList.add("remove");
  document.getElementById("dagger-images").classList.add("remove");
  document.getElementById("axe-images").classList.add("remove");
  document.getElementById("spear-images").classList.add("remove");
  document.getElementById("bow-images").classList.add("remove");
  document.getElementById("shield-images").classList.add("remove");

  // 属性ボタンのborderを通常に
  document.getElementById('sword').classList.remove("btn-color");
  document.getElementById("rapier").classList.remove("btn-color");
  document.getElementById("club").classList.remove("btn-color");
  document.getElementById("dagger").classList.remove("btn-color");
  document.getElementById("axe").classList.remove("btn-color");
  document.getElementById("spear").classList.remove("btn-color");
  document.getElementById("bow").classList.remove("btn-color");
  document.getElementById("shield").classList.remove("btn-color");
}

document.getElementById("type").onclick=function(){
  document.getElementById('type-images').classList.toggle('remove');
  document.getElementById("all").classList.add("btn-color");
  // 時系列・属性別表示を解除
  document.getElementById("time-images").classList.add("remove");
  document.getElementById("sword-images").classList.add("remove");
  document.getElementById("rapier-images").classList.add("remove");
  document.getElementById("dagger-images").classList.add("remove");
  document.getElementById("axe-images").classList.add("remove");
  document.getElementById("spear-images").classList.add("remove");
  document.getElementById("bow-images").classList.add("remove");
  document.getElementById("shield-images").classList.add("remove");

  // 属性ボタンのborderを通常に
  document.getElementById('sword').classList.remove("btn-color");
  document.getElementById("rapier").classList.remove("btn-color");
  document.getElementById("club").classList.remove("btn-color");
  document.getElementById("dagger").classList.remove("btn-color");
  document.getElementById("axe").classList.remove("btn-color");
  document.getElementById("spear").classList.remove("btn-color");
  document.getElementById("bow").classList.remove("btn-color");
  document.getElementById("shield").classList.remove("btn-color");
}
