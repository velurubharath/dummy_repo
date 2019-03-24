$(document).ready(()=>{
    gatAllData();
})

let getAllData=()=>{
    console.log("making request")
    $.ajax({
        type:"GET",
        datatype:"json",
        Url:"artos.json",
        success: (data)=>{
            console.log(data)
            let allPeople = data.people
            for(people of allPeople){

                let temprow = <div class='row'>
                <div class='col'>${perosn.name}</div>
                <div class='col'>${perosn.craft}</div>
                </div>
                $('#showData').append(temprow)
            }
        }, 
        error: (data) => {
            alert("Some error happened")
        },
        beforesend: ()=>{
            //Loader before the success is completed
        },

        complete:()=>{
            // Activity after request is completed
        },
        timeout: 3000 // this is inn milliseconds
    })
}