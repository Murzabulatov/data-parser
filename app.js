const needle = require('needle');
const cheerio = require('cheerio');
const async = require('async');

const aUrl = [];

aUrl[0] = 'https://www.mvideo.ru/products/smart-chasy-honor-watch-gs-pro-black-kan-b19-30052782';
aUrl[1] = 'https://www.mvideo.ru/products/naushniki-true-wireless-huawei-freebuds-pro-ugolnyi-chernyi-50141256';
aUrl[2] = 'https://www.mvideo.ru/products/smartfon-huawei-p40-lite-midnight-black-jny-lx1-30048480';

const q = async (url) => {
  needle.get(url, (err, data) => {
    if (err) throw err;
    const $ = cheerio.load(data.body)
    console.log($(".fl-h1").text())
    const img = $(".c-carousel__img")

    img.each((i, val) => {
      console.log($(val).attr('data-lazy').replace(/\/\//g, 'https://').replace(/\/small_pic\/65/g, ''));
    })
  })
}

for (i = 0; i < aUrl.length; i++) {
  q(aUrl[i])
}

