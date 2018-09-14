function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 404 || response.status === 400) {
    return Promise.reject({ code: response.status });
  }
  return response.json().then(err => Promise.reject(err));
}

function getUrl(endpoint) {
  const baseUrl = 'https://icanhazdadjoke.com';
  return `${baseUrl}${endpoint}`;
}

export default function callAPI({ endPoint, options = {} }) {
  const defaultOptions = {
    method: 'GET',
    headers: {
      Accept: 'text/plain',
      //   'content-type': 'application/json',
    },
  };
  const mergedOptions = { ...defaultOptions, ...options };
  return fetch(getUrl(endPoint), mergedOptions)
    .then(res => checkStatus(res))
    .then(res => res.text())
    .catch(err => Promise.reject(err));
}
