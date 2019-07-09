export default async (key) => {
  try {
    let data = await fetch(window.apiURL + 'auth', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ apiSecKey: key })
    })

    return await data.json()
  } catch (error) {
    return error
  }
}
