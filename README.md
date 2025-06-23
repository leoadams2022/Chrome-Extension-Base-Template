# Chrome Extension Base Template

This is a base template for creating Chrome extensions with essential features like background scripts, content scripts, and popup functionalities. This template serves as a starting point for building Chrome extensions and can be customized as needed.

## Features

- **Service Worker Background Script**: A service worker script that runs in the background of the extension.
- **Content Scripts**: Content scripts are injected into web pages that match specified URLs, allowing the extension to interact with the pages.
- **Popup**: A default popup is provided for the extension icon, which can be customized.
- **Options Page**: A settings/options page for the user to configure the extension.
- **Permissions**: Requests permissions for identity, storage, tabs, activeTab, scripting, and offscreen.

## Setup

### Prerequisites

Make sure you have `Node.js` and `npm` installed on your machine. If not, you can download and install them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/leoadams2022/chrome-extension-base-template.git
   cd chrome-extension-base-template
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server and watch for changes:

```bash
npm run dev
```

### Build

To build the production version of the extension:

```bash
npm run build
```

This will create a `dist/` folder with the compiled extension files.

### Permissions

This extension requires the following permissions:

- `identity`: Used to authenticate users via OAuth2.
- `storage`: Used to store settings and preferences locally.
- `tabs`: Allows the extension to interact with browser tabs.
- `activeTab`: Grants the extension temporary access to the active tab.
- `scripting`: Enables the execution of JavaScript code within web pages.
- `offscreen`: Allows the extension to run in the background when no visible pages are open.

### Files Structure

- `manifest.json`: The manifest file containing metadata and configuration for the extension.
- `background.js`: The background service worker script.
- `content.js`: The content script injected into web pages.
- `content.css`: The CSS styles for the content script.
- `popup.html`: The HTML for the popup displayed when the extension icon is clicked.
- `options.html`: The options page where the user can configure settings.
- `images/`: Folder containing extension icons and images.

### Web Accessible Resources

The extension includes web accessible resources (such as images) that can be accessed from any website:

```json
"web_accessible_resources": [
  {
    "resources": ["images/*"],
    "matches": ["<all_urls>"]
  }
]
```

### Development Tools

- **Webpack**: Used for bundling and transpiling JavaScript and CSS files.
- **Babel**: Ensures compatibility across different browsers.
- **PostCSS**: Used for processing CSS with autoprefixer and minification.
- **MiniCssExtractPlugin**: Extracts CSS into separate files.
- **CopyPlugin**: Copies assets and HTML files into the `dist/` directory.
- **WebpackObfuscator**: Used in production to obfuscate JavaScript code for protection.

### How to Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the `dist/` directory.
4. Your extension should now be loaded and you can test it.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to contribute, report issues, or open pull requests to improve this template!
