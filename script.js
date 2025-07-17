document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const nextBtns = document.querySelectorAll('.nextBtn');
    let currentPageIndex = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    surpriseBtn.addEventListener('click', () => {
        currentPageIndex = 1;
        showPage(currentPageIndex);
    });

    nextBtns.forEach(button => {
        button.addEventListener('click', () => {
            if (currentPageIndex < pages.length - 1) {
                currentPageIndex++;
                showPage(currentPageIndex);
            }
        });
    });

    // Initialize first page
    showPage(currentPageIndex);
});
