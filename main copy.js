prediction1="";
perdiction2="";

Webcam.set(
{
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});

camera=document.getElementById("camera");
Webcam.attach("#camera");


function capture_image()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";

    });
    
    
}

console.log("ml5 version:", ml5.version);

classifier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/zDOxYvPBk/model.json",modelLoded);

function modelLoded()
{
    console.log("Model Loded !");
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction1;
    speak_data_2=" and the second prediction is"+prediction2;
    var utterThis=new SpeechSynthesisUtterance (speak_data_1+speak_data_2);
    synth.speak(utterThis);

}