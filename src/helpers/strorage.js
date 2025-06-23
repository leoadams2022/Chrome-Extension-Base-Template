/**
 * Retrieves a value from chrome storage.
 * @param {string} key The key to retrieve from storage.
 * @returns {Promise<any>} A promise that resolves with the value from storage
 *    or rejects with an error if one occurs.
 */
export function getFromStorage(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(key, (result) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(result[key]);
      }
    });
  });
}

/**
 * Stores a key-value pair in chrome local storage.
 * @param {Object} keyValueObj An object containing key-value pairs to store.
 * @returns {Promise<boolean>} A promise that resolves to true when the data is successfully stored,
 *    or rejects with an error if one occurs.
 */
export function setToStorage(keyValueObj) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(keyValueObj, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(true);
      }
    });
  });
}

/**
 * Removes a key-value pair from chrome local storage.
 * @param {string} key The key to remove.
 * @returns {Promise<boolean>} A promise that resolves to true when the data is successfully removed,
 *    or rejects with an error if one occurs.
 */
export function removeFromStorage(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.remove(key, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(true);
      }
    });
  });
}
