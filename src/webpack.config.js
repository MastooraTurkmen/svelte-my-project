module.exports = {
  "output": {
    "filename": "[name].pack.js"
  },
  "entry": {
    "index": "./index"
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      },
      {
        "use": {
          "loader": "svelte-loader"
        },
        "exclude": /node_modules/,
        "test": /\.svelte$/
      }
    ]
  },
  "resolve": {
    "alias": {
      "svelte": "./node_modules/svelte"
    },
    "extensions": [
      ".mjs",
      ".svelte",
      ".js"
    ]
  }
};