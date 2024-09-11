// wrap-ansi-wrapper.js
async function wrapAnsi(...args) {
  const { default: wrapAnsi } = await import('wrap-ansi');
  return wrapAnsi(...args);
}

module.exports = wrapAnsi;

/*
Made for the error below
from https://dev.to/raphael_haecker/nestjs-and-typeorm-database-configuration-15ob

Error [ERR_REQUIRE_ESM]: require() of ES Module D:\code\nest-sql-typeorm\node_modules\string-width\index.js from D:\code\nest-sql-typeorm\node_modules\wrap-ansi\in dex.js not supported. Instead change the require of D:\code\nest-sql-typeorm\node_modules\string-width\index.js in D:\code\nest-sql-typeorm\node_modules\wrap-ansi\index.js to a dynamic import() which is available in all CommonJS modules. at Object.<anonymous> (D:\code\nest-sql-typeorm\node_modules\wrap-ansi\index.js:2:21) { code: 'ERR_REQUIRE_ESM' }
*/
