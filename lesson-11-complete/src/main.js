console.log('Lesson 11 starter loaded');

const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  const fullNameValue = formEl.elements.fullName.value;
  const emailValue = formEl.elements.email.value;
  const bioValue = formEl.elements.bio.value;

  const planValue = formEl.elements.plan.value;
  let topicValue = '';
  formEl.elements.topics.forEach((el) => {
    if (el.checked) {
      topicValue += `${el.value} `;
    }
  });

  return {
    fullName: fullNameValue,
    email: emailValue,
    bio: bioValue,
    plan: planValue,
    topics: topicValue,
  };
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = serializeForm(form);

  // STUDENT TODO: Add validation logic to the form, ensure all fields are valid before allowing submission
  // HINT: see the 'input' event listener below for examples of validation logic. Perhaps
  // you can reuse some of that code here to validate all fields on submit, or create validation
  // functions that can be reused in both places.

  // OPTIONAL - use the following alongside the `novalidate` form attribute
  // to trigger built-in HTML validation (will require manual display of errors)
  if (form.checkValidity()) {
    result.textContent = `
    Submission received:
    - Name: ${data.fullName}
    - Email: ${data.email}
    - Bio: ${data.bio}
    - Plan: ${data.plan}
    - Topics: ${data.topics}
  `;
  } // end if form.checkValidity()
});

form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
});

// 1. Add validation logic to the form
form.addEventListener('input', (e) => {
  const target = e.target;

  // 1.1 custom validation for fullName (must contain two words)
  if (target.name === 'fullName') {
    const nameParts = target.value.trim().split(' ');
    if (nameParts.length < 2) {
      target.setCustomValidity('Full Name must contain at least two words.');
    } else {
      target.setCustomValidity('');
    }
  }

  // 1.2 custom validation for bio (minimum length)
  if (target.name === 'bio') {
    if (target.value.trim().length < 40) {
      target.setCustomValidity('Bio must be at least 40 characters long.');
    } else {
      target.setCustomValidity('');
    }
  }

  // 1.3 custom validation for email (basic '@' symbol check)
  if (target.name === 'email') {
    // OPTIONAL - use the following to enable pattern check
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailPattern.test(target.value)) {
    //   target.setCustomValidity('Please enter a valid email address.');
    if (!target.value.includes('@')) {
      target.setCustomValidity('Email must contain an "@" symbol.');
    } else {
      target.setCustomValidity('');
    }
  }

  // 1.4 report the validity status to the user
  target.reportValidity();
});
