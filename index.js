module.exports.polymerPolyfillScript = function(basePath) {
  return `
    <script>
      window.Polymer = {
        dom: 'shadow'
      };

      (function() {
        'use strict';
        var onload = function() {
          // For native Imports, manually fire WebComponentsReady so user code
          // can use the same code path for native and polyfill'd imports.
          if (!window.HTMLImports) {
            document.dispatchEvent(new CustomEvent('WebComponentsReady', {bubbles: true}));
          }
        };
        var webComponentsSupported = (
          'registerElement' in document &&
          'import' in document.createElement('link') &&
          'content' in document.createElement('template')
        );
        if (!webComponentsSupported) {
          var script = document.createElement('script');
          script.async = true;
          script.src = '${basePath}/webcomponentsjs/webcomponents-lite.min.js';
          script.onload = onload;
          document.head.appendChild(script);
        } else {
          document.addEventListener('DOMContentLoaded', function() {
            onload();
          });
        }
      })();
    </script>
  `;
}

module.exports.imports = function(basePath) {
  return `
    <link rel="import" href="${basePath}/raml-path-selector/raml-path-selector.html">
    <link rel="import" href="${basePath}/raml-js-parser/raml-js-parser.html">
    <link rel="import" href="${basePath}/raml-json-enhance/raml-json-enhance.html">
    <link rel="import" href="${basePath}/raml-documentation-panel/raml-documentation-panel.html">
    <link rel="import" href="${basePath}/raml-request-panel/raml-request-panel.html">
    <link rel="import" href="${basePath}/response-view/response-view.html">
    <link rel="import" href="${basePath}/anypoint-styles/colors.html">
    <link rel="import" href="${basePath}/anypoint-styles/typography.html">
    <link rel="import" href="${basePath}/anypoint-styles/dropdown-menu.html">
    <link rel="import" href="${basePath}/iron-flex-layout/iron-flex-layout-classes.html">
    <link rel="import" href="${basePath}/raml-aware/raml-aware.html">
    <link rel="import" href="${basePath}/paper-toast/paper-toast.html">
    <link rel="import" href="${basePath}/web-unzip/web-unzip.html">
    <link rel="import" href="${basePath}/raml-main-entry-lookup/raml-main-entry-lookup.html">
  `;
}
