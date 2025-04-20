function caesarCipher (string, shift) {
    return string.replace(/[a-zA-Z]/g, function(c) {
      const base = c < 'a' ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
    });
    
  }
  
  function translate() {
    let plaintextValue = document.getElementById("plaintext").value;
    let shiftValue = parseInt(document.getElementById("shift").value);
  
    let outputValue = caesarCipher(plaintextValue, shiftValue);
    document.getElementById("output").innerHTML = outputValue;
  }

document.getElementById("plaintext").addEventListener("input", translate);
document.getElementById("shift").addEventListener("input", translate);