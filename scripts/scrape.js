var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {

    request("https://www.nytimes.com", function (err, res, body) {

        console.log("body is " + body);
        var $ = cheerio.load(body);
        console.log("$ is " + $);
        var articles = [];
        
        $(".css-6p6lnl").each(function (i, element) {
            var a_elem =  $(this).find("a")[0];
            var uri = $(a_elem).attr("href");
            var span_elem = $(this).find("span")[0];
            var headline = $(span_elem).text();
            var ul_elem = $(this).find("ul")[0];
            var summary =  $(ul_elem).html();

            var url = "https://www.nytimes.com" + uri;
            var dataToAdd = {
                headline: headline,
                summary: summary,
                url: url
            };
            articles.push(dataToAdd);
        });

       /* $(".css-1qwxefa").each(function (i, element) {
            var head = $(this).children(".story-heading").text().trim();
            var sum = $(this).children(".summary").text().trim();
            head_elem = $(this).children("span")
            head = head_elem.text().trim();
            url_elem = $(this).next().next().next();
            console.log("head is " + head);
            console.log(url_elem);
            sum = "Summary";
            console.log(head + " and " + sum);
            if (head && sum) {
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat

                };
                articles.push(dataToAdd);
            }



        });
        */
        cb(articles);


    });
};

module.exports = scrape;