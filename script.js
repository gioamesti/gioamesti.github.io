function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("fanName").value.trim();
    let players = [...document.querySelectorAll("input[name='player']:checked")]
                    .map(p => p.value);
    let era = document.querySelector("input[name='era']:checked");

    if (name === "") {
        document.getElementById("resultBox").innerHTML = "<b>Please enter your name.</b>";
        return false;
    }

    if (players.length === 0) {
        document.getElementById("resultBox").innerHTML = "<b>Please select at least one player.</b>";
        return false;
    }

    if (!era) {
        document.getElementById("resultBox").innerHTML = "<b>Please select an era.</b>";
        return false;
    }

    
    alert("Great Choice!");

    let eraText = era.value;

    document.getElementById("resultBox").innerHTML =
        `<h3>Thanks, ${name}!</h3>
         <p>Your favorite era: <b>${eraText}</b></p>
         <p>Your selected players:</p>
         <ul>${players.map(p => `<li>${p}</li>`).join("")}</ul>`;

    return false;
}


function clearResult() {
    document.getElementById("resultBox").innerHTML = "Form reset.";
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("resultBox").innerHTML = "Fill out the form to see your results.";
});
