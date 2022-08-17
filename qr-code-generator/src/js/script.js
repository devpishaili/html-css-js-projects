const form = document.querySelector("#generate-form"),
  qr = document.querySelector("#qrcode");

function scrollToBottom() {
  scrollInterval;
  stopScroll;

  var scrollInterval = setInterval(function () {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  }, 50);

  var stopScroll = setInterval(function () {
    clearInterval(scrollInterval);
  }, 100);
}

const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.querySelector("#url").value,
    size = document.querySelector("#size").value;

  let domain = new URL(url);

  if (url === "") {
    alert("please enter a URL");
    hideSpinner();
  } else if (!domain.hostname.includes("heartszibah")) {
    alert("URL is not from the registered domain");
    hideSpinner();
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();

      generateQRCode(url, size);

      setTimeout(() => {
        const saveUrl = qr.querySelector("img").src;
        createSaveBtn(saveUrl);
      }, 50);
    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
  scrollToBottom();
};

const showSpinner = () => {
  document.querySelector("#spinner").style.display = "block";
};

const hideSpinner = () => {
  document.querySelector("#spinner").style.display = "none";
};

const clearUI = () => {
  qr.innerHTML = "";
  const saveLink = document.querySelector("#save-link");

  if (saveLink) saveLink.remove();
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList =
    "flex justify-center bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded w-1/3 m-auto my-5";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save QR Image";
  document.getElementById("generated").appendChild(link);
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
