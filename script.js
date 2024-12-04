document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const programCards = document.querySelectorAll(".program-card");
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        tabButtons.forEach((btn) => btn.classList.remove("active"));
  
        // Add active class to the clicked button
        button.classList.add("active");
  
        // Get the tab category
        const tabCategory = button.getAttribute("data-tab");
  
        // Show/hide cards based on the tab category
        programCards.forEach((card) => {
          if (tabCategory === "all" || card.getAttribute("data-category") === tabCategory) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });
      });
    });
  
    // Trigger the "All" tab by default
    document.querySelector('.tab-button[data-tab="all"]').click();
  });


 

  let currentReviewIndex = 0;

  function moveReview(direction) {
      const reviewWrapper = document.querySelector('.review-card-wrapper');
      const totalReviews = document.querySelectorAll('.review-card').length;
  
      // Update currentReviewIndex
      currentReviewIndex += direction;
  
      // Ensure the index loops within bounds
      if (currentReviewIndex < 0) {
          currentReviewIndex = totalReviews - 1;
      } else if (currentReviewIndex >= totalReviews) {
          currentReviewIndex = 0;
      }
  
      // Calculate new offset
      const offset = -currentReviewIndex * 100; // Each card takes 100% width
      reviewWrapper.style.transform = `translateX(${offset}%)`;
  }
  


  