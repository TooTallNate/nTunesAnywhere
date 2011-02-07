/**
 * request.js
 * ----------
 * A very simple CommonJS XMLHttpRequest wrapper. Meant to have a similar
 * API to the node.js `http.request()` method.
 *
 * To use, invoke this code in the web page's global scope:
 *
 *     exports.XMLHttpRequest = XMLHttpRequest;
 */

// Get a reference in our module scope...
XMLHttpRequest = module.main.exports.XMLHttpRequest;

// The 'request' function is directly exported through `module.exports`
module.exports = function request(method, url, headers, callback) {
  method = String(method).toUpperCase();
  if (typeof(headers) == 'function') {
    callback = headers;
    headers = {};
  }

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    //Ready State will be 4 when the document is loaded.
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        // Successful response
        callback.call(xhr, null, xhr.responseText);
      } else {
        // Failure response
        callback.call(xhr, new Error(xhr.status));
      }
    }
  }
  xhr.onerror = function(e) {
    callback.call(xhr, e);
  }
  xhr.open(method, url, true);
  xhr.send(null);

}
