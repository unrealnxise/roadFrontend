let isCooldown = false;

function onScanSuccess(decodedText, decodedResult) {
    if (!isCooldown) {
        // Виконуємо код сканування
        console.log(`Code matched = ${decodedText}`, decodedResult);
        document.getElementById("text").value += decodedText + "\n";
        document.getElementById("scan").play();

        // Встановлюємо кулдаун
        isCooldown = true;
        setTimeout(() => {
            isCooldown = false;
        }, 3000);
    }
}
  
function onScanFailure(error) {
// handle scan failure, usually better to ignore and keep scanning.
// for example:
console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
"reader",
{ fps: 10, qrbox: {width: 250, height: 250} },
/* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

function download() {
    // Отримати текст із textarea
    const text = document.getElementById('text').value;
    
    // Створити Blob з текстом
    const blob = new Blob([text], { type: 'text/plain' });
    
    // Створити URL для Blob
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'скан.txt';
    document.body.appendChild(a);
    a.click();
    
    URL.revokeObjectURL(url);
    a.remove();
}