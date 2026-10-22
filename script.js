gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.reveal').forEach((el) => {
  gsap.from(el, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
});