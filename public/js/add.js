const addPlant = async (event) => {
    event.preventDefault();


const name = document.querySelector('#plantname').value.trim();
const nickname = document.querySelector('#nickname').value.trim();
const note = document.querySelector('#notes').value.trim();



if(plantname && nickname && notes){
    const response = await fetch('/api/plant', {
        method: 'POST',
        body: JSON.stringify({name, nickname, note}),
        headers: { 'Content-Type': 'application/json' }
    });


    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Plant not added.');
      }

}

};


document.querySelector('#addplant').addEventListener('submit', addPlant);