var controller = new ScrollMagic.Controller();

//LIFECYCLE SECTION

 var lifecycle_approach_timeline = gsap.timeline({
	scrollTrigger: {
		trigger: ".lifecycle-row",
		pin: "body",
		 start: "top top",
		end: "500%",
		markers: "true",
		scrub: 1
	}
 });


lifecycle_approach_timeline.to("#approach-item-1", {
	display: "inline",
	opacity: 1,
	duration: 0.5,
	ease: "power4.out"
});
lifecycle_approach_timeline.to(
	"#approach-item-1",
	{ display: "none", opacity: 0, duration: 0.5, ease: "power4.out" },
	"=+5"
);

lifecycle_approach_timeline.to("#approach-item-2", {
	display: "inline",
	opacity: 1,
	duration: 0.5,
	ease: "power4.out"
});
lifecycle_approach_timeline.to("#blue-prog-circle-3", { opacity: 1 });
lifecycle_approach_timeline.to(
	"#approach-item-2",
	{ display: "none", opacity: 0, duration: 0.5, ease: "power4.out" },
	"=+5"
);

lifecycle_approach_timeline.to("#approach-item-3", {
	display: "inline",
	opacity: 1,
	duration: 0.5,
	ease: "power4.out"
});
lifecycle_approach_timeline.to("#blue-prog-circle-4", { opacity: 1 });
lifecycle_approach_timeline.to(
	"#approach-item-3",
	{ display: "none", opacity: 0, duration: 0.5, ease: "power4.out" },
	"=+5"
);

lifecycle_approach_timeline.to("#approach-item-4", {
	display: "inline",
	opacity: 1,
	duration: 0.5,
	ease: "power4.out"
});

lifecycle_approach_timeline.to("#blue-prog-circle-5", { opacity: 1 });
lifecycle_approach_timeline.to(
	"#approach-item-4",
	{ display: "none", opacity: 0, duration: 0.5, ease: "power4.out" },
	"=+5"
);

lifecycle_approach_timeline.to("#approach-item-5", {
	display: "block",
	opacity: 1,
	duration: 0.5,
	ease: "power4.out"
});




//MAP SECTION

var maps_timeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#maps-section",
		pin: "body",
		start: "center center",
		end: "1000%",
		// markers: "true",
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
