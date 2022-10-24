const videoid = ["sm37910958","sm38620406","sm38937833","sm39126100","sm39469505","sm39759354","sm39911812","sm40238726","sm40347559","sm40515900","sm40823885","sm41190526"];
const videotitle = ["【ネタ曲】チーズ牛丼には罪はない feat. AIきりたん / Adeliae","ディスコネクト feat. IA / Adeliae","ユモレスク feat. IA / Adeliae","ユメにサヨナラを feat. 歌愛ユキ / Adeliae","ハンパナプラス feat. IA / Adeliae","人生なんて feat. AIきりたん / Adeliae","不時着 feat. 可不 / Adeliae","シビレキラシテ (short ver.) / 可不","アンコール feat. 可不 / Adeliae","「Blink」feat. 初音ミク / Adeliae","シンフォニア feat. 初音ミク / Adeliae","スペクトラム・ケプストラム feat. 星界 / Adeliae"];
//<script type="application/javascript" src="https://embed.nicovideo.jp/watch/[id]/script?w=640&h=360"></script><noscript><a href="https://www.nicovideo.jp/watch/[id]">[title]</a></noscript>

function enter(){
    //表示する動画を0~11の番号で10個リストアップ
    var num_tmp;
    var result;
    var videonum = [];
    while (videonum.length < 10){
        num_tmp = Math.floor(Math.random() * 12);
        
        result = videonum.some((value) => {
            return value === num_tmp;
        });
        
        if (result == false){
            videonum.push(num_tmp);
        };
        
        console.log(videonum); //動作確認
    };
};