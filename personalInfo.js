const taskArray=['Name: John Lee','Residential Address:','59 Hayden st Unit 400, Toronto, On M4Y 2P2','Email Address: test.email@gmail.com',
                'Phone: +12345678910','Languages Known:','English,French,Spanish,German,Hindi,Telugu,Tamil'];

        
        let text ="<p class=\"contact-info-data\"><br>";

        for(let i=0;i<taskArray.length;i++){

            text += taskArray[i]+ "</p>";

            task=taskArray[i];
        }
        text += "<br/>";
        document.getElementById ("details").innerHTML=text;