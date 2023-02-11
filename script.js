// eslint-disable-next-line no-unused-vars
window.addEventListener("load", function(_event) 
{
    genpage(true);
});

// eslint-disable-next-line no-unused-vars
function copylink() {
    navigator.clipboard.writeText(window.location.href);
    document.getElementById("top").innerHTML = document.getElementById("top").innerHTML.split("--")[0] + " -- " + "Copied link!";
}

function genpage(reload) {

    const labels = ["ace", "aro", "agender", "bi", "enby", "inclusive pride", "gay", "genderfluid", "genderqueer", "lesbian", "pan", "polyamorous", "poly", "trans", "queer"];
    const greeting = ["Congratulations! You're ", "Good news! You're ", "Amazing! You're ", "We're overjoyed you're ", "What's this? You're ", "Hallelujah! You're ", "You're perfect; you're "];
    const message = ["And that's super valid. You are loved.", "And that's epic.", "We're so glad you know.", "And it's alright even if that changes.", "You're still a great person.", "Isn't that awesome?", "People care about you. Stay safe."];

    if (reload) {
        for (let i = 0; i < labels.length ; i++) {
            document.getElementById("bottom").innerHTML += ' <a href="?f=' + labels[i] + '">' + labels[i] + '</a>';
        }
    }

    const url = new URL(window.location.href);
    let f = url.searchParams.get("f");
    if (f != null) {

        document.getElementById("congrats").innerText = greeting[Math.floor(Math.random() * greeting.length)] + f + "!";
        document.getElementById("message").innerText = message[Math.floor(Math.random() * message.length)];
        document.getElementById("body").classList = f;

        // Specifics for exceptional(ly great) flags
        if (f == "aro" || f == "agender" || f == "enby" || f == "polyamorous" || f == "queer") {
            document.getElementById("bottom").style.color = "white";
        }
        if (f == "inclusive pride") {
            document.getElementById("body").classList = "inclPride";
            document.getElementById("congrats").innerText = greeting[Math.floor(Math.random() * greeting.length)] + "Queer!";
        }
        if (f == "genderfluid") {
            document.getElementById("main").style.color = "white";
        }
        if (f == "inclusive pride" || f == "ace" || f == "agender" || f == "queer") {
            document.getElementById("top").style.color = "white";
        }

        // For sending to others
        let person = url.hash;
        if (person == "#out") {
            if (f == "inclusive pride") {
                f = "queer"
            }
            document.getElementById("congrats").innerText = "Hey there, I'm " + f;
            document.getElementById("message").innerText = "I just wanted to let you know; it's kinda important to me.";
            document.getElementById("top").innerHTML = '<a href="#out" onclick="copylink()">Copy the link</a> to this page and share with your friends.';
        }

    } else {
        document.getElementById("top").innerText = "";
    }

}