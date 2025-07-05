document.addEventListener("DOMContentLoaded", () => {
  let inputUrl = document.querySelector("#input-url");
  let img = document.querySelector("#thumbnail");


  function getVideoId(urlString) {
    const url = new URL(urlString);
    console.log(url);
    if (!url) return;

    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v");
    }
  }

  function inputHandler() {
    const url = inputUrl.value;
    console.log(url);
    if (!url) return;
    let videoId = getVideoId(url);
    img.src = `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  }

  inputUrl.addEventListener("input", inputHandler);

  let btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    let a = document.createElement("a");
    a.href = img.src;
    a.targrt = "_blank";
    a.download = "thumbnails.jpg";
    a.click();
    a.remove();
  });
});

