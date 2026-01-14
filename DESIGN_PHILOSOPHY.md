# Design Philosophy

## Project Overview
This is a market economy simulator where firms trade and retail goods and services for profit. The application is built incrementally, feature by feature.

## Core Principles

### 1. Minimal Implementation Only
- Implement ONLY what is explicitly requested
- No extra features, no "nice-to-haves", no anticipatory code
- If it wasn't asked for, don't add it

### 2. Simplicity Over Cleverness
- Choose the simplest solution that works
- Avoid abstractions until they're needed
- Prefer straightforward code over elegant architectures
- Three lines of similar code is better than a premature abstraction

### 3. No Flair or Polish
- No styling improvements unless requested
- No refactoring of existing code unless necessary
- No code cleanup in unchanged areas
- No additional error messages or user feedback beyond requirements

### 4. Incremental Changes
- Each feature request should result in one focused change
- Don't build for future features
- Don't add extensibility "just in case"
- Trust that the next request will come when needed

## What NOT to Do

### ❌ Don't Add Extra Features
```
Request: "Add a button to create a new firm"
BAD: Add button + confirmation dialog + undo functionality + keyboard shortcut
GOOD: Add button that creates a new firm
```

### ❌ Don't Add Unnecessary Abstractions
```
Request: "Display firm name and profit"
BAD: Create a FirmDataFormatter class with multiple display methods
GOOD: Display the firm name and profit directly
```

### ❌ Don't Add Validation Beyond Requirements
```
Request: "Let users set firm name"
BAD: Add name length limits + special character validation + duplicate checking
GOOD: Allow users to set firm name
```

### ❌ Don't Add Configuration Options
```
Request: "Firms should have a starting cash of $1000"
BAD: Add configurable starting cash with UI controls
GOOD: Set starting cash to $1000
```

### ❌ Don't Refactor Existing Code
```
Request: "Add a new property to firms"
BAD: Add property + restructure existing firm code + add comments to old code
GOOD: Add the new property
```

## What TO Do

### ✓ Implement Exactly What's Requested
```
Request: "Add a profit calculation"
GOOD: Add the calculation with the specified formula
```

### ✓ Use the Simplest Approach
```
Request: "Store firm data"
GOOD: Use a simple array or object
NOT: Set up a database, ORM, or complex state management (unless explicitly requested)
```

### ✓ Make It Work First
```
GOOD: Working feature with straightforward code
NOT: Elegant but incomplete solution
```

### ✓ Trust the Process
```
GOOD: Implement feature A now, wait for request to add feature B
NOT: Implement feature A with hooks for future feature B
```

## Implementation Checklist

Before adding any code, ask:
1. Was this explicitly requested?
2. Is this the simplest way to do it?
3. Am I adding anything extra?
4. Am I changing code that wasn't mentioned?
5. Am I building for future requirements?

If you answer "yes" to questions 3, 4, or 5, stop and simplify.

## Acceptable "Extras"

The following are acceptable without explicit request:
- Basic HTML structure for new files (html, head, body tags)
- Script/style tags needed for functionality to work
- Minimal DOM event handlers required for interactivity
- Console logs for debugging critical errors (not for general logging)
- Function comments (see below)

## Function Comments

All functions must include a brief comment block explaining:
1. Purpose of the function (one line)
2. Arguments (parameter name and type)
3. Return value (type and description)
4. Usage example

Format:
```javascript
// Brief description of what the function does
// Arguments: param1 (type), param2 (type)
// Returns: returnValue (type)
// Usage: functionName(example1, example2)
function functionName(param1, param2) {
    // implementation
}
```

Keep comments concise and factual. No verbose explanations or implementation details.

## Technology Approach

### Start Simple
- Begin with single HTML file + inline CSS/JS
- Only separate files when explicitly requested or file becomes unwieldy (>500 lines)
- Use vanilla JavaScript unless a library is specifically requested
- No build tools, bundlers, or frameworks unless requested

### Avoid Premature Optimization
- Don't optimize for performance unless there's a demonstrated problem
- Don't optimize for scale unless requested
- Don't add caching, memoization, or other optimizations speculatively

### No Defensive Programming
- Don't add try-catch blocks everywhere
- Don't validate inputs that are guaranteed by the code structure
- Don't handle edge cases that can't occur
- Only validate at system boundaries (user input, if requested)

## Arithmetic Operations

### BigNumber.js Requirement
- ALL arithmetic operations in the program MUST use BigNumber.js methods
- NEVER use JavaScript's default arithmetic operators (+, -, *, /, %) for calculations
- Use BigNumber methods: `.plus()`, `.minus()`, `.times()`, `.dividedBy()`, `.modulo()`
- This ensures precision and consistency across all numerical operations

### Asset Quantity Parameters
- Functions dealing with asset quantities should natively accept BigNumber instances as parameters
- These functions should also accept standard JavaScript numbers that are immediately converted to BigNumber
- When converting to BigNumber, immediately set decimal places to match the relevant assetType's maxDecimals
- Conversion pattern: `const bigQuantity = (quantity instanceof BigNumber ? quantity : new BigNumber(quantity)).decimalPlaces(assetType.maxDecimals);`
- This conversion pattern applies ONLY to parameters representing quantities in an asset instance
- Other numeric values (like maxDecimals, liabilities, etc.) do not require this conversion pattern

## Communication

When receiving a feature request:
1. Confirm understanding if unclear
2. Implement exactly what was requested
3. Report what was done
4. Don't suggest improvements or next steps unless asked

## Summary

**Every feature should be the minimum viable implementation of what was requested, nothing more.**

When in doubt, do less. The next request will come if more is needed.
