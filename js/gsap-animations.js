var controller = new ScrollMagic.Controller();

var lifecycle_approach_timeline = gsap.timeline({
 });

lifecycle_approach_timeline.to("#approach-item-1", { display: "inline", opacity: 1, scale: 1, duration: .5, ease: "power4.out", });
lifecycle_approach_timeline.to("#approach-item-1", { display: "none", opacity: 0, duration: .5, scale: 0, ease: "power4.out", }, "=+5");


lifecycle_approach_timeline.to("#approach-item-2", { display: "inline", opacity: 1, duration: .5, ease: "power4.out" });
lifecycle_approach_timeline.to("#blue-prog-circle-3", { opacity: 1 }, );
lifecycle_approach_timeline.to("#approach-item-2", { display: "none", opacity: 0, duration: .5, ease: "power4.out", }, "=+5");


lifecycle_approach_timeline.to("#approach-item-3", { display: "inline", opacity: 1, duration: .5, ease: "power4.out" });
lifecycle_approach_timeline.to("#blue-prog-circle-4", { opacity: 1 }, );
lifecycle_approach_timeline.to("#approach-item-3", { display: "none", opacity: 0, duration: .5, ease: "power4.out", }, "=+5");


lifecycle_approach_timeline.to("#approach-item-4", { display: "inline", opacity: 1, duration: .5, ease: "power4.out" });
lifecycle_approach_timeline.to("#blue-prog-circle-5", { opacity: 1 }, );
lifecycle_approach_timeline.to("#approach-item-4", { display: "none", opacity: 0, duration: .5, ease: "power4.out", }, "=+5");


var lifecycle_approach_scene = new ScrollMagic.Scene({
	triggerElement: ".lifecycle-row",
	duration: "5000",
	triggerHook: 0
})
	.setPin(".lifecycle-row")
	.setTween(lifecycle_approach_timeline) // trigger a TweenMax.to tween
	.addTo(controller);