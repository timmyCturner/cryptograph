import logo from './logo.svg';
import './App.css';

function App() {



  function say_hi() {
      var fname = document.getElementById('input_1').value;
      var html = 'Encrypted <b>' + fname + '</b> ' ;

      document.getElementById('result').innerHTML = html;

  }


window.onload=function(){
  document.getElementById('encrypt_1').addEventListener('click', say_hi);
}

return(
    <html>
      <head>
        <title>Cryptography Class</title>
      </head>
      <body>
      Input: <input id="input_1"></input>

      <button id="encrypt_1">Encrypt</button>
      <div id="result"></div>
      </body>
  </html>
  );

}



export default App;
