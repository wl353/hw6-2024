var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	
	let vol = document.getElementById("slider").value;
	video.volume = vol / 100;
	document.querySelector("#volume").innerHTML = vol + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed: ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed: ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current location:", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Video unmuted");
	} else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Video muted");
	}
});


document.querySelector("#slider").addEventListener("input", function() {
	let vol = document.getElementById("slider").value;
	video.volume = vol / 100;
	document.querySelector("#volume").innerHTML = vol + "%";
});

document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});

