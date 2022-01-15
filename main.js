Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
cam=document.getElementById("cam");
Webcam.attach('#cam');
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="cam_result" src="' + data_uri + '"/>';
    });
}
console.log('ml5_version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AzQZeyki-/model.json', modelLoaded);