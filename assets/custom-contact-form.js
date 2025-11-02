  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("custom_contact_form");
  if (!form) return;

  const submitButton = form.querySelector("#custom_contact_form-submit");
  if (!submitButton) return;

  form.addEventListener("submit", function (e) {
    const honeypot = form.querySelector('input[name="contact[honeypot]"]');
    if (honeypot && honeypot.value.trim() !== "") {
        e.preventDefault();
        console.warn('Spam bot detected — form not submitted.');
    };
    form.setAttribute("aria-busy", "true");
    submitButton.disabled = true;
    submitButton.classList.add("is-loading");
    submitButton.textContent = "Sending...";
  });
});