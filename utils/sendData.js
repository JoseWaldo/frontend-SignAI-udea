const sendData = async (data, url) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const json = await response.json();
    if (!response.ok) throw new Error(json.detail);
    return { ok: true, message: json.message };
  } catch (err) {
    return { ok: false, message: err.message };
  }
};

export default sendData;
