var lifecycle_approach_timeline = gsap.timeline({
    repeat: -1,
    scrollTrigger: {
        trigger: ".approach-circle",
        start: "top center",
        markers: true,

} });

lifecycle_approach_timeline.to("#approach-item-1", { display: "inline", duration: 4, ease: "power4.out", });
lifecycle_approach_timeline.to("#approach-item-1", { display: "none", ease: "power4.out", });
lifecycle_approach_timeline.to("#approach-item-2", { display: "inline", duration: 4, ease: "power4.out", });
lifecycle_approach_timeline.to("#blue-prog-circle-3", { opacity: 1}, "-=4");
lifecycle_approach_timeline.to("#approach-item-2", { display: "none", ease: "power4.out", });
lifecycle_approach_timeline.to("#approach-item-3", { display: "inline", duration: 4 });
lifecycle_approach_timeline.to("#blue-prog-circle-4", { opacity: 1 }, "-=4");
lifecycle_approach_timeline.to("#approach-item-3", { display: "none", ease: "power4.out", });
lifecycle_approach_timeline.to("#approach-item-4", { display: "inline", duration: 4 });
lifecycle_approach_timeline.to("#blue-prog-circle-5", { opacity: 1 }, "-=4");
lifecycle_approach_timeline.to("#approach-item-4", { display: "none", ease: "power4.out",  });
