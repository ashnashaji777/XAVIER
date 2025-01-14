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
  

   // Show the enquiry box after a delay
function showEnquiryBox() {
  const enquiryBox = document.getElementById("enquiryBox");
  enquiryBox.style.display = "block";
}

// Close the enquiry box
function closeEnquiryBox() {
  const enquiryBox = document.getElementById("enquiryBox");
  enquiryBox.style.display = "none";
}

// Delay the appearance of the enquiry box
setTimeout(showEnquiryBox, 10000); // Show after 10 seconds (adjust time as needed)

// Prevent form submission for this demo
document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your enquiry has been submitted!");
});

function validateEnquiryForm(event) {
  event.preventDefault(); // Prevents form submission and page reload

  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation rules
  if (!name || name.length < 3) {
      alert("Please enter a valid name (minimum 3 characters).");
      return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phone || !phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
  }

  if (!message || message.length < 10) {
      alert("Please enter a message (minimum 10 characters).");
      return;
  }

  // If all validations pass
  document.getElementById("successMessage").style.display = "block"; // Show success message
  document.getElementById("enquiryForm").reset(); // Clear the form
}

// Close the enquiry box
function closeEnquiryBox() {
  const enquiryBox = document.getElementById("enquiryBox");
  enquiryBox.style.display = "none";
}





 