var controller = new ScrollMagic.Controller();

//LIFECYCLE SECTION

var lifecycle_approach_timeline = gsap.timeline({});

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
lifecycle_approach_timeline.to("#blue-prog-circle-5", { opacity: 1 }, "=+5");

var lifecycle_approach_scene = new ScrollMagic.Scene({
	triggerElement: ".lifecycle-row",
	duration: "300%",
	triggerHook: 0
})
	.setPin(".lifecycle-row")
	.setTween(lifecycle_approach_timeline) // trigger a TweenMax.to tween
	.addTo(controller);

//MAP SECTION

var maps_timeline = gsap.timeline({});

maps_timeline.to("#map-1", { opacity: 0, display: "none", duration: .2 }, "+=5")
maps_timeline.to("#map-2", { opacity: 1, display: "block", duration: .2 },)
maps_timeline.to("#map-2", { opacity: 0, display: "none", duration: .2 }, "+=5")
maps_timeline.to("#map-3", { opacity: 1, display: "block", duration: .2 },)

var maps_scene = new ScrollMagic.Scene({
	triggerElement: "#maps-section",
	duration: "200%",
	triggerHook: 0
})
	.setPin("#maps-section")
	.setTween(maps_timeline) // trigger a TweenMax.to tween
	.addTo(controller);
