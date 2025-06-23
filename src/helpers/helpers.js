import { utils, writeFile } from "xlsx";

/**
 * Converts JSON data to an Excel file and saves it to the user's machine.
 *
 * @param {object[]} jsonData - The JSON data to be converted to an Excel file.
 * @param {string} [fileName="data.xlsx"] - The name for the saved file.
 * @param {string} [sheetName="Sheet1"] - The name for the worksheet in the Excel file.
 */
export function jsonToExcel(
  jsonData,
  fileName = "data.xlsx",
  sheetName = "Sheet1"
) {
  const wb = utils.book_new(); // Create a new workbook
  const ws = utils.json_to_sheet(jsonData); // Convert JSON data to a worksheet
  utils.book_append_sheet(wb, ws, sheetName); // Append the worksheet to the workbook

  writeFile(wb, fileName); // Save the file as XLSX
}

/**
 * Sets a cookie in the browser with the specified name, value, and expiration days.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value to be stored in the cookie.
 * @param {number} [days] - Optional. The number of days until the cookie expires.
 *                           If not provided, the cookie will be a session cookie and expires when the browser is closed.
 */
export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

/**
 * Gets a cookie from the browser by name.
 *
 * @param {string} name - The name of the cookie to retrieve.
 * @return {?string} The value of the cookie, or null if it does not exist.
 */
export function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
}

/**
 * Deletes a cookie from the browser by name by setting its expiration date to a time in the past.
 *
 * @param {string} name - The name of the cookie to delete.
 */
export function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
// ? ******************************

/**
 * Returns the fully-qualified URL for a given image path within the extension.
 *
 * @param {string} src - The relative path to the image within the extension.
 * @returns {string} The fully-qualified URL of the image resource.
 * @throws {Error} If the provided src is not a valid string.
 */
export function imgSrc(src) {
  if (!src || typeof src !== "string") {
    throw new Error("imgSrc got an Invalid image URL: " + src);
  }
  return chrome.runtime.getURL(src);
}
