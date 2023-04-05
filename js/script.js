const txtElement = ['Indah', 'Singkat', 'Tenang']          //untuk memnampilkan text ketik
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;
    
    if (words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }
    setTimeout(ngetik, 500);
})();

window.onscroll = function() {scrollFunction()};            //untuk button Top

function scrollFunction(){
  if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5 ) {
    document.getElementById('btn').style.display = "block";  
  }
  else {
    document.getElementById('btn').style.display = "block";
  } 
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 

function runFuction() {                                   //untuk mewarnai paragraf yang dipilih
    document.getElementsByTagName('p')[1].style.color = 'blue'
    document.getElementsByTagName('p')[2].style.color = 'blue'
  }

  function myFunction() {                                 //untuk mengubah paragraf
    document.getElementById("demo").innerHTML = "Senja, kadang ungu cantik, kadang jingga keren, kadang hitam kelabu, tapi langit selalu menerima senja apa adanya. -Vatoben";
  }
  