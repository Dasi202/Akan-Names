
const getName=() => {
    let date=document.getElementById("birthday").value 
    console.log(date)

    let gender=document.getElementById("gender").value
    console.log(gender)

    let century=document.getElementsByClassName("century").value
    console.log(century)

    let  dayBorn=parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
    console.log(dayBorn)
    //listing days of the week
                           // 0        1        2          3           4        5          6       
    const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    console.log(daysOfTheWeek[dayBorn])
    // Akan names arrays
    const male =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    // validating male akan names
    if (gender==="male"&& daysOfTheWeek === "Sunday"){
        console.log(male[dayBorn])
    }
    if (gender==="male"&& daysOfTheWeek === "Monday"){
        console.log(male[dayBorn])
    }
    if (gender==="male"&& daysOfTheWeek === "Tuesday"){
        console.log(male[dayBorn])
    }
    if (gender==="male"&& daysOfTheWeek === "Wednesday"){
        console.log(male[dayBorn])
    }
    if (gender==="male"&& daysOfTheWeek === "Thursday"){
        console.log(male[dayBorn])
    }
    if (gender==="male"&& daysOfTheWeek === "Friday"){
        console.log(male[dayBorn])
    }
    if (gender==="male"&& daysOfTheWeek === "Saturday"){
        console.log(male[dayBorn])
    }
// validating female akan names
    const female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    if (gender==="female"&& daysOfTheWeek === "Sunday"){
        console.log(female[dayBorn])
    }
    if (gender==="female"&& daysOfTheWeek === "Monday"){
        console.log(female[dayBorn])
    }
    if (gender==="female"&& daysOfTheWeek === "Tuesday"){
        console.log(female[dayBorn])
    }
    if (gender==="female"&& daysOfTheWeek === "Wednesday"){
        console.log(female[dayBorn])
    }
    if (gender==="female"&& daysOfTheWeek === "Friday"){
        console.log(female[dayBorn])
    }
    if (gender==="female"&& daysOfTheWeek === "Saturday"){
        console.log(female[dayBorn])
    }
    if (gender==="male"&& daysOfTheWeek === "Sunday"){
        console.log(femlae[dayBorn])
    }

}
