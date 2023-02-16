document.getElementById('calculator').addEventListener('click', function(event) {

    const typedPin = event.target.innerText;
    const typedPinElement = document.getElementById('typedPinId');
    const typedPinElementValue = typedPinElement.value;
    
    if(isNaN(typedPin)) {
        if (typedPin == '<') {
            const split = typedPinElementValue.split('');
            split.pop();
            const afterSplit = split.join('');
            typedPinElement.value = afterSplit;
        } 
        else if (typedPin == 'C') {
            typedPinElement.value = '';
        }
    } else {
        typedPinElement.value = typedPinElementValue + typedPin;
    }

});

document.getElementById('submitBtn').addEventListener('click', function() {

    const generatedPinField = document.getElementById('pinInput');
    const typedPinField = document.getElementById('typedPinId');
    const generatedPin = generatedPinField.value;
    const typedPin = typedPinField.value;
    const leftId = document.getElementById('attemptId');
    
    if (generatedPin == typedPin) {
        document.getElementById('successId').style.display = 'block';
        document.getElementById('failureId').style.display = 'none';
        document.getElementById('toogleP').style.display = 'none';
        generatedPinField.value = '';
        typedPinField.value = '';
    } 
    else {
        document.getElementById('successId').style.display = 'none';
        document.getElementById('failureId').style.display = 'block';
        document.getElementById('toogleP').style.display = 'block';

        const leftIdString = leftId.innerText;
        const leftIdInt = parseInt(leftIdString);
        const remainAttempt = leftIdInt - 1;
        leftId.innerText = remainAttempt;
        if (remainAttempt == 0) {
            document.getElementById('pinBtn').setAttribute('disabled', true);
            document.getElementById('submitBtn').setAttribute('disabled', true);
            document.getElementById('pinBtn').style.backgroundColor = 'red';
            document.getElementById('submitBtn').style.backgroundColor = 'red';
            generatedPinField.value = '';
            typedPinField.value = '';
        }
    }

});