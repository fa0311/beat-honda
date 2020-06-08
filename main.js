setTimeout(main, 500);
function main() {
    setTimeout(main, 100);
    var i = 0;
    $(".css-901oao.r-hkyrab.r-gwet1z.r-1blvdjr.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0 > span.css-901oao.css-16my406.r-gwet1z.r-ad9z0x.r-bcqeeo.r-qvutc0").each(function () {
        var tweet = $(".css-901oao.r-hkyrab.r-gwet1z.r-1blvdjr.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0 > span.css-901oao.css-16my406.r-gwet1z.r-ad9z0x.r-bcqeeo.r-qvutc0").eq(i).text();

        if (tweet.replace(/\r?\n/g, '') == "残念、本田圭佑の勝利！勝負は1日1回！明日も勝負を挑みましょう！") {
            $(".css-901oao.r-hkyrab.r-gwet1z.r-1blvdjr.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0").eq(i).empty();
            $(".css-901oao.r-hkyrab.r-gwet1z.r-1blvdjr.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0").prepend('<div lang="ja" dir="auto" class="css-901oao r-hkyrab r-gwet1z r-1blvdjr r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0"><span class="css-901oao css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0">お見事！あなたの勝利！<br/>負けた本田圭佑からコメントが届いています！<br/><br/></span><div class="css-1dbjc4n r-xoduu5"><span class="r-18u37iz"><a href="/pepsi_jpn" dir="ltr" role="link" data-focusable="true" class="css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1n1174f r-1loqt21 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">@pepsi_jpn</a></span></div><span class="css-901oao css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0"> のDMから<br/>ファミリーマート無料引換クーポンをゲットしよう！</span></div>');
        }
        i++;
    })
}