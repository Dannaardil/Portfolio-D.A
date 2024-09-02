// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create a GSAP timeline for the animations
    const tl = gsap.timeline();

    // Fade in the intro text
    tl.to('.intro-text', {
        duration: 1.5,
        opacity: 1,
        ease: 'power2.inOut'
    });

    // Fade out the intro text and overlay
    tl.to(['.intro-text', '.animation-overlay'], {
        duration: 1,
        opacity: 0,
        ease: 'power2.inOut',
        delay: 1
    });

    // Remove the overlay from the DOM
    tl.call(() => {
        document.querySelector('.animation-overlay').remove();
    });

    // Reveal the main content with a 3D effect
    tl.from('home', {
        duration: 1.5,
        opacity: 0,
        rotationX: -90,
        transformOrigin: 'center top',
        ease: 'power4.out'
    });

    // Animate header elements
    tl.from('header > div', {
        duration: 0.8,
        opacity: 0,
        y: -50,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.5');

    // Animate home section elements
    tl.from('.home__info > *', {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.5');

    tl.from('.home__social a', {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    }, '-=0.5');

    // Add scroll animations for the about section
    gsap.from('.about', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
        },
        opacity: 0,
        y: 100,
        duration: 1
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.about__img-container', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        markers: false, // Set to true for debugging
      },
      width: '80rem',
      duration: 1,
      ease: 'power2.out'
    });
  
    // Fade in about section content
    gsap.from('.about__info > *', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1
    });
  });

  


document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.landing-overlay');
    
    // Fade in the content
    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 100);
  
    // Fade out the overlay after 3 seconds
    setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 1000);
    }, 3000);
  });

  