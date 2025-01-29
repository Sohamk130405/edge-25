export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

export const getUrlFromText = (text) => {
  if (isValidUrl(text)) return text;
  try {
    if (text.includes(".") && !text.includes(" ")) {
      return new URL(`https://${text}`).toString();
    }
  } catch (_) {
    return "";
  }
  return "";
};

export const getSearchParams = (url) => {
  let params = {};

  new URL(url).searchParams.forEach(function (val, key) {
    params[key] = val;
  });

  return params;
};
