import { scaleImage } from "./imageScalingService"
import { checkCache } from "./cachingService"

type Image = {
    name: string,
    width: number,
    height: number
}

export function processInputImage(imageName: string, width: number, height: number){
    if(checkCache(imageName, width, height)){
        return ;
    } else {
        return scaleImage(imageName, width, height)
    }
}

export function serveImage(imageName: string, width: number, height: number){

}