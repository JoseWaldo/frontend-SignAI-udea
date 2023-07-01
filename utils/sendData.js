const sendData = async (data, url) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
};

export default sendData;
