export default async (magnet, type) => {
  try {
    let data = await fetch(window.apiURL + 'startDownload', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ magnet, type, apiSecKey: window.apiSecKey })
    })

    return await data.json()
  } catch (error) {
    return error
  }
}
