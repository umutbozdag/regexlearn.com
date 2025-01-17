function setCaretPosition(inputEl, pos) {
  // Modern browsers
  if (inputEl.setSelectionRange) {
    inputEl.focus();
    inputEl.setSelectionRange(pos, pos);

    // IE8 and below
  } else if (inputEl.createTextRange) {
    var range = inputEl.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

export default setCaretPosition;
