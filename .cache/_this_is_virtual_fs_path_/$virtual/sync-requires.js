
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/jackson/Workspaces/JS/yandhi.github.io/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/jackson/Workspaces/JS/yandhi.github.io/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jackson/Workspaces/JS/yandhi.github.io/src/pages/index.js")),
  "component---src-pages-langs-js": preferDefault(require("/Users/jackson/Workspaces/JS/yandhi.github.io/src/pages/langs.js"))
}

