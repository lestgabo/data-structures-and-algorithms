/**
 ** 722. Remove Comments
 ** Medium
 ** https://leetcode.com/problems/remove-comments/
 */

// Given a C++ program, remove comments from it. The program source is an array where source[i] is the i-th line of the source code.
// This represents the result of splitting the original source code string by the newline character \n.

// In C++, there are two types of comments, line comments, and block comments.

// The string // denotes a line comment, which represents that it and rest of the characters to the right of it in the same line should be ignored.

// The string /* denotes a block comment, which represents that all characters until the next (non-overlapping) occurrence of */ should be ignored.
// (Here, occurrences happen in reading order: line by line from left to right.) To be clear, the string /*/ does not yet end the block comment, as the ending would be overlapping the beginning.

// The first effective comment takes precedence over others: if the string // occurs in a block comment, it is ignored.
// Similarly, if the string /* occurs in a line or block comment, it is also ignored.

/* If a certain line of code is empty after removing comments, you must not output that line: each string in the answer list will be non-empty. */

// There will be no control characters, single quote, or double quote characters. For example, source = "string s = "/* Not a comment. */";" will not be a test case.
// (Also, nothing else such as defines or macros will interfere with the comments.)

// It is guaranteed that every open block comment will eventually be closed, so /* outside of a line or block comment always starts a new comment.

/* Finally, implicit newline characters can be deleted by block comments. Please see the examples below for details. */

// After removing the comments from the source code, return the source code in the same format.

// Example 1:

// Input:
// source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]

// The line by line code is visualized as below:
// /*Test program */
// int main()
// {
//   // variable declaration
// int a, b, c;
// /* This is a test
//    multiline
//    comment for
//    testing */
// a = b + c;
// }

// Output: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]

// The line by line code is visualized as below:
// int main()
// {

// int a, b, c;
// a = b + c;
// }

// Explanation:
// The string /* denotes a block comment, including line 1 and lines 6-9. The string // denotes line 4 as comments.

// Example 2:

// Input:
/// source = ["a/*comment", "line", "more_comment*/b"]
// Output: ["ab"]
// Explanation: The original source string is "a/*comment\nline\nmore_comment*/b", where we have bolded the newline characters.
// After deletion, the implicit newline characters are deleted, leaving the string "ab", which when delimited by newline characters becomes ["ab"].

// Note:
// The length of source is in the range [1, 100].
// The length of source[i] is in the range [0, 80].
// Every open block comment is eventually closed.
// There are no single-quote, double-quote, or control characters in the source code.

/**
 * @param {string[]} source
 * @return {string[]}
 */
// correct on 23/55 test cases only -> too complicated
var removeComments2 = function (source) {
    // find the index of a found '//' in an array and delete everything in that array after the '//'
    // find the index of a found '/*', toggle a boolean to deleting
    // until we find '*/' then stop deleting, toggling the boolean
    this.blockComment = false;
    this.blockCommentInBetween = false;
    let commentsRemoved = [];
    for (let i = 0; i < source.length; i++) {
        let line = source[i];
        let localLine = [];
        if (line.includes('//') && this.blockComment === false) {
            // console.log('found // in: ', line);
            let lineCommentIndex = line.indexOf('//');
            line = line.slice(0, lineCommentIndex);
            // console.log('new line: ', line);
        }
        if (line.includes('/*') && this.blockComment === false) {
            this.blockComment = true;
            // console.log('found /* in: ', line);
            let blockCommentStartIndex = line.indexOf('/*');
            let blockCommentEndIndex = -1;
            localLine.push(line.slice(0, blockCommentStartIndex));
            if (line.includes('*/')) {
                this.blockComment = false;
                this.blockCommentInBetween = false;
                blockCommentEndIndex = line.indexOf('*/') + 2;
                localLine.push(line.slice(blockCommentEndIndex, line.length));
            } else {
                this.blockCommentInBetween = true;
            }
            // console.log('localLine: ', localLine);
            // remove empty strings
            localLine = localLine.filter((x) => x);
            line = localLine.join('');
            // console.log('line: ', line);
            // console.log('localLine: ', localLine);
        }
        if (this.blockComment === true) {
            this.blockCommentInBetween = true;
            let blockCommentEndIndex = -1;
            if (line.includes('*/')) {
                this.blockComment = false;
                this.blockCommentInBetween = false;
                blockCommentEndIndex = line.indexOf('*/') + 2;
                localLine.push(line.slice(blockCommentEndIndex, line.length));
            } else {
                line = '';
            }
            // remove empty strings
            localLine = localLine.filter((x) => x);
            line = localLine.join('');
        }

        commentsRemoved.push(line);
        commentsRemoved = commentsRemoved.filter((x) => x);
        // console.log('this.blockCommentInBetween: ', this.blockCommentInBetween);
        if (this.blockCommentInBetween === true) {
            this.blockCommentInBetween = false;
            commentsRemoved = commentsRemoved.join('');
            commentsRemoved = [commentsRemoved];
        }
        console.log('commentsRemoved: ', commentsRemoved);
    }
    // remove empty strings
    commentsRemoved = commentsRemoved.filter((x) => x);
    // console.log('comments Removed: ', commentsRemoved);
    return commentsRemoved;
};

const removeComments = (source) => {
    let answer = [];
    let insideBlockComment = false;
    let localLine = '';
    for (let j = 0; j < source.length; j++) {
        let line = source[j];
        for (let i = 0; i < line.length; i++) {
            // not inside '/*' comment
            if (insideBlockComment === false) {
                // if '//' comment
                if (line[i] + line[i + 1] === '//') {
                    break;
                }
                // if '/*' start inside block and move to next index
                else if (line[i] + line[i + 1] === '/*') {
                    insideBlockComment = true;
                    i++;
                }
                // if no comment, add to string
                else {
                    localLine += line[i];
                }
            }
            // inside '/*' comment
            else {
                // found '*/' closing comment, turn off boolean and move on to next index
                if (line[i] + line[i + 1] === '*/') {
                    insideBlockComment = false;
                    i++;
                }
            }
        }
        // if not inside block comment and localLine not empty, add to answer
        if (localLine.length !== 0 && insideBlockComment === false) {
            answer.push(localLine);
            localLine = '';
        }
    }
    return answer;
};

// const source = ['a/*comment', 'line', 'more_comment*/b', 'test // should be gone']; // expected: ["ab"]
// const source = ['test // test', '/* This is a test', ' */ uwu'];
const source = [
    '/*Test program */',
    'int main()',
    '{ ',
    '  // variable declaration ',
    'int a, b, c;',
    '/* This is a test',
    '   multiline  ',
    '   comment for ',
    '   testing */',
    'a = b + c;',
    '}',
];
// expected: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
console.log(removeComments(source));
