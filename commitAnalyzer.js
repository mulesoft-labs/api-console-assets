const commitAnalyzer = require('@semantic-release/commit-analyzer')

module.exports = function (pluginConfig, config, cb) {
  commitAnalyzer(pluginConfig, config, (err, releaseType) => {
    // fallback to patch to allow builds with no commits that just updates the published dependencies
    cb(err, releaseType || 'patch')
  })
}
