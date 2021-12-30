// https://github.com/trending/javascript?since=weekly&spoken_language_code=zh
import * as cheerio from "cheerio";
import fetch from "node-fetch";

export default function getRepos(FETCH_URL) {
  return new Promise((resolve, reject) => {
    fetch(FETCH_URL)
      .then((res) => res.text())
      .then((body) => {
        const $ = cheerio.load(body);
        const box = $(".Box article.Box-row");

        let result = box.get().map((el) => {
          let repodesc = $(el).find("p.col-9").text().trim();

          const [author, reponame] = $(el)
            .find(".h3>a")
            .text()
            .split("/")
            .map((v) => v.trim());

          const repourl = $(el).find(".h3>a").attr("href");

          const language = $(el).find("[itemprop=programmingLanguage]").text();
          const color = $(el).find(".repo-language-color").attr("style");
          const langcolor = color
            ? color.replace("background-color: ", "")
            : "";

          let builtby = $(el)
            .find('span:contains("Built by")>a')
            .map((i, user) => {
              const username = $(user).children("img").attr("alt").slice(1);
              const avatar = $(user).children("img").attr("src");
              return {
                username,
                url: "https://github.com/" + username,
                avatar,
              };
            })
            .get();

          let [stars, forks, laststars] = $(el)
            .find(".d-inline-block")
            .text()
            .replace(/\,/g, "")
            .match(/(\d+\.|\d+)+/g);

          return {
            author,
            name: reponame,
            description: repodesc,
            url: "https://github.com/" + repourl,
            language,
            langcolor,
            stars: +stars,
            forks: +forks,
            laststars: +laststars,
            builtby,
          };
        });

        resolve(result);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
