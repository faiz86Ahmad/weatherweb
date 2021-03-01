const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName")
const city_name = document.getElementById("city_name")
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status")
const dataHide = document.querySelector(".middle_layer");
const temp_real = document.getElementById("temp_real")
const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal ==="")
    {
       city_name.innerText="plz write the name before search";
       dataHide.classList.add("data_hide");
    }
    else


    {
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=bf4fcb35fd4a7bc256249c80bb84c91f`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
       const arrData = [data];
        temp_real.innerText=arrData[0].main.temp;
       city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
       const tempMood = arrData[0].weather[0].main;
       if(tempMood=="Clear")
       {
           temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></>";
       }
       else if(tempMood=="Clouds")
        {
            temp_status.innerHTML = "<i class='fas fa-clouds' style='color:#f1f2f6;'></>";
        }
        else if(tempMood=="Rain")
            
        {
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></>";
        }
        else
            
        {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></>";
        }

        dataHide.classList.remove("data_hide");
        }
       
        
        catch{
            city_name.innerText="plz write the  city name properly";
            dataHide.classList.add("data_hide");
        }
    }
   
}
submitBtn.addEventListener("click",getInfo);