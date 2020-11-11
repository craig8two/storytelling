gsap.to(".orange-white-text-1", { opacity: 1, delay: 0.5, duration: 0.8, ease: "power4.out" });
gsap.to(".white-on-blue-text-1", { opacity: 1, delay: 0.53, duration: 0.8, ease: "power4.out" });




//MAP SECTION

var maps_timeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#maps-section",
		pin: "#maps-section",
		start: "top 20%",
		end: "2000px 100%",
		scrub: 1
	}
});

maps_timeline.from("#map-1-text", { x: -100, opacity: 0, delay: 3, duration: 1000, ease: "power4.out" });
maps_timeline.to("#map-1-text", { x: -100, opacity: 0, delay: 5, duration: 1000, ease: "power4.out" });
maps_timeline.to(".mini-map", { y: -100, opacity: 0, delay: 5, duration: 1000, ease: "power4.out" });
maps_timeline.to("#map-1", { opacity: 0, duration: 0, ease: "power4.out" });

maps_timeline.to("#map-2", { opacity: 1, duration: 1000, ease: "power4.out" }, "+=50");
maps_timeline.from("#map-2-text-1", { x: -100, opacity: 0, delay: 10, duration: 1000, ease: "power4.out" }, "+=500");
maps_timeline.from("#map-2-text-2", { x: -100, opacity: 0, delay: 3, duration: 1000, ease: "power4.out" }, "+=100");

maps_timeline.to("#map-2-text-1", { x: -100, opacity: 0, delay: 10, duration: 1000, ease: "power4.out" });
maps_timeline.to("#map-2-text-2", { x: -100, opacity: 0, delay: 3, duration: 1000, ease: "power4.out" });
maps_timeline.to("#map-2", { opacity: 0, delay: 3, duration: 0.1, ease: "power4.out" });

maps_timeline.to("#map-3", { opacity: 1, duration: 2, ease: "power4.out" }, "+=50");
maps_timeline.from("#map-3-text-1", { x: -100, opacity: 0, delay: 10, duration: 1000, ease: "power4.out" }, "+=500");
maps_timeline.from("#map-3-text-2", { x: -100, opacity: 0, delay: 3, duration: 1000, ease: "power4.out" }, "+=100");

//CIRCLE SECTION
var circle_timeline = gsap.timeline({
	scrollTrigger: {
		trigger: ".numbers-row",
		start: "center center ",
		end: "bottom center",
		toggleActions: "play complete complete complete"
	}
});

circle_timeline
	.to("#circle-img-1", { opacity: 1, duration: 0.5, ease: "power4.out" })
	.to("#circle-img-2", { opacity: 1, duration: 0.5, ease: "power4.out" })
	.to("#circle-img-3", { opacity: 1, duration: 0.5, ease: "power4.out" })
	.to("#circle-img-4", { opacity: 1, duration: 0.5, ease: "power4.out" });


// SLIDER 1 SECTION

var horizontal_slider_timeline = gsap.timeline({ 
scrollTrigger: {
		trigger: ".top-orange-container",
		start: "top top",
		end: "2000px bottom",
		pin: "#slider-1",
		scrub: true,
		
	}
});

horizontal_slider_timeline
	.to("#horizontal-slider-1", { x: "-100%", duration: 1 }, "+=3")
	.from("#horizontal-slider-2", { x: "100%", duration: 1 }, "-=1")
	.to("#horizontal-slider-2", { x: "0", duration: 1 })
	.to("#horizontal-slider-2", { x: "-100%", duration: 1 }, "+=3")
	.from("#horizontal-slider-3", { x: "100%", duration: 1 }, "-=1")
	.to("#horizontal-slider-3", { x: "0", duration: 1 })
	.to("#horizontal-slider-3", { x: "-100%", duration: 1 }, "+=3")
	.from("#horizontal-slider-4", { x: "100%", duration: 1 }, "-=1")
	.to("#horizontal-slider-4", { x: "0", duration: 1 });


	//BARS SECTION



	// LIFECYCLE SECTION


//LIFECYCLE SECTION

// var lifecycle_approach_timeline = gsap.timeline(
// 	{
// 		scrollTrigger: {
// 			 trigger: "#lifecycle-row",
// 			 pin: "body",
// 			 start: "bottom bottom",
// 			end: "150%",
// 			markers: "true",
// 			scrub: 1
// 		}
// 	}
// );

// lifecycle_approach_timeline.to(
// 	"#approach-item-1",
// 	{ display: "none", opacity: 0, duration: 0.5, ease: "power4.out" },
// 	"=+5"
// );

// lifecycle_approach_timeline.to("#approach-item-2", {

// 	opacity: 1,
// 	duration: 0.5,
// 	ease: "power4.out"
// });
// lifecycle_approach_timeline.to("#blue-prog-circle-3", { opacity: 1 });
// lifecycle_approach_timeline.to(
// 	"#approach-item-2",
// 	{  opacity: 0, duration: 0.5, ease: "power4.out" },
// 	"=+5"
// );

// lifecycle_approach_timeline.to("#approach-item-3", {

// 	opacity: 1,
// 	duration: 0.5,
// 	ease: "power4.out"
// });
// lifecycle_approach_timeline.to("#blue-prog-circle-4", { opacity: 1 });
// lifecycle_approach_timeline.to(
// 	"#approach-item-3",
// 	{ d, opacity: 0, duration: 0.5, ease: "power4.out" },
// 	"=+5"
// );

// lifecycle_approach_timeline.to("#approach-item-4", {

// 	opacity: 1,
// 	duration: 0.5,
// 	ease: "power4.out"
// });

// lifecycle_approach_timeline.to("#blue-prog-circle-5", { opacity: 1 });
// lifecycle_approach_timeline.to(
// 	"#approach-item-4",
// 	{  opacity: 0, duration: 0.5, ease: "power4.out" },
// 	"=+5"
// );

// lifecycle_approach_timeline.to("#approach-item-5", {
// 	opacity: 1,
// 	duration: 0.5,
// 	ease: "power4.out"
// });

