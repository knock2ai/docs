// Knock2 visitor identification script.
// Mintlify automatically includes every .js file in the content directory on
// all documentation pages, so this loads the tracker globally.
// The guard prevents duplicate injection if this file is re-executed during
// client-side navigation or hydration.
(function () {
  var src = 'https://api.knock2.ai/install/7shifts_com';
  if (document.querySelector('script[src="' + src + '"]')) {
    return;
  }
  var script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
})();
