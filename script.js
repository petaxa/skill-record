

// skill data
var timeImages = ['鮮烈なる一撃　キリト','鮮烈の連突　アスナ','青の追随　サチ','獅子奮迅　エギル','渾身のオフェンス　リズベット','金剛不壊　エギル','闘魂ブロー　リズベット','気炎万丈　シリカ','ラブリーウィンク　アスナ','尤物の斧使い　リーファ','ハニカミノエル　サチ','お茶目な生誕祭　ユウキ','聖夜の肉祭り　キリト','温容Xmas　アスナ','戦娘の黒槍　シリカ','清廉の神髄　ユイ','煌めく弁天　アスナ','至福の時　リーファ',
'招福開運　キリト','心を込めた願い　シリカ','闇色の剣士　キリト','威風凛然　クライン','礼節の守護者　キズメル','憧れのロングヘアー　アスナ','うとうと時間　ユウキ','活発艶麗　アスナ','ラブ・シックル　リズベット','情熱チョコ　ユウキ','スウィート・ハート　アスナ','ひたむきチョコ　コハル','ハイジャンプ！　サチ','躍然たる剣　リーファ','策士のアクス　アルゴ','悪戦苦闘　リズベット','キャンディー・ガール　ユウキ','感激プレゼント　コハル','キャンディー・ヒロイン　アスナ',
'ブライト・アイズ　シリカ','晴朗ランサー　リーファ','鎧の乙女　リーテン','ピュアリティ・レイピア　シリカ','思い出の香り　キズメル','黄金髪の桜守　リーファ','密かな楽しみ　ユウキ','義の鉄槌　コハル','窓辺の少女　アスナ','紅のソルシエール　アスナ','マジカル・ガール　ユウキ','堅確な意志　キリト','ヘアアレンジ　リズベット','奮励努力　サチ','いつでも一緒　シリカ','春空のシルフ　リーファ','眉目秀麗　アスナ','氷の眼光　マテル','桜華のランサー　ユウキ',
'幸せの花売り　シリカ','イサマシビーター　キリト','風薫る花娘　アスナ','黒百合の閃光　アスナ','グレースフル　サチ','イタズラな瞳　リーファ','レディスタイル　リズベット','快活フロイライン　ユウキ','クラッシィ　アルゴ','猛進メイサー　リズベット','万里一空　ユウキ','秘密のダガー　シリカ','シャイニー・ブライド　アスナ','ハピネス・ブライド　ユウキ','ファーストバイト　リーファ','ブーケトス　コハル','休日の一コマ　サチ','完全勝利　ユウキ','一閃の刺突　アスナ',
'ブラック・ナイト　キリト','物静かな騎士　サチ','フラッパー・スペア　リズベット','チャーミング・ナイト　シリカ','魅惑のサマーナイト　アスナ','サマーガール　コハル','ウェルカム・サマー　ユウキ','星降るサマータイム　リズベット','サマーショット　リーファ','サマードリンク　シリカ','ピュア・シスター　ストレア','ソードブレイカー　フィリア','フラッシュ・スラスト　アスナ','外柔内剛　サチ','悠然たる弓使い　シノン','クールビューティ　シノン','サンセットビーチ　シノン',
'黄昏時の渚　サチ','きらめくサンシャイン　ユウキ','キラキラシーサイド　アスナ','シャイな海辺　コハル','真夏のサンライト　リーファ','イノセント・スマイル　アスナ','夜空に咲く花　ユウキ','スナイパー・アイ　シノン','思い出の夏　コハル','孤高の弓　シノン','陽だまりの丘　アスナ','異国の森　ユウキ','ワンダーハット　シノン','スマイルキャット　リズベット','トラブルラビット　シリカ','ティー・パーティ　リーファ','忠義の盾　キズメル','ファストナイト　アルゴ','穿つ銃弾　キリト',
'電光石火　アスナ','怒りの行軍　リーファ','射抜く眼差し　シノン','銃士の哀憐　サチ','いたずらな笑み　アルゴ','花の舞う庭　アスナ','憩いの朝　アスナ','ベストパートナー　シリカ','秘めた思い　シリカ','勝利者の余裕　キリト','束の間の休息　キリト','異界の剣士　ユージオ','異界の騎士　　アリス','ハッピー・ハロウィン　アスナ','小悪魔スタイル　ユウキ','キュートヴァンパイア　シノン','ハロウィンキャット　リーファ','トリック・ウィッチ　サチ','コフィン・ブレイク　リズベット','紅の巫女　アスナ',
'紅葉の舞　ユウキ','紅葉の弓巫女　シノン','巫女の日常　サチ','巫女の務め　シリカ','和の華菓　リーファ','無邪気の心　ストレア','天真爛漫　ストレア','ラブリーパステル　アスナ','ふわふわスマイル　ユウキ','ひらひらパラソル　サチ','ドーリードレス　シリカ','パステルレース　リズベット','恥じらいフリル　シノン','青薔薇の剣士　ユージオ','金木犀の騎士　アリス','光の剣撃　アスナ','一つの願い　サチ','弾ける光粒　リズベット','トップスピーダー　リーファ','一騎当千　ユウキ','ファーストシュート　シノン',
'一番の思い出　シリカ','ホワイトノエル　アスナ','サイレントナイト　リーファ','プリティーサンタ　シリカ','ホーリープレゼント　シノン','ホワイトクリスマス　アリス','蒼き聖夜　ユージオ','冬空の風　ユウキ','寒空の華　サチ','大願成就　シノン','煌めく迎春　アルゴ','雪空の道　アリス','思いやりの心　ユージオ','慈愛の光　アスナ','純白な祈り　ユウキ','舞い降りる祝福　リズベット','エンジェル・エール　シリカ','神聖な微笑み　アリス','ハピネス・エンジェル　リーファ','在りし日の日常　キリト',
'天職の務め　ユージオ','お昼の日課　アリス','ビター・ブラック　キリト','淡い恋心　サチ','心のカタチ　シノン','恥じらいスウィート　シリカ','熱烈アタック　アリス','真っ直ぐな心　ユージオ','紺ノ閃光　アスナ','白キ絶剣　ユウキ','赤キ名射手　シノン','蒼キ妖精　リーファ','若草ノ竜使い　シリカ','翠緑ノ月　サチ','パラレル・ミュージック　ユナ','癒しの唄　ユナ','優しき想い　コハル','思案のパートナー　コハル','歴戦の剣技　キリト','怒涛の猛攻　アスナ','猛烈な豪砲　エギル','痛烈な追撃　リズベット',
'壮絶な一撃　クライン','巧みな挟撃　シリカ','静かなる剣　ユージオ','黒衣の閃光　アスナ','黒衣のスナイパー　シノン','黒衣の絶剣　ユウキ','黒衣の竜使い　シリカ','黒衣の槍使い　サチ','黒衣の妖精　リーファ','優しき決意　ノーチラス','陽だまりの唄　ユナ','名探偵　キリト','プリティホームズ　アスナ','黒剣の探求者　キリト','閃光の探求者　アスナ','緑精の探求者　リーファ','鋼鉄の探求者　シノン','エッグバニー　アスナ','ぴょんぴょんガール　ユウキ','キラキライースター　シリカ','シャイラパン　シノン',
'カラフルエッグ　リズベット','ビーターラビット　キリト','華麗なる妖精　リーファ','フェアリーウィンク　リーファ','凛然なる侍　アスナ','武運長久　ユウキ','ドラゴン侍　シリカ','弓人の小太刀　シノン','かぶき姫　リーファ','流浪の一刀　キリト','鍛冶屋の恋心　リズベット','ファーストメイサー　リズベット','剣姫の願い　ユウキ','勇往邁進　ユウキ','ブライドグルーム　キリト','ブライダルチャーチル　シノン','フラワー・ブライド　シリカ','キューティ・ブライド　アルゴ','憩いの場　サチ','輝く希望を胸に　サチ',
'クール・ウィッチ　シノン','空飛ぶ魔女っ子　ユウキ','魔女のお姉さま　アスナ','黒猫ウィッチ　ユナ','朱雀　アスナ','青龍　ユウキ','玄武　リーファ','白虎　リズベット','キュートサンシャイン　ユウキ','新緑での水遊び　コハル','エンジョイバカンス　シリカ','一時の休息　アスナ','サマーストローハット　ユナ','ビューティーサマー　アスナ','サマースプラッシュ　シノン','サマードリーム　サチ','神速の剣撃　キリト','磨かれし業　アスナ','ステップアップ　ユウキ','フレッシュ・スマイル　リーファ','希望の歌姫　ユナ',
'唄の旅人　ユナ','いつもそばにいるよ　コハル','異国から来た魔女　サーニャ','世界を導く勇者　キリト','正義を貫く女神　アスナ','夏の笑顔　リーファ','お祭り気分　サチ','満開の花火　シリカ','窓に咲く　キリト','チェック・シックス　シノン','生きる為に　シノン','パイレーツガール　リズベット','閃光の副船長　アスナ','戦場の吟遊詩人　ユナ','自由なキャプテン　ユウキ','決意の騎士　アリス','ステイ・クール　ユージオ','トップアイドル　ユウキ','ニューヒロインアイドル　コハル','ミュージシャンアイドル　ユナ',
'フレッシュアイドル　シリカ','閃光の聖騎士　アスナ','ウィッチ・ナイト　サーニャ','舞い降りた聖騎士　ユウキ','アーチャー・ナイト　シノン','ラッシュメイサー　リズベット','幸せの雨　レイン','紺青の追随　サチ','威風剣士　リーファ','女神の笑顔　アスナ','スリーピングクイーン　アスナ','立ち向かう勇気　シリカ','再生の花　シリカ','浮遊城の救世主　キリト','晴天の休息　キリト','デビルガール　リーファ','リトルデビル　ユウキ','デビルクイーン　シノン','ラブリーデビル　コハル','解放されし金木犀　アリス',
'夜空を駆ける剣士　キリト','看板メイド　アスナ','お掃除メイド　サーニャ','おてんばメイド　リズベット','お子様メイド　ユイ','幸福の笑み　アスナ','剣士の微睡　キリト','メロメロガール　コハル','美々しい踊り子　サチ','ピュアダンサー　シリカ','魅惑の舞姫　ユウキ','極めし一撃　ストレア','あなたへのささやき　ストレア','夜空と親愛　ロニエ','青薔薇と恋心　ティーゼ','愛情の届け　アスナ','輝きの美少女　アリス','男前なプリンス　キリト','最高にキュート　シノン','夢の花園　ユウキ','幸福への願い　リーファ',
'雙翼刃の整合騎士　レンリ','随一の情報屋　アルゴ','ホークアイ　シノン','堅牢堅固　ヒースクリフ','突き進む英雄　キリト','唯一無二の閃光　アスナ','フレンドメイス　リズベット','勇戦の覚悟　サチ','強襲の一撃　リーファ','砕けぬ意志　ユイ','整合騎士　エルドリエ','寡黙な女騎士　シェータ','鋼の拳　イスカーン','慈愛の瞳　アスナ','聖夜のプレゼント　キリト','愛の特注ケーキ　リズベット','幸せの伝道者　ユウキ','キミと過ごす聖夜　コハル','ついつい食べ過ぎ　リーファ','閃光の払い手　アスナ',
'願いを込めた絵馬　リズベット','希望の光　キリト'];
var swordImages = ['鮮烈なる一撃　キリト'];
var rapierImages = ['心を込めた願い　シリカ'];
var clubImages = ['いつもそばにいるよ　コハル'];
var daggerImages = ['閃光の聖騎士　アスナ'];
var axeImages = ['闇色の剣士　キリト'];
var spearImages = ['希望の光　キリト'];
var bowImages = ['銃士の哀憐　サチ'];
var shieldImages = ['物静かな騎士　サチ'];


// kiss
  // skill-images ID
    var timePic = document.getElementById('time-images');
    var swordPic = document.getElementById('sword-images');
    var rapierPic = document.getElementById('rapier-images');
    var clubPic = document.getElementById('club-images');
    var daggerPic = document.getElementById('dagger-images');
    var axePic = document.getElementById('axe-images');
    var spearPic = document.getElementById('spear-images');
    var bowPic = document.getElementById('bow-images');
    var shieldPic = document.getElementById('shield-images');

  // weapon-btn ID
    var swordBtn = document.getElementById('sword');
    var rapierBtn = document.getElementById('rapier');
    var clubBtn = document.getElementById('club');
    var daggerBtn = document.getElementById('dagger');
    var axeBtn = document.getElementById('axe');
    var spearBtn = document.getElementById('spear');
    var bowBtn = document.getElementById('bow');
    var shieldBtn = document.getElementById('shield');
    var allBtn = document.getElementById('all');
    var timeBtn = document.getElementById('time');
    var typeBtn = document.getElementById('type');

  //all-modal ID
    var allModal = document.getElementById('all-modal');

  // buttonBorder remove
    function borderRemove(){
      swordBtn.classList.remove("btn-color");
      rapierBtn.classList.remove("btn-color");
      clubBtn.classList.remove("btn-color");
      daggerBtn.classList.remove("btn-color");
      axeBtn.classList.remove("btn-color");
      spearBtn.classList.remove("btn-color");
      bowBtn.classList.remove("btn-color");
      shieldBtn.classList.remove("btn-color");
   }
  // buttonBorder add
    function borderAdd(){
      swordBtn.classList.add("btn-color");
      rapierBtn.classList.add("btn-color");
      clubBtn.classList.add("btn-color");
      daggerBtn.classList.add("btn-color");
      axeBtn.classList.add("btn-color");
      spearBtn.classList.add("btn-color");
      bowBtn.classList.add("btn-color");
      shieldBtn.classList.add("btn-color");
    }
  // タイプ順
    function type(){
      swordPic.classList.remove("remove");
      rapierPic.classList.remove("remove");
      clubPic.classList.remove("remove");
      daggerPic.classList.remove("remove");
      axePic.classList.remove("remove");
      spearPic.classList.remove("remove");
      bowPic.classList.remove("remove");
      shieldPic.classList.remove("remove");
    }
  // all-modal fadeOut
    function modalOut(){
      $('#all-modal').fadeOut(1000);
      allModal.classList.add("remove");
    }
  //属性別表示を解除
    function typeRemove(){
      swordPic.classList.add("remove");
      rapierPic.classList.add("remove");
      clubPic.classList.add("remove");
      daggerPic.classList.add("remove");
      axePic.classList.add("remove");
      spearPic.classList.add("remove");
      bowPic.classList.add("remove");
      shieldPic.classList.add("remove");
    }


// スキルの枚数を表示
// 属性で切り替え
function timeLength(){
  let timeLength =`<p >${timeImages.length}枚です。</p>`;
  document.getElementById("record-length").innerHTML=timeLength;
}
timeLength();





// スキレコ全部を表示
  // 時系列順
function time(){
  var time = ' ';
  for(let i=0;i<timeImages.length;i++){
    var timeImage = timeImages[i];
    time += `<img src="images/skill/${timeImage}.png"/>`;
  }
  timePic.innerHTML=time;
}
time();




// 属性別表示
function sword(){
  var sword = ' ';
  for(let i=0;i<swordImages.length;i++){
    var swordImage = swordImages[i];
    sword += `<img src="images/skill/${swordImage}.png"/>`;
  }
  swordPic.innerHTML=sword;
}

function rapier(){
  var rapier = ' ';
  for(let i=0;i<rapierImages.length;i++){
    var rapierImage = rapierImages[i];
    rapier += `<img src="images/skill/${rapierImage}.png"/>`;
  }
  rapierPic.innerHTML=rapier;
}

function club(){
  var club = ' ';
  for(let i=0;i<clubImages.length;i++){
    var clubImage = clubImages[i];
    club += `<img src="images/skill/${clubImage}.png"/>`;
  }
  clubPic.innerHTML=club;
}
function dagger(){
  var dagger = ' ';
  for(let i=0;i<daggerImages.length;i++){
    var daggerImage = daggerImages[i];
    dagger += `<img src="images/skill/${daggerImage}.png"/>`;
  }
  daggerPic.innerHTML=dagger;
}
function axe(){
  var axe = ' ';
  for(let i=0;i<axeImages.length;i++){
    var axeImage = axeImages[i];
     axe+= `<img src="images/skill/${axeImage}.png"/>`;
  }
  axePic.innerHTML=axe;
}

function spear(){
  var spear = ' ';
  for(let i=0;i<spearImages.length;i++){
    var spearImage = spearImages[i];
    spear += `<img src="images/skill/${spearImage}"/>`;
  }
  spearPic.innerHTML=spear;
}
function bow(){
  var bow = ' ';
  for(let i=0;i<bowImages.length;i++){
    var bowImage = bowImages[i];
    bow += `<img src="images/skill/${bowImage}"/>`;
  }
  bowPic.innerHTML=bow;
}
function shield(){
  var shield = ' ';
  for(let i=0;i<shieldImages.length;i++){
    var shieldImage = shieldImages[i];
    shield += `<img src="images/skill/${shieldImage}"/>`;
  }
  shieldPic.innerHTML=shield;
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
swordBtn.onclick=function(){
  swordPic.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  swordBtn.classList.toggle("btn-color");
  modalOut();
}

rapierBtn.onclick=function(){
  rapierPic.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  rapierBtn.classList.toggle("btn-color");
  modalOut();
}

clubBtn.onclick=function(){
  clubPic.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  clubBtn.classList.toggle("btn-color");
  modalOut();
}

daggerBtn.onclick=function(){
  daggerPic.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  daggerBtn.classList.toggle("btn-color");
  modalOut();
}

axeBtn.onclick=function(){
  axePic.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  axeBtn.classList.toggle("btn-color");
  modalOut();
}

spearBtn.onclick=function(){
  spearPic.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  spearBtn.classList.toggle("btn-color");
  allModal.classList.add("remove");
  modalOut();
}

bowBtn.onclick=function(){
  bowPic.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  bowBtn.classList.toggle("btn-color");
  allModal.classList.add("remove");
  modalOut();
}

shieldBtn.onclick=function(){
  shieldPic.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  shieldBtn.classList.toggle("btn-color");
  modalOut();
}




allBtn.onclick=function(){
  // モーダル表示
    // クラス取得
  var rom = $('#all-modal').hasClass('remove');
    // if
  if(rom){
    $('#all-modal').fadeIn(1000);
  }else{
    $('#all-modal').fadeOut(1000);
  }
  allModal.classList.toggle("remove");
}





timeBtn.onclick=function(){
  timePic.classList.toggle('remove');
  // allBtnの色制御
  var timeHasRemove = $("#time-images").hasClass('remove');
  if(timeHasRemove){
    document.getElementById("all").classList.remove("btn-color");
  }else{
    document.getElementById("all").classList.add("btn-color");
  }
  // 属性別表示を解除
  typeRemove();

  // 属性ボタンのborderを通常に
  borderRemove();

  //モーダルの非表示
  modalOut();
}

document.getElementById("type").onclick=function(){
  type();
  // 時系列表示を解除
  document.getElementById("time-images").classList.add("remove");
  
  //allbtnのカラーオフ
  allBtn.classList.remove("btn-color");

  // 属性ボタンのborderを通常に
  borderAdd();

  //モーダルの非表示
  modalOut();
}
