// ===============================
// HEADER ANIMATION
// ===============================

gsap.from("#header img", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

 gsap.from(".Navbar h2", {
     y: -50,
     opacity: 0,
     duration: 0.8,
     stagger: 0.15,
   delay: 0.3,
     ease: "power3.out"
 });


// // ===============================
// // HERO ANIMATION
// // ===============================

 gsap.from("#items h1", {
     x: -100,
     opacity: 0,
     duration: 1,
     delay: 0.5,
     ease: "power3.out"
 });

 gsap.from("#items p", {
     x: 100,
     opacity: 0,
     duration: 0.8,
     stagger: 0.2,
     delay: 0.8,
     ease: "power2.out"
 });

gsap.from("#items button", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay: 1.5,
    ease: "back.out(1.7)"
});
// ===============================
// CARDS ANIMATION
// ===============================

gsap.from(".card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    delay: 1.8,
    ease: "power3.out"
});