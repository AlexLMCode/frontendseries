var url = "http://34.125.7.41:8122/graphql/";
console.log('Holis');
function postLinks() {
        console.log(url);

        let name = $('#name').val();
        let synopsis = $('#synopsis').val();
        let createdBy = $('#createdby').val();
        let numberOfEpisodes = $('#numberEpisodes').val();
        let genre = $('#genre').val();
        let seasons = $('#seasons').val();

        var mutation = `
        mutation{
                createSerie(
                        name:"${name}",
                        synopsis: "${synopsis}",
                        createdBy:"${createdBy}",
                        numberOfEpisodes:${numberOfEpisodes},
                        genre:"${genre}",
                        seasons:${seasons}
                        ){
                  name,
                  synopsis,
                  createdBy,
                  numberOfEpisodes,
                  genre,
                  seasons
                }
              }
        
        `

        console.log(mutation);

        $.ajax({
                url: url,
                contentType: "application/json",
                method: 'post',
                data: JSON.stringify({ "query": mutation }),

                success: function (result) {
                        console.log(JSON.stringify(result))
                        alert("inserted :" + JSON.stringify(result));
                }

        });
}

function getLinks() {

        var query = `query{
                series{
                  id,
                  name,
                  synopsis,
                  createdBy,
                  numberOfEpisodes,
                  seasons,
                  genre
                }
              }`;


        $.ajax({
                url: url,
                contentType: "application/json",
                method: 'post',
                data: JSON.stringify({ "query": query }),

                success: function (result) {
                        console.log(JSON.stringify(result))

                        var arrLinks = result.data.series;
                        var htmlTable = '<table border="1">';

                        arrLinks.forEach(function (item) {
                                console.log(item.name);
                                console.log(item.synopsis)
                                console.log(item.createdBy)
                                console.log(item.numberOfEpisodes)
                                console.log(item.genre)
                                console.log(item.seasons)
                                htmlTable += '<tr>' +
                                        '<td>' + item.name + '</td>' +
                                        '<td>' + item.synopsis + '</td>' +
                                        '<td>' + item.createdBy + '</td>' +
                                        '<td>' + "Episodes: " + item.numberOfEpisodes + '</td>' +
                                        '<td>' + item.genre + '</td>' +
                                        '<td>' + "Seasons: " + item.seasons + '</td>' +
                                        '</tr>';
                        });

                        htmlTable += '</table>';

                        $("#resultado").html(htmlTable);


                }
        });

}
