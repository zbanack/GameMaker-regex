/// @author Zack Banack <zackbanack.com>
// backslashes must be escaped!
var matches = regex("The quick brown fox jumps over the lazy dog.", "\/\\b(\\w*[a-zA-Z]\\w*)\\b\/g");

if (is_array(matches)) show_debug_message(matches);  