function startCount(){
            if(!running){
                running = true
                intervalId = setInterval(countDown, 1000)
            }

        }

        function countDown(){
            clock--
            countdown.textContent = clock
            if(clock == 0){
                running = false
                clearInterval(intervalId)
            }

        }
        function endCount(){
            running = false
            clearInterval(intervalId)
        }
        function resetCount(){
            running = false
            clearInterval(intervalId)
            clock = 60
            countdown.textContent = clock
        }


        const countdown = document.getElementById("timer")

        const start = document.getElementById("start")

        const end = document.getElementById("end")

        const reset = document.getElementById("reset")

        let clock = 60

        let running = false

        let intervalId = null

        start.addEventListener("click", startCount)
        end.addEventListener("click", endCount)
        reset.addEventListener("click", resetCount)