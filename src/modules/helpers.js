export const refreshPage = () => {
  window.parent.location = window.parent.location.href;
}

export const getQueryParameter = (key, searchString) => {
  if (!searchString && window && window.location.search) {
    searchString = window.location.search;
  }

  if (searchString) {
    const params = new URLSearchParams(searchString)
    return params.get(key);
  }
}