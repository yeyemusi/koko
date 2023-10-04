const counts = document.querySelectorAll('.numero')
const speed = 110

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-goal'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})


