export const uploadFile = (file, fileID) => {
    const reader = new FileReader();

    reader.addEventListener("loadend", async (e) => {
      const filename = file.name,
        base64String = e.target.result,
        extension = filename.split(".").pop(),
        name = filename.slice(0, filename.length - (extension.length + 1)),
        body = { base64String, name, extension },
        url = "./.netlify/functions/compress_files";

      try {
        const fileStream = await fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
          isBase64Encoded: true,
        });
        imgJSON = await fileStream.json();
        if (imgJSON.error) return handleFileError(filename, fileID);
      } catch (error) {
        console.log(error);
      }
    });

    reader.readAsDataURL(file);
  },
  //   HANDLE FILE ERROR
  handleFileError = (filename, fileID) => {
    const progress = document.querySelector(`#progress_${filename}_${fileID}`);
    progress.value = 10;
    progress.classList.add("error");
  };
