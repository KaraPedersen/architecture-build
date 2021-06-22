const form = document.getElementById('create-account');
const balance = document.getElementById('balance');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fd = new FormData(event.target);

  const res = await fetch('/api/v1/profiles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: fd.get('email'),
      accountId: fd.get('accountId'),
    }),
  });
  const json = await res.json();

  window.location = `/?id=${json.id}`;
});

const params = new URLSearchParams(window.location.search);

fetch(`/api/v1/profiles/${params.get('id')}`)
  .then((res) => res.json())
  .then((profile) => {
    balance.textContent = profile.balance;
  });
