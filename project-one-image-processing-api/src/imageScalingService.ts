const sharp = require("sharp");
const fs = require("fs")

export function scaleImage(imageName: string, width: number, height: number) {
  const resizedImagePath: string = `assets/thumb/${imageName}_${width}_${height}.jpg`;

  sharp(`assets/full/${imageName}.jpg`)
    .resize(width, height)
    .toFile(resizedImagePath, (err: Error, info: string) => {
      console.log(err);
      console.log(info);
    }).options({progressive: true});

  return resizedImagePath;
}

