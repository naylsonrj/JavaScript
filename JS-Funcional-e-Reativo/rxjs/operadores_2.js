const { XMLHttpRequest } = require("xmlhttprequest");
const { ajax } = require("rxjs/ajax");
const { interval, from } = require("rxjs");
const { map, concatAll } = require("rxjs/operators");

// interval(1000)
//   .pipe(
//     map((_) => [1, 2, 3, 4]),
//     concatAll()
//   )
//   .subscribe(console.log);
ajax({
  createXHR: () => new XMLHttpRequest(),
  url: "https://api.github.com/users/naylsonrj/repos",
})
  .pipe(
    map((resp) => JSON.parse(resp.xhr.responseText)),
    concatAll(),
    map((repo) => repo.full_name)
  )
  .subscribe(console.log);
