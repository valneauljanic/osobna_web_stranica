let gumb = document.getElementById("posalji");

gumb.addEventListener("click", function () {
    const ime = document.getElementById("ime").value;
    const prezime = document.getElementById("prezime").value;
    const poruka = document.getElementById("poruka").value;

    if(ime === "" || prezime === "" || poruka === "") {
        alert("Molim ispunite sva polja.");
    } else {
        alert("Ime: " + ime + "\nPrezime: " + prezime + "\nPoruka: " + poruka);
    }
});