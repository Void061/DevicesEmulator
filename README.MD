# Install project dependences
```npm i```

# Install specific browser
```npx playwright install webkit```

# Install dependences (browser & compatibility)
```npx playwright install-deps```

# Run devices emulator
```npm run test:iphone```
```npm run test:ipad```
```npm run test:android```
```npm run test:tablet```

# Delete all browsers
```npx playwright uninstall --all```

# Configurations
- In configurations.ts you can edit ```TARGET_URL```
- Insert your target website remote or local,

# Default configuration
By default the TARGET_URL is https://www.deviceinfo.me/ that detect your current device running on emulator.

# Important
The emulator, render by the default rendering engine, example for Safari, webkit, so the visualization may not be exactly the real one in new devices