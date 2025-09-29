function init() {
  const deviceInfoEl = document.getElementById('deviceInfo');
  const model = detectIPhoneModel();

  if (!model) {
    // Detect if desktop or non-iPhone
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    if (!isMobile) {
      deviceInfoEl.textContent = "You are on a PC or non-iPhone device.";
    } else {
      deviceInfoEl.textContent = "You are not using an iPhone or we couldn't detect your device.";
    }
    displayJailbreaks([
      {name: "Checkra1n", desc: "Supports devices from iPhone 5s to iPhone X."},
      {name: "Unc0ver", desc: "Supports iOS 11 to 14."}
    ]);
    return;
  }

  deviceInfoEl.textContent = `Detected device: ${model}`;
  const jailbreaks = getJailbreaksForModel(model);
  displayJailbreaks(jailbreaks);
}// Detect iPhone model based on screen size and user agent
function detectIPhoneModel() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  if (!/iPhone/.test(ua)) return null;

  const maxDim = Math.max(window.screen.height, window.screen.width);
  const minDim = Math.min(window.screen.height, window.screen.width);

  if (maxDim === 480) return "iPhone 4 or 4S";
  if (maxDim === 568) return "iPhone 5, 5C, 5S, SE (1st gen)";
  if (maxDim === 667) return "iPhone 6, 6S, 7, 8, SE (2nd gen)";
  if (maxDim === 736) return "iPhone 6 Plus, 6S Plus, 7 Plus, 8 Plus";
  if (maxDim === 812) {
    if (minDim === 375) return "iPhone X, XS, 11 Pro";
    if (minDim === 390) return "iPhone 12 Mini";
  }
  if (maxDim === 844) return "iPhone 12, 12 Pro";
  if (maxDim === 896) {
    if (minDim === 414) return "iPhone XR, 11, 11 Pro Max, XS Max";
    return "iPhone XR, 11";
  }
  if (maxDim === 926) return "iPhone 12 Pro Max";

  return "Unknown iPhone Model";
}

// Jailbreaks available by device model
function getJailbreaksForModel(model) {
  const jailbreaks = {
    "iPhone 4 or 4S": [
      {name: "Spirit", desc: "Jailbreak for iOS 3.1.3 to 4.0."},
      {name: "Greenpois0n", desc: "Jailbreak for iOS 4.1 to 4.2.1."}
    ],
    "iPhone 5, 5C, 5S, SE (1st gen)": [
      {name: "Evasi0n7", desc: "Supports iOS 7."},
      {name: "Pangu", desc: "Supports iOS 7.1.x."}
    ],
    "iPhone 6, 6S, 7, 8, SE (2nd gen)": [
      {name: "Unc0ver", desc: "Supports iOS 11 to 14."},
      {name: "Electra", desc: "Jailbreak for iOS 11."},
      {name: "Taurine", desc: "Supports iOS 14.0 to 14.3."}
    ],
    "iPhone 6 Plus, 6S Plus, 7 Plus, 8 Plus": [
      {name: "Unc0ver", desc: "Supports iOS 11 to 14."},
      {name: "Checkra1n", desc: "Supports up to iPhone X with bootrom exploit."},
      {name: "Taurine", desc: "Supports iOS 14.0 to 14.3."}
    ],
    "iPhone X, XS, 11 Pro": [
      {name: "Checkra1n", desc: "Semi-tethered jailbreak using checkm8 bootrom exploit."},
      {name: "Unc0ver", desc: "Supports some iOS 11-14 versions."}
    ],
    "iPhone 12 Mini": [
      {name: "Unc0ver", desc: "Supports early iOS 14 versions."}
    ],
    "iPhone 12, 12 Pro": [
      {name: "Unc0ver", desc: "Supports early iOS 14 versions."},
      {name: "Taurine", desc: "Supports iOS 14.0 to 14.3."}
    ],
    "iPhone XR, 11, 11 Pro Max, XS Max": [
      {name: "Unc0ver", desc: "Supports iOS 11 to 14."},
      {name: "Checkra1n", desc: "Bootrom exploit-based jailbreak."}
    ],
    "iPhone 12 Pro Max": [
      {name: "Unc0ver", desc: "Supports early iOS 14 versions."}
    ],
    "Unknown iPhone Model": []
  };

  return jailbreaks[model] || jailbreaks["Unknown iPhone Model"];
}

// Update the jailbreak list in the DOM
function displayJailbreaks(jailbreaks) {
  const listEl = document.getElementById('jailbreakList');
  listEl.innerHTML = '';

  if (!jailbreaks.length) {
    listEl.innerHTML = '<li><strong>Your iPhone model or iOS version is not currently jailbreakable.</strong></li>';
    return;
  }

  jailbreaks.forEach(jb => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${jb.name}</strong> ${jb.desc}`;
    listEl.appendChild(li);
  });
}

// Initialize on page load
function init() {
  const deviceInfoEl = document.getElementById('deviceInfo');
  const model = detectIPhoneModel();

  if (!model) {
    deviceInfoEl.textContent = "You are not using an iPhone or we couldn't detect your device.";
    displayJailbreaks([
      {name: "Checkra1n", desc: "Supports devices from iPhone 5s to iPhone X."},
      {name: "Unc0ver", desc: "Supports iOS 11 to 14."}
    ]);
    return;
  }

  deviceInfoEl.textContent = `Detected device: ${model}`;
  const jailbreaks = getJailbreaksForModel(model);
  displayJailbreaks(jailbreaks);
}

window.onload = init;
