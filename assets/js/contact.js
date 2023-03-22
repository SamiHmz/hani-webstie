const contactForm = document.getElementById("contact-form");
var messageSuccsess = document.getElementById("message-success");
var messageError = document.getElementById("message-error");
//POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  messageSuccsess.hidden = true;
  messageError.hidden = true;

  try {
    await postData("https://samihamaizi.herokuapp.com/message", {
      name: event.srcElement.elements[0].value,
      email: event.srcElement.elements[1].value,
      subject: event.srcElement.elements[2].value,
      message: event.srcElement.elements[3].value,
    });
    event.srcElement.elements[0].value = "";
    event.srcElement.elements[1].value = "";
    event.srcElement.elements[2].value = "";
    event.srcElement.elements[3].value = "";
    messageSuccsess.hidden = false;
  } catch (error) {
    messageError.hidden = false;
  }
});
