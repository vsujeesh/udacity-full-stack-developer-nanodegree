const sharp = require("sharp");
const fs = require("fs")

export function imageScaler(imageName: string, width: number, height: number) {
  const resizedImagePath = `assets/thumb/${imageName}.jpg`;

  sharp(`assets/full/${imageName}.jpg`)
    .resize(width, height)
    .toFile(resizedImagePath, (err: Error, info: string) => {
      console.log(err);
      console.log(info);
    });

  return resizedImagePath;
}


