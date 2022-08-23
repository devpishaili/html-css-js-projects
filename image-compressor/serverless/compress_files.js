const imagemin = require("imagemin"),
  imageminJpegRecompress = require("imagemin-jpeg-recompress"),
  imageminPngquant = require("imagemin-pngquant");

exports.handler = async (event, context) => {
  const params = JSON.parse(event.body),
    { base64String, name, extension } = params,
    base64Image = base64String.split(";base64").pop(),
    filename = `${name}.${extension}`;

  try {
    const result = Buffer.from(base64Image, "base64"),
      newImgBuffer = await imagemin.buffer(result, {
        destination: "serverless/compress_files",
        plugins: [
          imageminJpegRecompress({
            min: 20,
            max: 60,
          }),
          imageminPngquant({
            quality: [0.2, 0.6],
          }),
        ],
      }),
      fileSize = newImgBuffer.length, // Set file size
      base64CompString = newImgBuffer.toString("base64"),
      imageDataObj = { base64CompString, filename, fileSize };

    return {
      statusCode: 200,
      body: JSON.stringify(imageDataObj),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "File Error" }),
    };
  }
};
