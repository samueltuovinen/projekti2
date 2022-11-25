var jsonObj;

// Functio joka näyttää kaikki elokuvat
function näytäKaikki() {

    var url = "https://swapi.dev/api/films/"
    // Luodaan ajax objekti
    var xmlhttp = new XMLHttpRequest();   

    xmlhttp.onreadystatechange = function () {
        // odotetaan vastausta
        if (xmlhttp.readyState == 1) {
            document.getElementById("kaikkidata").innerHTML = "Lataa...";
        }
        // tarkistaa että kaikki ok
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            jsonObj = JSON.parse(xmlhttp.responseText);
            
            console.log(jsonObj);
            
            // Kutsu functioita joka parsii datan 
            printJSONTable(jsonObj)
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// functio jolla parsitaan dataa
function printJSONTable(jsonObj) {

    var data = jsonObj;
    // Luodaan looppi joka käy läpi JSON data arrayn
    var out = "<table>";

         out += '<tr>';
         out += '<td>' + "Episode ID" + '</td>';
         out += '<td>' + "Title" + '</td>';
         out += '<td>' + "Opening crawl" + '</td>';
         out += '<td>' + "Director" + '</td>';
         out += '</tr>'

        // jokaiselle loopille luodaan uusi <tr> tagi ja (+=)
        out += '<tr>';
        // jokaiseen taulukkoon haetaan dataa JSON:ista
        out += '<td>' + data.results[0].episode_id + '</td>';
        out += '<td>' + data.results[0].title + '</td>';
        out += '<td>' + data.results[0].opening_crawl + '</td>';
        out += '<td>' + data.results[0].director + '</td>';
        out += '</tr>'

        out += '<tr>';
        out += '<td>' + data.results[1].episode_id + '</td>';
        out += '<td>' + data.results[1].title + '</td>';
        out += '<td>' + data.results[1].opening_crawl + '</td>';
        out += '<td>' + data.results[1].director + '</td>';
        out += '</tr>'

        out += '<tr>';
        out += '<td>' + data.results[2].episode_id + '</td>';
        out += '<td>' + data.results[2].title + '</td>';
        out += '<td>' + data.results[2].opening_crawl + '</td>';
        out += '<td>' + data.results[2].director + '</td>';
        out += '</tr>'

        out += '<tr>';
        out += '<td>' + data.results[3].episode_id + '</td>';
        out += '<td>' + data.results[3].title + '</td>';
        out += '<td>' + data.results[3].opening_crawl + '</td>';
        out += '<td>' + data.results[3].director + '</td>';
        out += '</tr>'

        out += '<tr>';
        out += '<td>' + data.results[4].episode_id + '</td>';
        out += '<td>' + data.results[4].title + '</td>';
        out += '<td>' + data.results[4].opening_crawl + '</td>';
        out += '<td>' + data.results[4].director + '</td>';
        out += '</tr>'

        out += '<tr>';
        out += '<td>' + data.results[5].episode_id + '</td>';
        out += '<td>' + data.results[5].title + '</td>';
        out += '<td>' + data.results[5].opening_crawl + '</td>';
        out += '<td>' + data.results[5].director + '</td>';
        out += '</tr>'
    out += "</table>";

    // tulosta näytölle
    document.getElementById("kaikkidata").innerHTML = out;

}
