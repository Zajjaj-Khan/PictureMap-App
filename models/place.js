class Place{
    constructor(title,imgUri,address,location){
        this.title = title;
        this,image_Uri = imgUri;
        this.address = address;
        this.location = location; // lat:0.1234 , lng:124.643
        this.id = new Date().toString() + Math.random().toString();
    }
}