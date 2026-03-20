
# HIDUTIL key remapping generator for MacOS ⌨

Basic MacOS key remapping without external software using [hidutil](https://developer.apple.com/library/archive/technotes/tn2450/_index.html). With most of the key remapping software not working in MacOS Big Sur Beta, this is the easiest way to do it.

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

For GitHub Pages, the site files now live at the repository root, so publishing from the default Pages source works.

If you prefer `npm`, there is also a thin wrapper script:

`npm start`
