document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = [
        "Hey Hood, hear me out... I'm done bullshitting. I've taken some time to reflect on our past and the impact it has had on me. I'm not here to reopen closed chapters, I would just like closure for my own peace of mind.",
        "The pain lingered for much longer than I anticipated, and I'm at a point where I want to finally close this chapter for good. It has taken time for me to process and understand my emotions, and I have come to realize that holding onto you only hinders my personal growth and happiness. I don't want to dwell on the past, but I feel like understanding and acknowledging what happened would be a significant step for me.",
        "I understand that at times, I may have been a bit crazy and too obsessed. Looking back, I see that my emotions got the best of me, and I've grown a lot since then. If you are open to it, I would appreciate an opportunity to have an honest and respectful conversation about our past. I am not seeking to rekindle the past, but rather to gain a better understanding and a sense of closure so that I can truly close this chapter.",
        "I understand that this might be one-sided, so I completely respect if you are not open or comfortable with that idea. I understand the need for boundaries. So if you're not willing to have this conversation, I would be grateful if you could communicate that. My main aim is to find peace within myself and let go of any lingering emotions.",
        "Thanks for taking the time to read my thoughts. I genuinely wish you all the best in life, and may God continue opening doors of opportunity for you. And if you ever wanna create a website for reckless, your favorite tech prodigy is happy to help lmaoo"
    ];

    const typewriterText = document.getElementById("typewriterText");
    typewriterText.innerHTML = '';

    let paragraphIndex = 0;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
        typewriterText.innerHTML += paragraphs[paragraphIndex].charAt(charIndex);
        charIndex++;

        if (charIndex === paragraphs[paragraphIndex].length) {
            charIndex = 0;
            paragraphIndex++;

            if (paragraphIndex === paragraphs.length) {
                clearInterval(typeInterval);
            }
        }
    }, 50);
});


