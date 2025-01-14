function validateForm() {
    const form = document.getElementById("ugApplicationForm");
    if (!form.checkValidity()) {
      alert("Please fill out all required fields correctly.");
      return false;
    }
    alert("Application submitted successfully!");
    return true;
  }
  