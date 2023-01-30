const videoid = ["sm37910958","sm38620406","sm38937833","sm39126100","sm39469505","sm39759354","sm39911812","sm40238726","sm40347559","sm40515900","sm40823885","sm41190526","sm41410666","sm41720763"];
//下の配列は使わないけどなんとなく作ってある。
const videotitle = ["【ネタ曲】チーズ牛丼には罪はない feat. AIきりたん / Adeliae","ディスコネクト feat. IA / Adeliae","ユモレスク feat. IA / Adeliae","ユメにサヨナラを feat. 歌愛ユキ / Adeliae","ハンパナプラス feat. IA / Adeliae","人生なんて feat. AIきりたん / Adeliae","不時着 feat. 可不 / Adeliae","シビレキラシテ (short ver.) / 可不","アンコール feat. 可不 / Adeliae","「Blink」feat. 初音ミク / Adeliae","シンフォニア feat. 初音ミク / Adeliae","スペクトラム・ケプストラム feat. 星界 / Adeliae","ハルシネイション・シザーハンズ feat. IA / Adeliae","エターナルアリア feat. 初音ミク / Adeliae"];
//<script type="application/javascript" src="https://embed.nicovideo.jp/watch/[id]/script?w=640&h=360"></script><noscript><a href="https://www.nicovideo.jp/watch/[id]">[title]</a></noscript>
let numbers = [];
let shuffled_numbers = [];
let ind = 0;
let i = 0;
let j = 0;
const video0 = document.getElementById("video0");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");
const video5 = document.getElementById("video5");
const video6 = document.getElementById("video6");
const video7 = document.getElementById("video7");
const video8 = document.getElementById("video8");
const video9 = document.getElementById("video9");
const videos = [video0,video1,video2,video3,video4,video5,video6,video7,video8,video9];
//フィッシャーイェーツのアルゴリズムでシャッフルする関数
const shuffleArray = (array) => {
	for (i = array.length -1 ; i > 0 ; i--){
		j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};

//ホントはform要素のonsubmitで関数呼び出したかったんですが、return falseいれてもリロードされちゃったのでまるごとjsで実装しました。このあたり今まで何度も奮闘してるなぁ
document.getElementById("form").onkeydown = (e)=>{
	if(e.key == 'Enter'){
        enter()
    };
};
    
function enter(){
    //変数の初期化
	numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
    ind = 0;
	i = 0;
	shuffled_numbers = [];
	//ランダムに10個選出
	shuffleArray(numbers);
		//test
		//console.log(numbers);
	shuffled_numbers = numbers.slice(0,10);

    //動画を表示
    while(ind < 10){
			videos[ind].setAttribute("src","https://embed.nicovideo.jp/watch/" + videoid[shuffled_numbers[ind]] + "/script?w=640&h=360");
			ind ++;
	};
}
