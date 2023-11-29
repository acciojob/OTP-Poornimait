//your JS code here. If 
function focusNext(currentInput) {
            const maxLength = parseInt(currentInput.getAttribute('maxlength'));
            const nextInput = currentInput.nextElementSibling;

            if (currentInput.value.length === maxLength && nextInput) {
                nextInput.focus();
            }
        }

        function focusPrev(currentInput) {
            const prevInput = currentInput.previousElementSibling;

            if (currentInput.value === '' && prevInput) {
                prevInput.focus();
            }
        }