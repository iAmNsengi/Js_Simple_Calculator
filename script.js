const main = document.querySelector('main')
let input = document.querySelector('textarea')  
const audio = document.querySelector(`audio[data-key="1"]`)

input.focus()
main.addEventListener('click', (e)=>{
     if (e.target.tagName == 'BUTTON'){
            audio.play()  
        if (e.target.className == 'submit'){
        return eval(input.textContent)? input.innerText= eval(input.textContent): input.innerText= ""
    }
        if(e.target.className == 'reset') return input.innerText=''
        if(e.target.className.includes('operator') || e.target.className.includes('dot')){
if(e.target.className.includes('dot')){
                if((input.textContent).includes(".")) return
                }
            if("+-/.*".includes(input.textContent[input.textContent.length-1] )){
            input.innerText = eval(input.textContent.substring(0,input.textContent.length -1)) + e.target.innerText
            }else input.innerText = eval(input.textContent) +  e.target.innerText
        }else{
            input.innerText = input.textContent +  e.target.innerText
        }
     }
})