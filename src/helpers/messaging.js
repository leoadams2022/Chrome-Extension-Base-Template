/**
 * Sends a message to the content script in the active tab, or to all
 * content scripts if tabId is null.
 * @param {Object} msgObj The object to be sent as the message.
 * @param {Number} [tabId] The ID of the tab to send the message to.
 *                         If null, the message is sent to all content scripts.
 * @returns {Promise} A promise that is resolved with the response from the
 *                   content script, or rejected with a chrome.runtime.LastError
 *                   if the message could not be sent.
 */
export function sendMessage(msgObj, tabId = null) {
  if (!msgObj || typeof msgObj !== "object") {
    throw new Error(
      "sendMessage got an invalid message object: " + JSON.stringify(msgObj)
    );
  }
  if (tabId !== null && typeof tabId !== "number") {
    throw new Error("sendMessage got an invalid tabId: " + tabId);
  }
  return new Promise((resolve, reject) => {
    const callback = (response) => {
      if (chrome.runtime.lastError) {
        // console.error('sendMessage error:', chrome.runtime.lastError.message)
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    };

    if (tabId === null) {
      chrome.runtime.sendMessage(msgObj, callback);
    } else {
      chrome.tabs.sendMessage(tabId, msgObj, callback);
    }
  });
}

/**
 * Adds a listener to the chrome.runtime.onMessage event.
 * @param {Function} callback A function that will be called with the
 *                            message object when a message is received.
 * @returns {Number} The listener ID that can be used with
 *                  removeMessageListener to remove the listener.
 */
export function addMessageListener(callback) {
  return chrome.runtime.onMessage.addListener(callback);
}

/**
 * Removes a listener from the chrome.runtime.onMessage event.
 * @param {Number} listenerId The listener ID returned by addMessageListener.
 * @returns {Boolean} True if the listener was removed, false if the listener
 *                    was not found.
 */
export function removeMessageListener(listenerId) {
  return chrome.runtime.onMessage.removeListener(listenerId);
}
