gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("sin-intro");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const frameCount = 300;
const currentFrame = index => (
  `./result3/male${(index + 1).toString().padStart(4, '0')}.png`
);

const images = []
const cyberfiction = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(cyberfiction, {
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
  context.drawImage(images[cyberfiction.frame], 0, 0);
}

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2", // 객체기준범위
    pin: true, // 고정
    start: "top top", // 시작점
    // end: "bottom bottom", // 끝점
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1, // 모션바운스
    // markers: true, // 개발가이드선
  }
})

  // .to('.sec2_tit1', { duration: 0, delay: 1 })
  // .to('.sec2_tit1', { duration: 0.3, opacity: 0, x: -30 })

  // .to('.sec2_tit2', { duration: 0.3, opacity: 1, x: 0 })
  // .to('.sec2_tit2', { duration: 0, delay: 1 })
  // .to('.sec2_tit2', { duration: 0.3, opacity: 0, x: -30 })

  // .to('.sec2_tit3', { duration: 0.3, opacity: 1, x: 0 })
  // .to('.sec2_tit3', { duration: 0, delay: 1 })

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3", // 객체기준범위
    pin: true, // 고정
    start: "top top", // 시작점
    // end: "bottom bottom", // 끝점
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1, // 모션바운스
    // markers: true, // 개발가이드선
  }
})
// .to('.sec3_tit1', { duration: 0, delay: 3 })

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4", // 객체기준범위
    pin: true, // 고정
    start: "top top", // 시작점
    // end: "bottom bottom", // 끝점
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1, // 모션바운스
    // markers: true, // 개발가이드선
  }
})
// .to('.sec4_tit1', { duration: 0, delay: 3 })

gsap.timeline({
  scrollTrigger: {
    trigger: ".c-avatar", // 객체기준범위
    start: "top top", // 시작점
    end: "bottom top", // 끝점
    scrub: 0, // 모션바운스
    // markers: true, // 개발가이드선
  }
})
  // .to('#sin-intro', { top: -(window.innerHeight * 1.3) })
  .to('#sin-intro', { opacity: 0 })

gsap.timeline({
  scrollTrigger: {
    trigger: ".c-roadmap", // 객체기준범위
    pin: false, // 고정
    start: "top bottom", // 시작점
    end: "bottom bottom ", // 끝점
    // end: "+=" + window.innerHeight * 1.3,
    scrub: 1, // 모션바운스
    // markers: true, // 개발가이드선
    // toggleClass: {targets: 'header', className: 'active'}
  }
})
  .to('.c-roadmap', { color: '#fff', backgroundColor: '#171010' })
  .to('header', { color: '#fff' })
  .to('.button-round', { color: '#171010', backgroundColor: '#fff', border: '1px solid #fff' })

window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});

document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});

// window.history.scrollRestoration = "manual"; // 새로고침 시 처음으로
