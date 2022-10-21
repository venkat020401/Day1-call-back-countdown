//HTML tag in DoOM
var h1 = document.createElement("h1");
h1.setAttribute("id","count");
h1.innerHTML = 10;

document.body.append(h1);

// Call Back Hell Function

var countdown = document.getElementById("count").innerText;

setTimeout(()=> {
    countdown = countdown-1;
    h1.innerHTML = countdown;
    setTimeout(()=> {
        countdown = countdown-1;
        h1.innerHTML = countdown;
        setTimeout(()=> {
            countdown = countdown-1;
            h1.innerHTML = countdown;
            setTimeout(()=> {
                countdown = countdown-1;
                h1.innerHTML = countdown;
                setTimeout(()=> {
                    countdown = countdown-1;
                    h1.innerHTML = countdown;
                    setTimeout(()=> {
                        countdown = countdown-1;
                        h1.innerHTML = countdown;
                        setTimeout(()=> {
                            countdown = countdown-1;
                            h1.innerHTML = countdown;
                            setTimeout(()=> {
                                countdown = countdown-1;
                                h1.innerHTML = countdown;
                                setTimeout(()=> {
                                    countdown = countdown-1;
                                    h1.innerHTML = countdown;
                                    setTimeout(()=> {
                                        h1.innerHTML = `<p id="display">Happy Independance Day</p>`;
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)    
},1000)