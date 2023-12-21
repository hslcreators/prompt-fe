const OTPLogic = (inputRefs) => {
    const allInputs = inputRefs.current.querySelectorAll('input')
    allInputs[0].focus()

    const allowedKeys =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace']

    const inputAction = (allInputs, currentIndex, backspace) => {
        allInputs.forEach((input, index) => {
            if(index == currentIndex){
                input.focus()
                input.addEventListener('keydown', (e)=> {
                        if(allowedKeys.includes(e.key)){
                            console.log(e.key)
                            if(e.key == 'Backspace'){
                                if(input.value.length == 0){
                                    e.preventDefault()
                                    input.blur()
                                    inputAction(allInputs, currentIndex - 1, true)
                                }
                            }else{
                                if(input.value.length == 1){
                                   if(!backspace){
                                    e.preventDefault()
                                    inputAction(allInputs, currentIndex + 1, false)
                                   }
                                }else{
                                   if(!backspace){
                                    input.addEventListener('keyup', (e)=> {
                                        inputAction(allInputs, currentIndex + 1, false)
                                    })
                                   }
                                }
                            }
                        }
                })
            }
        });
    }

    inputAction(allInputs, 0)
}


export { OTPLogic }