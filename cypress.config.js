const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 200000
  },
})
