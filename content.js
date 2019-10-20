let gmailLocation = '';

function checkChanges(event) {
  const inputs = document.querySelectorAll('input[name="to"]')
  if(inputs.length > 1 && document.location.href != gmailLocation) {
    alert('There are more then one person in TO filed');
    gmailLocation = document.location.href;
  }
}

document.addEventListener('DOMNodeInserted', checkChanges);
