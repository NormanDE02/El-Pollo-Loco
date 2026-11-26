class BackgroundObject extends movableObject {

    height = 400;
    width = 720;
    constructor (imagePath,x ,y) {
        super().loadImage(imagePath);
        this.x =x;
        this.y = 480 - this.height;
    }
}