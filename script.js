
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData=async()=>{
        let key="bfa3e826625464934468e36126eaecdb"
        let place=document.querySelector("#Location").value
        // console.log(place)
        // !here fetch will return promise to handle promise we use await and async
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        // console.log(data)
        // !here we will get hidden output to get data we use .json method
        // !but json method will again return promise so we use await
        let finalOuput=await data.json()
        // console.log(finalOuput)
        let tempValue=document.querySelector("#temperature")
        // console.log(tempValue)
        let humidValue=document.querySelector("#humidity")
        let finalTemp=Math.round(finalOuput.main.temp-273)
        let finalHumid=(finalOuput.main.humidity)
        let finalCondition=(finalOuput.weather[0].main).toLowerCase()
        let h3=document.querySelector("h3")
    h3.innerHTML=`${finalCondition}`
   

        // console.log(finalCondition)
        // console.log(finalTemp)
        tempValue.innerHTML=`${finalTemp} <sup>0</sup>C`
        humidValue.innerHTML=`${finalHumid}kmph`
        let weatherImage=document.querySelector("#img")
        switch(finalCondition){
            case "dust":
                weatherImage.src='./assets/dustimages.webp'
                break;
            case "clouds":
                weatherImage.src='./assets/clouds.jpeg'
                break;
         case "haze":
                weatherImage.src='./assets/haze.jpeg'
                break;
         case "snow":
                weatherImage.src='./assets/snow.jpg'
                break;
         case "mist":
                weatherImage.src='./assets/mist.jpeg'
                break;
                
        
            case "rain":
                weatherImage.src='./assets/rain.avif'
                break;
        default:
                    weatherImage.src='./assets/weather-icon.webp'
                    break;

            
        }
        let back=document.getElementById("main_container")
        // console.log(background)
        switch(finalCondition){
            case "dust":
                weatherImage.src='./assets/dustimages.webp'
                back.style.backgroundImage="url(./assets/dust2.webp)"
                break;
            case "clouds":
                weatherImage.src='./assets/clouds.jpeg'
                back.style.backgroundImage="url(./assets/cloud2.jpg)"
                break;
         case "haze":
                weatherImage.src='./assets/haze.jpeg'
                back.style.backgroundImage="url(./assets/haze2.jpg)"
                break;
         case "snow":
                weatherImage.src='./assets/snow.jpg'
                back.style.backgroundImage="url(./assets/snow2.jpg)"
                break;
         case "mist":
                weatherImage.src='./assets/mist.jpeg'
                back.style.backgroundImage="url(./assets/mist2.jpg)"
                break;
                
        
            case "rain":
                weatherImage.src='./assets/rain.avif'
                back.style.backgroundImage="url(./assets/rain2.jpg)"
                break;
        default:
                    weatherImage.src='./assets/weather-icon.webp'
                    back.style.backgroundImage="url(./assets/default.webp)"
                    break;


        }


    }
    fetchData()
})
