const btn = document.getElementById('btn');
const code = document.getElementById('code');
const show = document.getElementById('show');



async function getzipcode(userInput){
    const url = `'https://api.zippopotam.us/us/${userInput}'`;
    try{
           const response = await fetch(url);
    const data =  await   response.json();
    console.log(data);
  const latitude = data.places[0].latitude;
const longitude = data.places[0].longitude;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
show.innerHTML =`<div><a href="${mapUrl}" target="_blank"></a></div>`
    }catch(error){
        // console.log(error);
        show.innerHTML = `<div>oppppsss!</div>`
    }
 

}
btn.addEventListener('click',function(){
   

    const userInput = code.value;

    getzipcode(userInput);
})

