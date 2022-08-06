export const sendRequest = (data, URL) => {
  return fetch(URL, {
    method: "POST",
    body: data && JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`);
      }
      return response.json();
    })
};

export const handleLoginRegister = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: data && JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}