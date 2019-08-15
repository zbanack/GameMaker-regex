# Regular expressions in GameMaker Studio 2 (HTML5 export only)

**Notes:**
* HTML5 export only at the moment. A .js extension actually does the regex.
* Escape backslashes in regular expression strings!
* Ensure regex matches is_array() before performing operations

## How to use:
After importing the .yy extension:
```
var matches = regex("The quick brown fox jumps over the lazy dog.",
  "\/\\b(\\w*[a-zA-Z]\\w*)\\b\/g");

if (is_array(matches)) {
  show_debug_message(matches);
}
```

## Author
- [Zack Banack](https://www.zackbanack.com/)
