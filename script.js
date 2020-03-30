

// skill data
var timeImages = ['鮮烈なる一撃　キリト','鮮烈の連突　アスナ','青の追随　サチ','獅子奮迅　エギル','渾身のオフェンス　リズベット','金剛不壊　エギル','闘魂ブロー　リズベット','気炎万丈　シリカ','ラブリーウィンク　アスナ','尤物の斧使い　リーファ','ハニカミノエル　サチ','お茶目な生誕祭　ユウキ','聖夜の肉祭り　キリト','温容Xmas　アスナ','戦娘の黒槍　シリカ','清廉の神髄　ユイ','煌めく弁天　アスナ','至福の時　リーファ',
'招福開運　キリト','心を込めた願い　シリカ','闇色の剣士　キリト','威風凛然　クライン','礼節の守護者　キズメル','憧れのロングヘアー　アスナ','うとうと時間　ユウキ','活発艶麗　アスナ','ラブ・シックル　リズベット','情熱チョコ　ユウキ','スウィート・ハート　アスナ','ひたむきチョコ　コハル','ハイジャンプ！　サチ','躍然たる剣　リーファ','策士のアクス　アルゴ','悪戦苦闘　リズベット','キャンディー・ガール　ユウキ','感激プレゼント　コハル','キャンディー・ヒロイン　アスナ',
'ブライト・アイズ　シリカ','晴朗ランサー　リーファ','鎧の乙女　リーテン','ピュアリティ・レイピア　シリカ','思い出の香り　キズメル','黄金髪の桜守　リーファ','密かな楽しみ　ユウキ','義の鉄槌　コハル','窓辺の少女　アスナ','紅のソルシエール　アスナ','マジカル・ガール　ユウキ','堅確な意志　キリト','ヘアアレンジ　リズベット','奮励努力　サチ','いつでも一緒　シリカ','春空のシルフ　リーファ','眉目秀麗　アスナ','氷の眼光　マテル','桜華のランサー　ユウキ',
'幸せの花売り　シリカ','イサマシビーター　キリト','風薫る花娘　アスナ','黒百合の閃光　アスナ','グレースフル　サチ','イタズラな瞳　リーファ','レディスタイル　リズベット','快活フロイライン　ユウキ','クラッシィ　アルゴ','猛進メイサー　リズベット','万里一空　ユウキ','秘密のダガー　シリカ','シャイニー・ブライド　アスナ','ハピネス・ブライド　ユウキ','ファーストバイト　リーファ','ブーケトス　コハル','休日の一コマ　サチ','完全勝利　ユウキ','一閃の刺突　アスナ',
'ブラック・ナイト　キリト','物静かな騎士　サチ','フラッパー・スペア　リズベット','チャーミング・ナイト　シリカ','魅惑のサマーナイト　アスナ','サマーガール　コハル','ウェルカム・サマー　ユウキ','星降るサマータイム　リズベット','サマーショット　リーファ','サマードリンク　シリカ','ピュア・シスター　ストレア','ソードブレイカー　フィリア','フラッシュ・スラスト　アスナ','外柔内剛　サチ','悠然たる弓使い　シノン','クールビューティ　シノン','サンセットビーチ　シノン',
'黄昏時の渚　サチ','きらめくサンシャイン　ユウキ','キラキラシーサイド　アスナ','シャイな海辺　コハル','真夏のサンライト　リーファ','イノセント・スマイル　アスナ','夜空に咲く花　ユウキ','スナイパー・アイ　シノン','思い出の夏　コハル','孤高の弓　シノン','陽だまりの丘　アスナ','異国の森　ユウキ','ワンダーハット　シノン','スマイルキャット　リズベット','トラブルラビット　シリカ','ティー・パーティ　リーファ','忠義の盾　キズメル','ファストナイト　アルゴ','穿つ銃弾　キリト',
'電光石火　アスナ','怒りの行軍　リーファ','射抜く眼差し　シノン','銃士の哀憐　サチ','いたずらな笑み　アルゴ','花の舞う庭　アスナ','憩いの朝　アスナ','ベストパートナー　シリカ','秘めた思い　シリカ','勝利者の余裕　キリト','束の間の休息　キリト','異界の剣士　ユージオ','異界の騎士　アリス','ハッピー・ハロウィン　アスナ','小悪魔スマイル　ユウキ','キュートヴァンパイア　シノン','ハロウィンキャット　リーファ','トリック・ウィッチ　サチ','コフィン・ブレイク　リズベット','紅の巫女　アスナ',
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
var swordImages = ['鮮烈なる一撃　キリト','ハニカミノエル　サチ','礼節の守護者　キズメル','躍然たる剣　リーファ','キャンディー・ガール　ユウキ','マジカル・ガール　ユウキ','堅確な意志　キリト','春空のシルフ　リーファ','イサマシビーター　キリト','万里一空　ユウキ','完全勝利　ユウキ','ブラック・ナイト　キリト','ウェルカム・サマー　ユウキ','ピュア・シスター　ストレア','きらめくサンシャイン　ユウキ','異国の森　ユウキ','勝利者の余裕　キリト','異界の剣士　ユージオ','異界の騎士　アリス',
'天真爛漫　ストレア','金木犀の騎士　アリス','雪空の道　アリス','熱烈アタック　アリス','紺ノ閃光　アスナ','静かなる剣　ユージオ','優しき決意　ノーチラス','黒剣の探求者　キリト','フェアリーウィンク　リーファ','勇往邁進　ユウキ','ブライドグルーム　キリト','神速の剣撃　キリト','異国から来た魔女　サーニャ','世界を導く勇者　キリト','決意の騎士　アリス','トップアイドル　ユウキ','浮遊城の救世主　キリト','解放されし金木犀　アリス','剣士の微睡　キリト','魅惑の舞姫　ユウキ','極めし一撃　ストレア',
'夜空と親愛　ロニエ','整合騎士　エルドリエ'];
var rapierImages = ['鮮烈の連突　アスナ','煌めく弁天　アスナ','活発艶麗　アスナ','キャンディー・ヒロイン　アスナ','ピュアリティ・レイピア　シリカ','紅のソルシエール　アスナ','氷の眼光　マテル','黒百合の閃光　アスナ','シャイニー・ブライド　アスナ','一閃の刺突　アスナ','魅惑のサマーナイト　アスナ','フラッシュ・スラスト　アスナ','キラキラシーサイド　アスナ','電光石火　アスナ','花の舞う庭　アスナ','紅の巫女　アスナ','ホワイトノエル　アスナ','白キ絶剣　ユウキ','怒涛の猛攻　アスナ',
'閃光の探求者　アスナ','磨かれし業　アスナ','正義を貫く女神　アスナ','閃光の聖騎士　アスナ','女神の笑顔　アスナ','幸福の笑み　アスナ','お子様メイド　ユイ','寡黙な女騎士　シェータ','慈愛の瞳　アスナ'];
var clubImages = ['渾身のオフェンス　リズベット','聖夜の肉祭り　キリト','招福開運　キリト','義の鉄槌　コハル','レディスタイル　リズベット','休日の一コマ　サチ','星降るサマータイム　リズベット','シャイな海辺　コハル','トラブルラビット　シリカ','コフィン・ブレイク　リズベット','パステルレース　リズベット','癒しの唄　ユナ','痛烈な追撃　リズベット','名探偵　キリト','ファーストメイサー　リズベット','サマーストローハット　ユナ','ラッシュメイサー　リズベット','愛の特注ケーキ　リズベット'];
var daggerImages = ['秘密のダガー　シリカ','ファーストバイト　リーファ','サマードリンク　シリカ','ソードブレイカー　フィリア','夜空に咲く花　ユウキ','射抜く眼差し　シノン','ベストパートナー　シリカ','和の華菓　リーファ','ドーリードレス　シリカ','煌めく迎春　アルゴ','恥じらいスウィート　シリカ','優しき想い　コハル','キラキライースター　シリカ','黒猫ウィッチ　ユナ','エンジョイバカンス　シリカ','唄の旅人　ユナ','ミュージシャンアイドル　ユナ','立ち向かう勇気　シリカ','雙翼刃の整合騎士　レンリ'];
var axeImages = ['獅子奮迅　エギル','尤物の斧使い　リーファ','ラブ・シックル　リズベット','策士のアクス　アルゴ','黄金髪の桜守　リーファ','クラッシィ　アルゴ','真夏のサンライト　リーファ','ティー・パーティ　リーファ','ハロウィンキャット　リーファ','ひらひらパラソル　サチ','蒼き聖夜　ユージオ','天職の務め　ユージオ','猛烈な豪砲　エギル','キューティ・ブライド　アルゴ','窓に咲く　キリト','看板メイド　アスナ'];
var spearImages = ['青の追随　サチ','威風凛然　クライン','戦娘の黒槍　シリカ','スウィート・ハート　アスナ','晴朗ランサー　リーファ','奮励努力　サチ','桜華のランサー　ユウキ','フラッパー・スペア　リズベット','サマーショット　リーファ','黄昏時の渚　サチ','陽だまりの丘　アスナ','銃士の哀憐　サチ','小悪魔スマイル　ユウキ','巫女の日常　サチ','ラブリーパステル　アスナ','プリティーサンタ　シリカ','冬空の風　ユウキ','淡い恋心　サチ','蒼キ妖精　リーファ','エッグバニー　アスナ','輝く希望を胸に　サチ',
'キュートサンシャイン　ユウキ','お祭り気分　サチ','紺青の追随　サチ'];
var bowImages = ['悠然たる弓使い　シノン','スナイパー・アイ　シノン','孤高の弓　シノン','ワンダーハット　シノン','穿つ銃弾　キリト','キュートヴァンパイア　シノン','紅葉の弓巫女　シノン','大願成就　シノン','ふわふわスマイル　ユウキ','ホーリープレゼント　シノン','翠緑ノ月　サチ','心のカタチ　シノン','シャイラパン　シノン','サマースプラッシュ　シノン','アーチャー・ナイト　シノン','生きる為に　シノン'];
var shieldImages = ['金剛不壊　エギル','忠義の盾　キズメル'];


// kiss
  //weaopn-records ID
    var swordRecord = document.getElementById('sword-records');
    var rapierRecord = document.getElementById('rapier-records');
    var clubRecord = document.getElementById('club-records');
    var daggerRecord = document.getElementById('dagger-records');
    var axeRecord = document.getElementById('axe-records');
    var spearRecord = document.getElementById('spear-records');
    var bowRecord = document.getElementById('bow-records');
    var shieldRecord = document.getElementById('shield-records');
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

  // skill-name ID
    // var timeNameID = document.getElementById('time-name');

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
      swordRecord.classList.remove("remove");
      rapierRecord.classList.remove("remove");
      clubRecord.classList.remove("remove");
      daggerRecord.classList.remove("remove");
      axeRecord.classList.remove("remove");
      spearRecord.classList.remove("remove");
      bowRecord.classList.remove("remove");
      shieldRecord.classList.remove("remove");
    }
  // all-modal fadeOut
    function modalOut(){
      $('#all-modal').fadeOut(1000);
      allModal.classList.add("remove");
    }
  //属性別表示を解除
    function typeRemove(){
      swordRecord.classList.add("remove");
      rapierRecord.classList.add("remove");
      clubRecord.classList.add("remove");
      daggerRecord.classList.add("remove");
      axeRecord.classList.add("remove");
      spearRecord.classList.add("remove");
      bowRecord.classList.add("remove");
      shieldRecord.classList.add("remove");
    }








// スキレコ全部を表示
  // 時系列順
function time(){
  let time = ' ';
  let timeName =' ';
  for(let i=0;i<timeImages.length;i++){
    let timeImage = timeImages[i];
    time += `<div class='consolid'><img class='img${i}' src="images/skill/${timeImage}.png"/><p>${timeImage}</p></div>`;
  }
  timePic.innerHTML=time;
}
time();




// 属性別表示
function sword(){
  let sword = ' ';
  for(let i=0;i<swordImages.length;i++){
    let swordImage = swordImages[i];
    sword += `<div class='consolid consolid-weapon'><img src="images/skill/${swordImage}.png"/><p>${swordImage}</p></div>`;
  }
  swordPic.innerHTML=sword;
}

function rapier(){
  let rapier = ' ';
  for(let i=0;i<rapierImages.length;i++){
    let rapierImage = rapierImages[i];
    rapier += `<div class='consolid consolid-weapon'><img src="images/skill/${rapierImage}.png"/><p>${rapierImage}</p></div>`;
  }
  rapierPic.innerHTML=rapier;
}

function club(){
  let club = ' ';
  for(let i=0;i<clubImages.length;i++){
    let clubImage = clubImages[i];
    club += `<div class='consolid consolid-weapon'><img src="images/skill/${clubImage}.png"/><p>${clubImage}</p></div>`;
  }
  clubPic.innerHTML=club;
}
function dagger(){
  let dagger = ' ';
  for(let i=0;i<daggerImages.length;i++){
    let daggerImage = daggerImages[i];
    dagger += `<div class='consolid consolid-weapon'><img src="images/skill/${daggerImage}.png"/><p>${daggerImage}</p></div>`;
  }
  daggerPic.innerHTML=dagger;
}
function axe(){
  let axe = ' ';
  for(let i=0;i<axeImages.length;i++){
    let axeImage = axeImages[i];
     axe+= `<div class='consolid consolid-weapon'><img src="images/skill/${axeImage}.png"/><p>${axeImage}</p></div>`;
  }
  axePic.innerHTML=axe;
}

function spear(){
  let spear = ' ';
  for(let i=0;i<spearImages.length;i++){
    let spearImage = spearImages[i];
    spear += `<div class='consolid consolid-weapon'><img src="images/skill/${spearImage}.png"/><p>${spearImage}</p></div>`;
  }
  spearPic.innerHTML=spear;
}
function bow(){
  let bow = ' ';
  for(let i=0;i<bowImages.length;i++){
    let bowImage = bowImages[i];
    bow += `<div class='consolid consolid-weapon'><img src="images/skill/${bowImage}.png"/><p>${bowImage}</p></div>`;
  }
  bowPic.innerHTML=bow;
}
function shield(){
  let shield = ' ';
  for(let i=0;i<shieldImages.length;i++){
    let shieldImage = shieldImages[i];
    shield += `<div class='consolid consolid-weapon'><img src="images/skill/${shieldImage}.png"/><p>${shieldImage}</p></div>`;
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
  swordRecord.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  swordBtn.classList.toggle("btn-color");
  modalOut();
  //dateの非表示
  $('.date').fadeOut();
}

rapierBtn.onclick=function(){
  rapierRecord.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  rapierBtn.classList.toggle("btn-color");
  modalOut();
  //dateの非表示
  $('.date').fadeOut();
}

clubBtn.onclick=function(){
  clubRecord.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  clubBtn.classList.toggle("btn-color");
  modalOut();
  //dateの非表示
  $('.date').fadeOut();
}

daggerBtn.onclick=function(){
  daggerRecord.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  daggerBtn.classList.toggle("btn-color");
  modalOut();
  //dateの非表示
  $('.date').fadeOut();
}

axeBtn.onclick=function(){
  axeRecord.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  axeBtn.classList.toggle("btn-color");
  modalOut();
  //dateの非表示
  $('.date').fadeOut();
}

spearBtn.onclick=function(){
  spearRecord.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  spearBtn.classList.toggle("btn-color");
  allModal.classList.add("remove");
  modalOut();
  //dateの非表示
  $('.date').fadeOut();
}

bowBtn.onclick=function(){
  bowRecord.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  bowBtn.classList.toggle("btn-color");
  allModal.classList.add("remove");
  modalOut();
  //dateの非表示
  $('.date').fadeOut();
}

shieldBtn.onclick=function(){
  shieldRecord.classList.toggle("remove");
  timePic.classList.add("remove");
  allBtn.classList.remove("btn-color");
  shieldBtn.classList.toggle("btn-color");
  modalOut();
  //dateの非表示
  $('.date').fadeOut();
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
  let timeHasRemove = $("#time-images").hasClass('remove');
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

  //dateの非表示
  $('.date').fadeOut();
}


//date
$(window).on('scroll',function(){
  let date = $('.date');
  let date1 = $('.date1');
  let date2 = $('.date2');
  let date3 = $('.date3');
  let date4 = $('.date4');
  let date5 = $('.date5');
  let date6 = $('.date6');
  let date7 = $('.date7');
  let date8 = $('.date8');
  let date9 = $('.date9');
  let date10 = $('.date10');
  let date11 = $('.date11');
  let date12 = $('.date12');
  let date13 = $('.date13');
  let date14 = $('.date14');
  let date15 = $('.date15');
  let date16 = $('.date16');
  let date17 = $('.date17');
  let date18 = $('.date18');
  let date19 = $('.date19');
  let date20 = $('.date20');
  let date21 = $('.date21');
  let date22 = $('.date22');
  let date23 = $('.date23');
  let date24 = $('.date24');
  let date25 = $('.date25');
  let date26 = $('.date26');
  // let date27 = $('.date27');



  date.each(function(){
    // アンカーの指定
    let scrollPos = $(window).scrollTop();
    let img0 = $('.img0').offset().top;
    let anchor1 = $('.img10').offset().top;//2017,12
    let anchor2 = $('.img16').offset().top;//2018,1
    let anchor3 = $('.img26').offset().top;//,2
    let anchor4 = $('.img34').offset().top;//,3
    let anchor5 = $('.img42').offset().top;//,4
    let anchor6 = $('.img57').offset().top;//,5
    let anchor7 = $('.img68').offset().top;//,6
    let anchor8 = $('.img79').offset().top;//,7
    let anchor9 = $('.img97').offset().top;//,8
    let anchor10 = $('.img102').offset().top;//,9
    let anchor11 = $('.img118').offset().top;//,10
    let anchor12 = $('.img136').offset().top;//,11
    let anchor13 = $('.img153').offset().top;//,12
    let anchor14 = $('.img159').offset().top;//2019,1
    let anchor15 = $('.img174').offset().top;//,2
    let anchor16 = $('.img190').offset().top;//,3
    let anchor17 = $('.img205').offset().top;//,4
    let anchor18 = $('.img219').offset().top;//,5
    let anchor19 = $('.img229').offset().top;//,6
    let anchor20 = $('.img243').offset().top;//,7
    let anchor21 = $('.img257').offset().top;//,8
    let anchor22 = $('.img271').offset().top;//,9
    let anchor23 = $('.img287').offset().top;//,10
    let anchor24 = $('.img303').offset().top;//,11
    let anchor25 = $('.img327').offset().top;//,12
    let anchor26 = $('.img335').offset().top;//2020,1


    if(scrollPos < img0-180){
      date1.fadeOut();
      date1.addClass('remove');
      date2.addClass('remove');
      date3.addClass('remove');
    } else if(scrollPos>img0-180&&scrollPos<anchor1){
      date1.fadeIn(1500);
      date2.addClass('remove');
      date3.addClass('remove');
      date4.addClass('remove');
    } else if(scrollPos>anchor1&&scrollPos<anchor2){
      date1.addClass('remove');
      date2.removeClass('remove');
      date3.addClass('remove');
      date4.addClass('remove');
      date5.addClass('remove');
    }else if(scrollPos>anchor2&&scrollPos<anchor3){
      date2.addClass('remove');
      date3.removeClass('remove');
      date4.addClass('remove');
      date5.addClass('remove');
      date6.addClass('remove');
    }else if(scrollPos>anchor3&&scrollPos<anchor4){
      date3.addClass('remove');
      date4.removeClass('remove');
      date5.addClass('remove');
      date6.addClass('remove');
      date7.addClass('remove');
    }else if(scrollPos>anchor4&&scrollPos<anchor5){
      date4.addClass('remove');
      date5.removeClass('remove');
      date6.addClass('remove');
      date7.addClass('remove');
      date8.addClass('remove');
    }else if(scrollPos>anchor5&&scrollPos<anchor6){
      date5.addClass('remove');
      date6.removeClass('remove');
      date7.addClass('remove');
      date8.addClass('remove');
      date9.addClass('remove');
    }else if(scrollPos>anchor6&&scrollPos<anchor7){
      date6.addClass('remove');
      date7.removeClass('remove');
      date8.addClass('remove');
      date9.addClass('remove');
      date10.addClass('remove');
    }else if(scrollPos>anchor7&&scrollPos<anchor8){
      date7.addClass('remove');
      date8.removeClass('remove');
      date9.addClass('remove');
      date10.addClass('remove');
      date11.addClass('remove');
    }else if(scrollPos>anchor8&&scrollPos<anchor9){
      date8.addClass('remove');
      date9.removeClass('remove');
      date10.addClass('remove');
      date11.addClass('remove');
      date12.addClass('remove');
    }else if(scrollPos>anchor9&&scrollPos<anchor10){
      date9.addClass('remove');
      date10.removeClass('remove');
      date11.addClass('remove');
      date12.addClass('remove');
      date13.addClass('remove');
    }else if(scrollPos>anchor10&&scrollPos<anchor11){
      date10.addClass('remove');
      date11.removeClass('remove');
      date12.addClass('remove');
      date13.addClass('remove');
      date14.addClass('remove');
    }else if(scrollPos>anchor11&&scrollPos<anchor12){
      date11.addClass('remove');
      date12.removeClass('remove');
      date13.addClass('remove');
      date14.addClass('remove');
      date15.addClass('remove');
    }else if(scrollPos>anchor12&&scrollPos<anchor13){
      date12.addClass('remove');
      date13.removeClass('remove');
      date14.addClass('remove');
      date15.addClass('remove');
      date16.addClass('remove');
    }else if(scrollPos>anchor13&&scrollPos<anchor14){
      date13.addClass('remove');
      date14.removeClass('remove');
      date15.addClass('remove');
      date16.addClass('remove');
      date17.addClass('remove');
    }else if(scrollPos>anchor14&&scrollPos<anchor15){
      date14.addClass('remove');
      date15.removeClass('remove');
      date16.addClass('remove');
      date17.addClass('remove');
      date18.addClass('remove');
    }else if(scrollPos>anchor15&&scrollPos<anchor16){
      date15.addClass('remove');
      date16.removeClass('remove');
      date17.addClass('remove');
      date18.addClass('remove');
      date19.addClass('remove');
    }else if(scrollPos>anchor16&&scrollPos<anchor17){
      date16.addClass('remove');
      date17.removeClass('remove');
      date18.addClass('remove');
      date19.addClass('remove');
      date20.addClass('remove');
    }else if(scrollPos>anchor17&&scrollPos<anchor18){
      date17.addClass('remove');
      date18.removeClass('remove');
      date19.addClass('remove');
      date20.addClass('remove');
      date21.addClass('remove');
    }else if(scrollPos>anchor18&&scrollPos<anchor19){
      date18.addClass('remove');
      date19.removeClass('remove');
      date20.addClass('remove');
      date21.addClass('remove');
      date22.addClass('remove');
    }else if(scrollPos>anchor19&&scrollPos<anchor20){
      date19.addClass('remove');
      date20.removeClass('remove');
      date21.addClass('remove');
      date22.addClass('remove');
      date23.addClass('remove');
    }else if(scrollPos>anchor20&&scrollPos<anchor21){
      date20.addClass('remove');
      date21.removeClass('remove');
      date22.addClass('remove');
      date23.addClass('remove');
      date24.addClass('remove');
    }else if(scrollPos>anchor21&&scrollPos<anchor22){
      date21.addClass('remove');
      date22.removeClass('remove');
      date23.addClass('remove');
      date24.addClass('remove');
      date25.addClass('remove');
    }else if(scrollPos>anchor22&&scrollPos<anchor23){
      date22.addClass('remove');
      date23.removeClass('remove');
      date24.addClass('remove');
      date25.addClass('remove');
      date26.addClass('remove');
    }else if(scrollPos>anchor23&&scrollPos<anchor24){
      date23.addClass('remove');
      date24.removeClass('remove');
      date25.addClass('remove');
      date26.addClass('remove');
      date27.addClass('remove');
    }else if(scrollPos>anchor24&&scrollPos<anchor25){
      date24.addClass('remove');
      date25.removeClass('remove');
      date26.addClass('remove');
      date27.addClass('remove');
      date28.addClass('remove');
    }else if(scrollPos>anchor25&&scrollPos<anchor26){
      date25.addClass('remove');
      date26.removeClass('remove');
      // date27.addClass('remove');
    }
  });
});


//kurukuru
