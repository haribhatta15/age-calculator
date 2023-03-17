function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const now = new Date();
  const diff = now.getTime() - birthdate.getTime();
  const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const ageInMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
  const ageInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("years").textContent = ageInYears;
  document.getElementById("months").textContent = ageInMonths;
  document.getElementById("days").textContent = ageInDays;
}
