  // Typewriter effect
  const text = "คุณเคยสงสัยไหม\nว่าในจังหวัดของคุณจะน้ำท่วมเกิดหรือเปล่า ?";
  const duration = 3000; // Total duration (milliseconds)
  const speed = duration / text.length; // Speed per character
  let i = 0; // Character index

  function typeWriter() {
    if (i < text.length) {
      const element = document.getElementById("topic");
      element.innerHTML += text[i] === "\n" ? "<br>" : text[i];
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start typing effect when the page is loaded
  document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
  });

  // Get the button and the aside element for smooth scrolling
  const nextButton = document.getElementById('next-page');
  const nextSection = document.getElementById('next-section');

  // Add an event listener for the button click to scroll smoothly
  nextButton.addEventListener('click', function() {
    // Clear the previous text from #topic2 before typing it
    const topic2 = document.getElementById('topic2');
    topic2.innerHTML = ''; // Reset content
    typeWriter2(); // Start typing for the second topic

    // Scroll smoothly to the next aside section
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Typewriter effect for topic2
  const text2 = "พวกเรามีเว็บไซต์มานำเสนอ\nเพื่อช่วยเเก้ปัญหาการเกิดน้ำท่วมของคุณ";
  const duration2 = 3000; // Total duration (milliseconds)
  const speed2 = duration2 / text2.length; // Speed per character
  let j = 0; // Character index for topic2

  function typeWriter2() {
    if (j < text2.length) {
      const element2 = document.getElementById("topic2");
      element2.innerHTML += text2[j] === "\n" ? "<br>" : text2[j];
      j++;
      setTimeout(typeWriter2, speed2);
    }
  }