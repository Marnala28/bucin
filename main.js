document.getElementById('yes-button').addEventListener('click', function() {
    window.location.href = 'yes.html';
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('response').innerText = "Harus Mauk ";
});
