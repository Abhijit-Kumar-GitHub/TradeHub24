import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

export const navbarUp = () => {
  gsap.to('.navbar', {
    y: -300,
    duration: 0.5,
    opacity: 0
    
  });
};

export const navbarDown = () => {
  gsap.to('.navbar', {
    y: 0,
    duration: 0.5,
    opacity: 1
    
  });
};

export const animation = () => {
    gsap.fromTo('.logo', {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0.6
    });

    // Create timeline for nav items and buttons
    const tl = gsap.timeline({ 
      delay: 0.9,
      onComplete: () => resolve() // Resolve the promise when timeline completes
    });
    
    tl.fromTo('.nav-item', {
      y: -30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.07
    })
    .fromTo('.button-container div', {
      y: -30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.07
    });
    tl.fromTo('.frontQuote', {
      x: -50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.25
    })
    .fromTo('.frontQuote h1', {
      x: -50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.25
    })
    .fromTo('.heroImg', {
      x: 50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.6
    });
    

  };
  


