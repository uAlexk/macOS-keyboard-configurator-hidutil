https://ualexk.github.io/macOS-keyboard-configurator-hidutil/

# HIDUTIL key remapping generator for MacOS ⌨

Basic MacOS key remapping without external software using [hidutil](https://developer.apple.com/library/archive/technotes/tn2450/_index.html). 

## Instructions

1. Open the [hidutil generator tool](https://hidutil-generator.netlify.app/)
2. Click a key on the on-screen MacBook keyboard
3. Press the key you want it to become
4. Repeat for any other remaps you want
5. Copy the generated `hidutil property --set '...'` command
6. Run it in Terminal

## Setting up locally

This version has no third-party dependencies or build step.

Run it with Python's built-in static file server:

`python3 -m http.server 3000`

Then open [http://localhost:3000](http://localhost:3000).

If you prefer `npm`, there is also a thin wrapper script:

`npm start`
