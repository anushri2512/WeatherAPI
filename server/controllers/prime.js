import fetch from 'node-fetch';
import config from '../config/config'
export default {
    isPrimeNumber(req, res){
        let currentDate = new Date("December 5, 1995 23:15:20");
        console.log(currentDate)
        console.log("day : " + currentDate.getDate() ); 
        let day=currentDate.getDate();
        let flag=true;
            for(let i = 2; i <= day - 1; i++){
            if (day % i == 0) { 
                flag = false; 
                break; 
            } 
        }
            if (flag == true) {
                console.log("data")
                fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${config.api_key}`)
                .then((response) => response.json())
                .then((data) =>  res.status(200).json(data))  
                .catch(err => {
                    res.status(500).json({
                    message: err.message || "Something wrong while retrieving data."
                });
                });
            }
            else{
                res.json(`Date is not prime so no data`);
            }
        }
    
}
