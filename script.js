gsap.registerPlugin(ScrollTrigger);
const canvas = document.getElementById("sin-intro");
const context = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;
const frameCount = 124;
const currentFrame = index => (
  `./result3/male${(index + 1).toString().padStart(4, '0')}.webp`
);
const images = []
const sinxsin = {
  frame: 0
};
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}
gsap.to(sinxsin, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 1
  },
  onUpdate: render
});
images[0].onload = render;
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[sinxsin.frame], 0, 0);
}
gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    pin: true,
    start: "top top",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
  }
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3",
    pin: true,
    start: "top top",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
  }
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4",
    pin: true,
    start: "top top",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
  }
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".c-avatar",
    start: "top top",
    end: "bottom top",
    scrub: 0,
  }
})
  .to('#sin-intro', { opacity: 0 })
gsap.timeline({
  scrollTrigger: {
    trigger: ".c-roadmap",
    pin: false,
    start: "top bottom",
    end: "bottom bottom ",
    scrub: 1,
  }
})
  .to('.c-roadmap', { color: '#fff', backgroundColor: '#171010' })
  .to('header', { color: '#fff' })
  .to('.button-round', { color: '#171010', backgroundColor: '#fff', border: '1px solid #fff' 
})
window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});
document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});
