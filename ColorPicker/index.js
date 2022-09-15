document.getElementById("color-form").addEventListener("submit", function(event){
    event.preventDefault()
    const hexColor = document.getElementById("hex-color").value
    const modeColor = document.getElementById("color-mode").value
    let hexColorNumber = hexColor
    let html = ""
    hexColorNumber = hexColorNumber.substring(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColorNumber}&mode=${modeColor}&count=5`)
        .then(res => res.json())
        .then(data => {
           /*  console.log(data) */
           for(let i = 0; i < data.colors.length; i++) {
               
               html += `
               <div class="one-div">
                    <div class="colored-divs"></div>
                    <p>${data.colors[i].hex.value}</p>
                </div>
                `
           }
           
            document.getElementById("picked-colors").innerHTML = html
            
            for(let i = 0; i < data.colors.length; i++) {
                document.getElementsByClassName("colored-divs")[i].style.background = `${data.colors[i].hex.value}`
           }
        })
        
        
})