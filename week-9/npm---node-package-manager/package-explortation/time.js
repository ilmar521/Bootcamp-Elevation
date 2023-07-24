import moment from "moment"
import urllib from 'urllib'

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017

urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response.toString())
})