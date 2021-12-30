// https://github.com/trending/developers/javascript?since=monthly
import * as cheerio from "cheerio";
import fetch_ from "node-fetch";

let fetch = fetch_;

export default function getDevelopers(FETCH_URL) {
  return new Promise((resolve, reject) => {
    fetch(FETCH_URL)
      .then((res) => res.text())
      .then((body) => {
        const $ = cheerio.load(body);
        const box = $(".Box article.Box-row");

        let result = box.get().map((el) => {
          const name = $(el).find(".h3>a").text().trim();
          const username = $(el).find(".f4>a").text().trim();
          const avatar = $(el).find(".mx-3 img").attr("src");

          const reponame = $(el)
            .find("article .h4.lh-condensed>a")
            ?.text()
            ?.trim();
          const repoUrl = $(el)
            .find("article .h4.lh-condensed>a")
            ?.attr("href")
            ?.trim();
          const description = $(el)
            .find("article .f6.color-fg-muted.mt-1")
            ?.text()
            ?.trim();

          const repo = reponame
            ? {
                name: reponame,
                description: description,
                url: repoUrl,
              }
            : undefined;

          return {
            name,
            username,
            avatar,
            url: "https://github.com/" + username,
            repository: repo,
          };
        });

        resolve(result);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
