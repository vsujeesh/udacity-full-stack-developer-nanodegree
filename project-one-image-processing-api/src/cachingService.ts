const fs = require("fs");
export function checkCache(imageName: string, width: number, height: number) {
  let imageIsCached: boolean = false;
  fs.readdir("assets/thumb/", (err: Error, files: string[]) => {
    for (let i = 0; i < files.length; i = i + 1) {
      if (files[i] === `${imageName}_${width}_${height}`) {
        imageIsCached = true;
        console.log("Requested image is present in cache");
      }
    }
  });
  return imageIsCached;
}
