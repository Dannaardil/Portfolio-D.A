// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Create a GSAP timeline for the initial animations
  const tl = gsap.timeline();

  // Animate the landing overlay
  tl.to('.landing-overlay', {
    duration: 1,
    opacity: 0,
    delay: 2,
    onComplete: () => {
      document.querySelector('.landing-overlay').style.display = 'none';
    }
  });

  // Animate header elements
  tl.from('header > div', {
    duration: 0.8,
    opacity: 0,
    y: -50,
    stagger: 0.2,
    ease: 'power2.out'
  });

  // Animate home section elements
  tl.from('.home__info > *', {
    duration: 0.8,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: 'power2.out'
  });

  tl.from('.home__social a', {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  }, '-=0.5');

  // Add scroll animations for the about section
  // gsap.from('.about', {
  //   scrollTrigger: {
  //     trigger: '.about',
  //     start: 'top 80%',
  //     end: 'top 20%',
  //     scrub: 1
  //   },
  //   opacity: 0,
  //   y: 100,
  //   duration: 1
  // });

  // Animate the about image container


  // Fade in about section content
 
  // Add a smooth scroll effect to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Fade in section title
  gsap.from('.section-title', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1,
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });

  // Reveal image from left
  gsap.from('.about__image-container', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 60%',
      end: 'top 20%',
      scrub: 1,
    },
    opacity: 0,
    x: -90,
    duration: 1,
  });

  // Reveal text container from right with blur effect
  gsap.from('.about__text-container', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 60%',
      end: 'top 20%',
      scrub: 1,
    },
    opacity: 0,
    x: 100,
    filter: 'blur(10px)',
    duration: 1,
    onComplete: () => {
      gsap.to('.about__text-container', {duration: 0.5, filter: 'blur(0px)'});
    }
  });

  gsap.from('.about__text-container2', {
    scrollTrigger: {
      trigger: '.mision__vision',
      start: 'top 60%',
      end: 'top 20%',
      scrub: 1,
    },
    opacity: 0,
    x: 100,
    filter: 'blur(10px)',
    duration: 1,
    onComplete: () => {
      gsap.to('.about__text-container2', {duration: 0.5, filter: 'blur(0px)'});
    }
  });
  gsap.from('.about__text-container1', {
    scrollTrigger: {
      trigger: '.mision__vision',
      start: 'top 60%',
      end: 'top 20%',
      scrub: 1,
    },
    opacity: 0,
    x: -90,
    filter: 'blur(10px)',
    duration: 1,
    onComplete: () => {
      gsap.to('.about__text-container2', {duration: 0.5, filter: 'blur(0px)'});
    }
  });



  gsap.from('.certification__item', {
    scrollTrigger: {
      trigger: '.certifiaciones',
      start: 'top 60%',
      end: 'top 20%',
      scrub: 1,
    },
    opacity: 0,
    x: -90,
    filter: 'blur(10px)',
    duration: 1,
    onComplete: () => {
      gsap.to('.certification_item', {duration: 0.5, filter: 'blur(0px)'});
    }
  });

  gsap.from('.professional__goals', {
    scrollTrigger: {
      trigger: '.professional__goals',
      start: 'top 60%',
      end: 'top 20%',
      scrub: 1,
    },
    opacity: 0,
    x: -90,
    filter: 'blur(10px)',
    duration: 1,
    onComplete: () => {
      gsap.to('.professional__goals', {duration: 0.5, filter: 'blur(0px)'});
    }
  });

  // Fade in social icons
  
});

let lastX = 0;
let lastY = 0;

document.addEventListener("mousemove", parallax);

function parallax(e) {
  if (lastX !== e.pageX || lastY !== e.pageY) {
    requestAnimationFrame(() => {
      document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
    lastX = e.pageX;
    lastY = e.pageY;
  }
}