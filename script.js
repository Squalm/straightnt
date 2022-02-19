window.addEventListener("load", function(event) 
{

    const labels = ["ace", "aro", "agender", "bi", "enby", "inclusive pride", "gay", "genderfluid", "genderqueer", "lesbian", "pan", "polyamorous", "poly", "trans", "queer"];
    const greeting = ["Congratulations! You're ", "Good news! You're ", "Amazing! You're ", "We're overjoyed you're ", "What's this? You're ", "Hallelujah! You're ", "You're perfect; you're "]
    const message = ["And that's super valid. You are loved.", "And that's epic.", "We're so glad you know.", "And it's alright even if that changes.", "You're still a great person."]

    for (let i = 0; i < labels.length ; i++) {
        document.getElementById("bottom").innerHTML += ' <a href="?f=' + labels[i] + '">' + labels[i] + '</a>';
    }

    const url = new URL(window.location.href);
    let f = url.searchParams.get("f");
    if (f != null) {
        document.getElementById("congrats").innerText = greeting[Math.floor(Math.random() * greeting.length)] + f + "!";
        document.getElementById("message").innerText = message[Math.floor(Math.random() * message.length)]
        document.getElementById("body").classList = f;

        // Specifics for exceptional(ly great) flags
        if (f == "aro" || f == "agender" || f == "enby" || f == "polyamorous") {
            document.getElementById("bottom").style.color = "white";
        }
        if (f == "inclusive pride") {
            document.getElementById("body").classList = "inclPride";
            document.getElementById("congrats").innerText = greeting[Math.floor(Math.random() * greeting.length)] + "queer!";
        }
    }

});