async function ApiGetFile(url) {
  const resp = await fetch(url);
  return resp.ok
    ? await resp.text()
    : Promise.reject(new Error('resp.status'));
}

export default ApiGetFile;
