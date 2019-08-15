/**
 * @function gm_regex(str, reg)
 * @param {String} str - Input string
 * @param {String} reg - Regular expression string
 * @returns {array | -1}
 * @author Zack Banack
 *
 * @example In GameMaker, after importing extension:
 *
 * var matches = regex("The quick brown fox jumps over the lazy dog.",
 *      "\/\\b(\\w*[a-zA-Z]\\w*)\\b\/g");
 *
 * // matches = {"The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"}
 *
 * if (is_array(matches)) {
 *      // do stuff  
 * }
 *
 */
function gm_regex(str, reg) {

    // flags
    let flags = reg.replace(/.*\/([gimuy]*)$/, '$1');
    if (flags === reg) flags = '';

    // pattern
    let pattern = reg;
    if (flags) pattern = reg.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');

    try {
        // perform regex, return matches as array
        let cleaned_reg = new RegExp(pattern, flags);
        return str.match(cleaned_reg);
    } catch (e) {
        return -1;
    }
}