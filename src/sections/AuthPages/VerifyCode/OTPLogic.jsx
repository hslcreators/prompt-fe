const OTPLogic = (inputRefs) => {
    const allInputs = inputRefs.current.querySelectorAll('input')
    allInputs[0].focus()

    const allowedKeys =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace']

    allInputs.forEach(element => {
        element.addEventListener('paste', (event)=>{
            event.preventDefault()
            const pastedText = event.clipboardData.getData('text')
            const pastedLength = pastedText.split('').length
            pastedText.split('').forEach((text, index) => {
                allInputs[index].value = text
            })
            if(pastedLength > 0 && pastedLength < 6){
                inputAction(allInputs, pastedLength, false)
            }else{
                inputAction(allInputs, 5, false)
            }
        })
    });

    const inputAction = (allInputs, currentIndex, backspace) => {
        allInputs.forEach((input, index) => {
            input.setAttribute('readonly', 'readonly')
            if(index == currentIndex){
                input.classList.add('focus')
                input.removeAttribute('readonly', 'readonly')
                input.focus()
                input.addEventListener('keydown', (e)=> {
                        if(allowedKeys.includes(e.key)){
                            if(e.key == 'Backspace'){
                                console.log(currentIndex)
                                if(currentIndex > 0){
                                    if(input.value.length == 0){
                                        e.preventDefault()
                                        input.blur()
                                        inputAction(allInputs, currentIndex - 1, true)
                                        allInputs[currentIndex - 1].addEventListener('keyup', (e)=>{
                                            allInputs[currentIndex - 1].focus()
                                            if(currentIndex <= 1){
                                                inputAction(allInputs, 0)
                                            }else{
                                                if(e.key == 'Backspace'){
                                                    input.classList.remove('focus')
                                                    allInputs[currentIndex - 1].value = ''
                                                }else{
                                                    input.classList.remove('focus')
                                                    allInputs[currentIndex - 1].value = e.key
                                                }
                                            }
                                        })
                                    }
                                }
                            }else{
                                if(currentIndex < 5){
                                    if(input.value.length == 1){
                                        if(!backspace){
                                         e.preventDefault()
                                         if(allInputs[currentIndex].value != ''){
                                            inputAction(allInputs, currentIndex + 1, false)
                                         }
                                        }
                                     }else{
                                        if(!backspace){
                                         input.addEventListener('keyup', (e)=> {
                                             inputAction(allInputs, currentIndex + 1, false)
                                         })
                                        }
                                     }
                                     
                                }else{
                                    allInputs[5].removeAttribute('readonly', 'readonly')
                                    allInputs[5].focus()
                                }
                            }
                        }
                })
            }else{
                input.classList.remove('focus')
            }
        });
    }

    inputAction(allInputs, 0)
}

const clearOTP = (inputRefs) => {
    const allInputs = inputRefs.current.querySelectorAll('input')
    allInputs.forEach((input, index) => {
        input.value = ''
        input.classList.remove('focus')
        input.setAttribute('readonly', 'readonly')
        if(index == 0){
            input.classList.add('focus')
            input.removeAttribute('readonly', 'readonly')
            input.focus()
        }
    })
}


export { OTPLogic, clearOTP }