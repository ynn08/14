import './style.css'

const app = document.querySelector('#app');

// Common positions
// Card W: 624. Center: 312.
// Continue Btn W: 320. Left: (624-320)/2 = 152.
// Choice Btn W: 143. Gap 20. Total 306. Start 159. Yes: 159. No: 322.

const slides = [
  // INTRO FLOW (1-4) - Continue Button
  {
    id: 1,
    img: '1',
    text: "Hey dear loml!!!!",
    textPos: { width: '278px', height: '96px', top: '139px', fontSize: '40px' },
    imgPos: { width: '297px', height: '318px', left: '166px', top: '34px' },
    yesBtn: { text: "Continue", left: '152px', top: '604px', width: '320px', height: '60px' },
    type: 'continue'
  },
  {
    id: 2,
    img: '2',
    text: "I need to ask u smthng...",
    textPos: { width: '278px', height: '96px', top: '139px', fontSize: '40px' },
    imgPos: { width: '317px', height: '317px', left: '154px', top: '35px' },
    yesBtn: { text: "Continue", left: '152px', top: '604px', width: '320px', height: '60px' },
    type: 'continue'
  },
  {
    id: 3,
    img: '3',
    text: "ts is really important so please take it serious!!",
    textPos: { width: '544px', height: '96px', top: '140px', fontSize: '40px' },
    imgPos: { width: '323px', height: '270px', left: '150px', top: '35px' },
    yesBtn: { text: "Continue", left: '152px', top: '604px', width: '320px', height: '60px' },
    type: 'continue'
  },
  {
    id: 4,
    img: '4',
    text: "so... the question is...",
    textPos: { width: '544px', height: '48px', top: '142px', fontSize: '40px' },
    imgPos: { width: '302px', height: '302px', left: '165px', top: '55px' },
    yesBtn: { text: "Continue", left: '152px', top: '604px', width: '320px', height: '60px' },
    type: 'continue'
  },

  // CHOICE FLOW (5) - Yes (Win) / No (Locked -> Redirect to 61)
  {
    id: 5,
    img: '5',
    text: "will you be my valentine??",
    textPos: { width: '544px', height: '96px', top: '142px', fontSize: '40px' },
    imgPos: { width: '237px', height: '307px', left: '197px', top: '53px' },
    yesBtn: { text: "Yes", left: '159px', top: '604px', width: '143px', height: '60px' },
    noBtn: { text: "No", left: '322px', top: '604px', width: '143px', height: '60px', locked: true }, // Aligned with Yes
    type: 'choice'
  },

  // PERSUASION FLOW (61 -> 62 -> ... -> 9) 
  // Slide 61: Yes locked. No bigger.
  {
    id: 61,
    img: '61',
    text: "u didnt even checked the options",
    textPos: { width: '482px', height: '96px', top: '145px', fontSize: '40px' },
    imgPos: { width: '253px', height: '323px', left: '192px', top: '38px' },
    yesBtn: { text: "Yes", left: '159px', top: '593px', width: '143px', height: '60px', locked: true },
    noBtn: { text: "NO!", left: '322px', top: '583px', width: '160px', height: '80px', fontSize: '24px' }, // Bigger
    type: 'persuasion'
  },
  {
    id: 6,
    img: '62',
    text: "i knew that u r cruel, but never knew it was coming...",
    textPos: { width: '544px', height: '96px', top: '142px', fontSize: '40px' },
    imgPos: { width: '351px', height: '351px', left: '140px', top: '19px' },
    yesBtn: { text: "I changed my mind", left: '159px', top: '580px', width: '160px', height: '70px', fontSize: '20px', locked: true }, // Growing
    noBtn: { text: "I SAID NO!", left: '350px', top: '600px', width: '100px', height: '40px', fontSize: '14px' }, // Shrinking
    type: 'persuasion'
  },
  {
    id: 7,
    img: '7',
    text: "ur breaking my heart 💔",
    textPos: { width: '411px', height: '93px', top: '137px', fontSize: '40px' },
    imgPos: { width: '428px', height: '241px', left: '98px', top: '95px' },
    yesBtn: { text: "pls say yes...", left: '130px', top: '570px', width: '200px', height: '90px', fontSize: '26px', locked: true },
    noBtn: { text: "NO.", left: '370px', top: '610px', width: '60px', height: '30px', fontSize: '12px' },
    type: 'persuasion'
  },
  {
    id: 8,
    img: '8',
    text: "this cant be true.... 🥺 i just dont get it",
    textPos: { width: '411px', height: '93px', top: '137px', fontSize: '40px' },
    imgPos: { width: '230px', height: '323px', left: '211px', top: '22px' },
    yesBtn: { text: "maybe now...", left: '100px', top: '550px', width: '260px', height: '110px', fontSize: '32px', locked: true },
    noBtn: { text: "i had my word", left: '400px', top: '620px', width: '56px', height: '27px', fontSize: '10px' },
    type: 'persuasion'
  },
  {
    id: 9,
    img: '9',
    text: "im giving u one last shot choose wisely...",
    textPos: { width: '522px', height: '93px', top: '120px', fontSize: '40px' },
    imgPos: { width: '226px', height: '304px', left: '192px', top: '32px' },
    yesBtn: { text: "just press the damn button!!", left: '60px', top: '520px', width: '350px', height: '150px', fontSize: '48px', locked: true },
    noBtn: { text: "keep dreaming", left: '440px', top: '630px', width: '53px', height: '27px', fontSize: '10px' },
    type: 'persuasion'
  },

  // FINAL FLOW
  // Uses ID 13 but represents the "Giant Yes" state
  {
    id: 10,
    img: '10',
    text: "ur leaving me no choice.",
    textPos: { width: '300px', height: '150px', top: '-100px', left: '40px', fontSize: '40px' }, // Text Left, Higher
    imgPos: { width: '250px', height: '250px', left: '340px', top: '50px' }, // Image Right, Higher
    yesBtn: { text: "YES HONEY, ofc im in!!!!", left: '-25px', top: '305px', width: '680px', height: '360px', fontSize: '48px' }, // Big Button Bottom
    type: 'final-choice'
  },

  // SUCCESS FLOW (11-13)
  {
    id: 11,
    img: '11',
    text: "girl.. u know u cooked right?",
    textPos: { width: '522px', height: '93px', top: '120px', fontSize: '40px' },
    imgPos: { width: '350px', height: '320px', left: '137px', top: '17px' },
    yesBtn: { text: "yeah/ whatever...", left: '152px', top: '604px', width: '320px', height: '60px' },
    type: 'continue'
  },
  {
    id: 12,
    img: '12',
    text: "yeii!!! im the happiest man alive",
    textPos: { width: '522px', height: '93px', top: '133px', fontSize: '40px' },
    imgPos: { width: '335px', height: '335px', left: '161px', top: '9px' },
    yesBtn: { text: "Continue", left: '152px', top: '604px', width: '320px', height: '60px' },
    type: 'continue'
  },
  {
    id: 13, // Finale
    img: '13',
    text: "buckle up!!! and get ready to shine with ur gorgeousness 14 feb 16:00",
    textPos: { width: '482px', height: '96px', top: '145px', fontSize: '35px' },
    imgPos: { width: '253px', height: '323px', left: '192px', top: '38px' },
    yesBtn: { text: "Finish", left: '152px', top: '604px', width: '320px', height: '60px' }, // Finish
    final: true
  }
];

let currentSlideIndex = 0;

function renderSlide(index) {
  const slide = slides[index];
  if (!slide) return;

  const container = document.createElement('div');
  container.className = 'slide-container';

  // Scale logic
  const scale = Math.min(window.innerWidth / 800, window.innerHeight / 800, 1);
  container.style.transform = `scale(${scale})`;
  window.addEventListener('resize', () => {
    const newScale = Math.min(window.innerWidth / 800, window.innerHeight / 800, 1);
    container.style.transform = `scale(${newScale})`;
  });

  const content = `
    <div class="ellipse-bg"></div>
    <div class="card">
        <div class="illu-container">
            <!-- LUV ICON REMOVED -->
            <div class="kiss-icon" id="kiss-${index}"></div>
        </div>
        
        <!-- Photo -->
        <div class="photo" style="
            width: ${slide.imgPos.width};
            height: ${slide.imgPos.height};
            left: ${slide.imgPos.left};
            top: ${slide.imgPos.top};
            background-image: url('/assets/${slide.img}.jpg');
        "></div>

        <!-- Text -->
        <div class="text-content" style="
            width: ${slide.textPos.width};
            height: ${slide.textPos.height};
            top: calc(50% - ${slide.textPos.height}/2 + ${slide.textPos.top});
            left: ${slide.textPos.left ? slide.textPos.left : `calc(50% - ${slide.textPos.width}/2)`};
            font-size: ${slide.textPos.fontSize || '40px'};
        ">
            ${slide.text}
        </div>

         <button class="btn btn-yes" id="btn-yes" style="
            left: ${slide.yesBtn.left};
            top: ${slide.yesBtn.top};
            width: ${slide.yesBtn.width};
            height: ${slide.yesBtn.height};
            font-size: ${slide.yesBtn.fontSize || '18px'};
            position: absolute;
        ">
            ${slide.yesBtn.text}
        </button>

        ${slide.noBtn ? `
        <button class="btn btn-no" id="btn-no" style="
            left: ${slide.noBtn.left};
            top: ${slide.noBtn.top};
            width: ${slide.noBtn.width};
            height: ${slide.noBtn.height};
            font-size: ${slide.noBtn.fontSize || '18px'};
            position: absolute;
        ">
            ${slide.noBtn.text}
        </button>
        ` : ''}
    </div>
  `;

  container.innerHTML = content;
  app.innerHTML = '';
  app.appendChild(container);

  // Helper to move button randomly with guaranteed distance (no infinite loops)
  const moveButton = (btn) => {
    const cardWidth = 624;
    const cardHeight = 552;
    const btnRect = btn.getBoundingClientRect();
    const btnW = btnRect.width;
    const btnH = btnRect.height;

    const maxLeft = cardWidth - btnW - 20;
    const maxTop = cardHeight - btnH - 20;

    const currentLeft = btn.offsetLeft;
    const currentTop = btn.offsetTop;

    // Generate random position
    let newLeft = Math.random() * maxLeft;
    let newTop = Math.random() * maxTop;

    // Check distance. If too close, jump to the other side of the card.
    if (Math.abs(newLeft - currentLeft) < 150) {
      newLeft = (newLeft + maxLeft / 2) % maxLeft;
    }
    if (Math.abs(newTop - currentTop) < 150) {
      newTop = (newTop + maxTop / 2) % maxTop;
    }

    // Ensure strictly within bounds
    newLeft = Math.max(20, Math.min(newLeft, maxLeft));
    newTop = Math.max(20, Math.min(newTop, maxTop));

    btn.style.left = `${newLeft}px`;
    btn.style.top = `${newTop}px`;
  };

  // Behavior
  const btnYes = document.getElementById('btn-yes');
  if (btnYes) {
    if (slide.yesBtn && slide.yesBtn.locked) {
      btnYes.addEventListener('mouseover', () => moveButton(btnYes));
      btnYes.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(btnYes); });
      btnYes.addEventListener('click', (e) => { e.preventDefault(); moveButton(btnYes); });
    } else {
      btnYes.addEventListener('click', () => {
        const kiss = document.getElementById(`kiss-${index}`);
        if (kiss) kiss.style.opacity = 1;

        if (slide.type === 'continue') {
          currentSlideIndex++;
          renderSlide(currentSlideIndex);
        } else if (slide.type === 'final-choice') {
          currentSlideIndex++;
          renderSlide(currentSlideIndex);
        } else if (slide.final) {
          alert("luv u💕");
        } else {
          currentSlideIndex++;
          renderSlide(currentSlideIndex);
        }
      });
    }
  }

  if (slide.noBtn) {
    const noBtn = document.getElementById('btn-no');
    if (slide.noBtn && slide.noBtn.locked) {
      noBtn.addEventListener('mouseover', () => moveButton(noBtn));
      noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(noBtn); });
      noBtn.addEventListener('click', (e) => { e.preventDefault(); moveButton(noBtn); });
    } else {
      noBtn.addEventListener('click', () => {
        if (slide.id === 5) {
          currentSlideIndex = 5;
          renderSlide(currentSlideIndex);
        } else if (slide.type === 'persuasion') {
          currentSlideIndex++;
          renderSlide(currentSlideIndex);
        }
      });
    }
  }
}

renderSlide(0);
