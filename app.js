const STORAGE_KEY = "hidutil-keys";

const KEY_GROUPS = [
  {
    group: "Modifier keys",
    keys: [
      { key: "caps lock", hex: 0x39 },
      { key: "left control", hex: 0xe0 },
      { key: "left shift", hex: 0xe1 },
      { key: "left option", hex: 0xe2 },
      { key: "left command", hex: 0xe3 },
      { key: "right control", hex: 0xe4 },
      { key: "right shift", hex: 0xe5 },
      { key: "right option", hex: 0xe6 },
      { key: "right command", hex: 0xe7 },
      { key: "fn", hex: 0x0003 + 0xff00000000 - 0x700000000 }
    ]
  },
  {
    group: "Controls and symbols",
    keys: [
      { key: "return", hex: 0x28 },
      { key: "escape", hex: 0x29 },
      { key: "delete", hex: 0x2a },
      { key: "tab", hex: 0x2b },
      { key: "space", hex: 0x2c },
      { key: "-", hex: 0x2d },
      { key: "=", hex: 0x2e },
      { key: "[", hex: 0x2f },
      { key: "]", hex: 0x30 },
      { key: "\\", hex: 0x31 },
      { key: ";", hex: 0x33 },
      { key: "'", hex: 0x34 },
      { key: "`", hex: 0x35 },
      { key: ",", hex: 0x36 },
      { key: ".", hex: 0x37 },
      { key: "/", hex: 0x38 }
    ]
  },
  {
    group: "Arrow keys",
    keys: [
      { key: "up", hex: 0x52 },
      { key: "down", hex: 0x51 },
      { key: "left", hex: 0x50 },
      { key: "right", hex: 0x4f }
    ]
  },
  {
    group: "Letter keys",
    keys: [
      { key: "a", hex: 0x04 },
      { key: "b", hex: 0x05 },
      { key: "c", hex: 0x06 },
      { key: "d", hex: 0x07 },
      { key: "e", hex: 0x08 },
      { key: "f", hex: 0x09 },
      { key: "g", hex: 0x0a },
      { key: "h", hex: 0x0b },
      { key: "i", hex: 0x0c },
      { key: "j", hex: 0x0d },
      { key: "k", hex: 0x0e },
      { key: "l", hex: 0x0f },
      { key: "m", hex: 0x10 },
      { key: "n", hex: 0x11 },
      { key: "o", hex: 0x12 },
      { key: "p", hex: 0x13 },
      { key: "q", hex: 0x14 },
      { key: "r", hex: 0x15 },
      { key: "s", hex: 0x16 },
      { key: "t", hex: 0x17 },
      { key: "u", hex: 0x18 },
      { key: "v", hex: 0x19 },
      { key: "w", hex: 0x1a },
      { key: "x", hex: 0x1b },
      { key: "y", hex: 0x1c },
      { key: "z", hex: 0x1d }
    ]
  },
  {
    group: "Number keys",
    keys: [
      { key: "1", hex: 0x1e },
      { key: "2", hex: 0x1f },
      { key: "3", hex: 0x20 },
      { key: "4", hex: 0x21 },
      { key: "5", hex: 0x22 },
      { key: "6", hex: 0x23 },
      { key: "7", hex: 0x24 },
      { key: "8", hex: 0x25 },
      { key: "9", hex: 0x26 },
      { key: "0", hex: 0x27 }
    ]
  },
  {
    group: "Function keys",
    keys: [
      { key: "f1", hex: 0x3a },
      { key: "f2", hex: 0x3b },
      { key: "f3", hex: 0x3c },
      { key: "f4", hex: 0x3d },
      { key: "f5", hex: 0x3e },
      { key: "f6", hex: 0x3f },
      { key: "f7", hex: 0x40 },
      { key: "f8", hex: 0x41 },
      { key: "f9", hex: 0x42 },
      { key: "f10", hex: 0x43 },
      { key: "f11", hex: 0x44 },
      { key: "f12", hex: 0x45 }
    ]
  }
];

const KEYBOARD_LAYOUT = [
  [
    { code: "Escape", label: "esc", width: 1.15 },
    { code: "F1", label: "F1" },
    { code: "F2", label: "F2" },
    { code: "F3", label: "F3" },
    { code: "F4", label: "F4" },
    { code: "F5", label: "F5" },
    { code: "F6", label: "F6" },
    { code: "F7", label: "F7" },
    { code: "F8", label: "F8" },
    { code: "F9", label: "F9" },
    { code: "F10", label: "F10" },
    { code: "F11", label: "F11" },
    { code: "F12", label: "F12" },
    { code: "Backspace", label: "delete", width: 1.7 }
  ],
  [
    { code: "Backquote", label: "`", sublabel: "~" },
    { code: "Digit1", label: "1", sublabel: "!" },
    { code: "Digit2", label: "2", sublabel: "@" },
    { code: "Digit3", label: "3", sublabel: "#" },
    { code: "Digit4", label: "4", sublabel: "$" },
    { code: "Digit5", label: "5", sublabel: "%" },
    { code: "Digit6", label: "6", sublabel: "^" },
    { code: "Digit7", label: "7", sublabel: "&" },
    { code: "Digit8", label: "8", sublabel: "*" },
    { code: "Digit9", label: "9", sublabel: "(" },
    { code: "Digit0", label: "0", sublabel: ")" },
    { code: "Minus", label: "-", sublabel: "_" },
    { code: "Equal", label: "=", sublabel: "+" }
  ],
  [
    { code: "Tab", label: "tab", width: 1.45 },
    { code: "KeyQ", label: "Q" },
    { code: "KeyW", label: "W" },
    { code: "KeyE", label: "E" },
    { code: "KeyR", label: "R" },
    { code: "KeyT", label: "T" },
    { code: "KeyY", label: "Y" },
    { code: "KeyU", label: "U" },
    { code: "KeyI", label: "I" },
    { code: "KeyO", label: "O" },
    { code: "KeyP", label: "P" },
    { code: "BracketLeft", label: "[", sublabel: "{" },
    { code: "BracketRight", label: "]", sublabel: "}" },
    { code: "Backslash", label: "\\", sublabel: "|" }
  ],
  [
    { code: "CapsLock", label: "caps", width: 1.8 },
    { code: "KeyA", label: "A" },
    { code: "KeyS", label: "S" },
    { code: "KeyD", label: "D" },
    { code: "KeyF", label: "F" },
    { code: "KeyG", label: "G" },
    { code: "KeyH", label: "H" },
    { code: "KeyJ", label: "J" },
    { code: "KeyK", label: "K" },
    { code: "KeyL", label: "L" },
    { code: "Semicolon", label: ";", sublabel: ":" },
    { code: "Quote", label: "'", sublabel: "\"" },
    { code: "Enter", label: "return", width: 2.1 }
  ],
  [
    { code: "ShiftLeft", label: "shift", width: 2.35 },
    { code: "KeyZ", label: "Z" },
    { code: "KeyX", label: "X" },
    { code: "KeyC", label: "C" },
    { code: "KeyV", label: "V" },
    { code: "KeyB", label: "B" },
    { code: "KeyN", label: "N" },
    { code: "KeyM", label: "M" },
    { code: "Comma", label: ",", sublabel: "<" },
    { code: "Period", label: ".", sublabel: ">" },
    { code: "Slash", label: "/", sublabel: "?" },
    { code: "ShiftRight", label: "shift", width: 1.85 },
    { code: "ArrowUp", label: "up" }
  ],
  [
    { code: "Fn", label: "fn", width: 1.05, interactive: false },
    { code: "ControlLeft", label: "control", width: 1.2 },
    { code: "AltLeft", label: "option", width: 1.2 },
    { code: "MetaLeft", label: "command", width: 1.55 },
    { code: "Space", label: "space", width: 5.5 },
    { code: "MetaRight", label: "command", width: 1.55 },
    { code: "AltRight", label: "option", width: 1.2 },
    { code: "ArrowLeft", label: "left" },
    { code: "ArrowDown", label: "down" },
    { code: "ArrowRight", label: "right" }
  ]
];

const CODE_TO_HEX = {
  Escape: "29",
  F1: "3a",
  F2: "3b",
  F3: "3c",
  F4: "3d",
  F5: "3e",
  F6: "3f",
  F7: "40",
  F8: "41",
  F9: "42",
  F10: "43",
  F11: "44",
  F12: "45",
  Backspace: "2a",
  Backquote: "35",
  Digit1: "1e",
  Digit2: "1f",
  Digit3: "20",
  Digit4: "21",
  Digit5: "22",
  Digit6: "23",
  Digit7: "24",
  Digit8: "25",
  Digit9: "26",
  Digit0: "27",
  Minus: "2d",
  Equal: "2e",
  Tab: "2b",
  KeyQ: "14",
  KeyW: "1a",
  KeyE: "08",
  KeyR: "15",
  KeyT: "17",
  KeyY: "1c",
  KeyU: "18",
  KeyI: "0c",
  KeyO: "12",
  KeyP: "13",
  BracketLeft: "2f",
  BracketRight: "30",
  Backslash: "31",
  CapsLock: "39",
  KeyA: "04",
  KeyS: "16",
  KeyD: "07",
  KeyF: "09",
  KeyG: "0a",
  KeyH: "0b",
  KeyJ: "0d",
  KeyK: "0e",
  KeyL: "0f",
  Semicolon: "33",
  Quote: "34",
  Enter: "28",
  ShiftLeft: "e1",
  KeyZ: "1d",
  KeyX: "1b",
  KeyC: "06",
  KeyV: "19",
  KeyB: "05",
  KeyN: "11",
  KeyM: "10",
  Comma: "36",
  Period: "37",
  Slash: "38",
  ShiftRight: "e5",
  ArrowUp: "52",
  ControlLeft: "e0",
  AltLeft: "e2",
  MetaLeft: "e3",
  Space: "2c",
  MetaRight: "e7",
  AltRight: "e6",
  ArrowLeft: "50",
  ArrowDown: "51",
  ArrowRight: "4f"
};

const keyboardElement = document.getElementById("keyboard");
const statusElement = document.getElementById("keyboard-status");
const clearSelectedButton = document.getElementById("clear-selected");
const clearAllButton = document.getElementById("clear-all");
const copyButton = document.getElementById("copy-config");
const resultContent = document.getElementById("result-content");

const KEY_DEFINITIONS = new Map(
  KEYBOARD_LAYOUT
    .flat()
    .filter((key) => CODE_TO_HEX[key.code])
    .map((key) => [
      key.code,
      {
        code: key.code,
        from: CODE_TO_HEX[key.code],
        label: key.label
      }
    ])
);

let mappings = loadMappings();
let selectedCode = null;

function normalizeStoredMappings(storedMappings) {
  if (!Array.isArray(storedMappings)) {
    return [];
  }

  return storedMappings.filter((mapping) => {
    if (!mapping || typeof mapping.code !== "string" || typeof mapping.to !== "string") {
      return false;
    }

    const definition = KEY_DEFINITIONS.get(mapping.code);
    return Boolean(definition && mapping.to && mapping.to !== definition.from);
  });
}

function loadMappings() {
  try {
    return normalizeStoredMappings(JSON.parse(window.localStorage.getItem(STORAGE_KEY)));
  } catch {
    return [];
  }
}

function saveMappings() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mappings));
}

function keyToValueId(key) {
  return `0x${(0x700000000 + Number.parseInt(key, 16)).toString(16).toUpperCase()}`;
}

function getMapping(code) {
  return mappings.find((mapping) => mapping.code === code) || null;
}

function getLabelForHex(hex) {
  const hexValue = Number.parseInt(hex, 16);
  const match = KEY_GROUPS.flatMap((group) => group.keys).find((key) => key.hex === hexValue);
  return match ? match.key : hex.toUpperCase();
}

function generateKeyMapsConfig() {
  const config = mappings
    .map(({ code, to }) => {
      const definition = KEY_DEFINITIONS.get(code);
      return definition ? `{
              "HIDKeyboardModifierMappingSrc": ${keyToValueId(definition.from)},
              "HIDKeyboardModifierMappingDst": ${keyToValueId(to)}
            }` : "";
    })
    .filter(Boolean)
    .join(",\r\n            ");

  return config ? `\r\n            ${config}\r\n` : "";
}

function generateConfig() {
  return `hidutil property --set '{"UserKeyMapping":[${generateKeyMapsConfig()}]}'`;
}

function setStatus() {
  if (!selectedCode) {
    statusElement.textContent = "Select a key to start remapping.";
    return;
  }

  const definition = KEY_DEFINITIONS.get(selectedCode);
  const mapping = getMapping(selectedCode);
  if (!definition) {
    statusElement.textContent = "Select a key to start remapping.";
    return;
  }

  if (mapping) {
    statusElement.textContent = `${definition.label} is mapped to ${getLabelForHex(mapping.to)}. Press another key to change it, or clear it.`;
    return;
  }

  statusElement.textContent = `${definition.label} is selected. Press a key on your keyboard to remap it.`;
}

function createKeyButton(key) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "key";
  button.style.flex = `${key.width || 1} 1 0`;
  button.dataset.code = key.code;
  button.disabled = key.interactive === false;

  const label = document.createElement("span");
  label.className = "key__label";
  label.textContent = key.label;
  button.appendChild(label);

  if (key.sublabel) {
    const sublabel = document.createElement("span");
    sublabel.className = "key__subtext";
    sublabel.textContent = key.sublabel;
    button.appendChild(sublabel);
  }

  if (KEY_DEFINITIONS.has(key.code)) {
    const mapping = document.createElement("span");
    mapping.className = "key__mapping";
    button.appendChild(mapping);
  }

  return button;
}

function renderKeyboard() {
  keyboardElement.replaceChildren();

  KEYBOARD_LAYOUT.forEach((rowDefinition) => {
    const row = document.createElement("div");
    row.className = "keyboard__row";

    rowDefinition.forEach((key) => {
      row.appendChild(createKeyButton(key));
    });

    keyboardElement.appendChild(row);
  });
}

function updateKeyboardState() {
  keyboardElement.querySelectorAll(".key").forEach((button) => {
    if (!(button instanceof HTMLButtonElement) || !button.dataset.code) {
      return;
    }

    const code = button.dataset.code;
    const mapping = getMapping(code);
    button.classList.toggle("is-selected", code === selectedCode);
    button.classList.toggle("is-remapped", Boolean(mapping));

    const mappingElement = button.querySelector(".key__mapping");
    if (mappingElement) {
      mappingElement.textContent = mapping ? `-> ${getLabelForHex(mapping.to)}` : "";
    }
  });
}

function renderResult() {
  resultContent.textContent = generateConfig();
}

function render() {
  saveMappings();
  if (!keyboardElement.childElementCount) {
    renderKeyboard();
  }
  updateKeyboardState();
  setStatus();
  renderResult();
}

function setMapping(code, targetHex) {
  const definition = KEY_DEFINITIONS.get(code);
  if (!definition) {
    return;
  }

  if (!targetHex || targetHex === definition.from) {
    mappings = mappings.filter((mapping) => mapping.code !== code);
    return;
  }

  const existingIndex = mappings.findIndex((mapping) => mapping.code === code);
  if (existingIndex >= 0) {
    mappings[existingIndex] = { code, to: targetHex };
  } else {
    mappings = [...mappings, { code, to: targetHex }];
  }
}

function getNextKeyInRow(code) {
  for (const row of KEYBOARD_LAYOUT) {
    const index = row.findIndex((key) => key.code === code);
    if (index === -1) {
      continue;
    }

    for (let nextIndex = index + 1; nextIndex < row.length; nextIndex += 1) {
      const nextKey = row[nextIndex];
      if (nextKey.interactive !== false && KEY_DEFINITIONS.has(nextKey.code)) {
        return nextKey.code;
      }
    }

    return code;
  }

  return code;
}

keyboardElement.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }

  const keyButton = target.closest(".key");
  if (!(keyButton instanceof HTMLButtonElement) || keyButton.disabled || !keyButton.dataset.code) {
    return;
  }

  selectedCode = keyButton.dataset.code;
  render();
});

window.addEventListener("keydown", (event) => {
  if (!selectedCode) {
    return;
  }

  if (event.metaKey || event.ctrlKey) {
    return;
  }

  const targetHex = CODE_TO_HEX[event.code];
  if (!targetHex) {
    return;
  }

  event.preventDefault();
  setMapping(selectedCode, targetHex);
  selectedCode = getNextKeyInRow(selectedCode);
  render();
});

clearSelectedButton.addEventListener("click", () => {
  if (!selectedCode) {
    return;
  }

  mappings = mappings.filter((mapping) => mapping.code !== selectedCode);
  render();
});

clearAllButton.addEventListener("click", () => {
  mappings = [];
  render();
});

copyButton.addEventListener("click", async () => {
  const config = generateConfig();

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(config);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = config;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1200);
  } catch {
    copyButton.textContent = "Copy failed";
    window.setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1200);
  }
});

render();
