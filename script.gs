function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  const resultDiv = document.getElementById('result');

  if (!dobInput) {
    resultDiv.innerHTML = "❗ Please enter your date of birth.";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    resultDiv.innerHTML = "❗ Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.innerHTML = 🎉 You are <b>${years}</b> years, <b>${months}</b> months, and <b>${days}</b> days old.;
}