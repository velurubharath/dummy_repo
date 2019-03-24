$(document).ready(() => {

    $(username).trigger("focus")

    $("#performAction").click(()=>{
        alert("Button is clicked")
        console.log("Button is clicked")
    })

    $("#newTag").dblclick(()=>{
        alert("Blink is double clicked")
        console.log("link is double clicked")
    })

    $('form').submit(()=>{
        alert("Form is submitted")
    })

    $('input').focus(()=>{
        $(this).addClass("border-input");
    })

    $('input').focusOut(()=>{
        $(this).removeClass("border-input");
    })
    
})//end doc ready

