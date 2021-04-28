import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";


import axios from "axios"; // used for API stuff

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      loaded:false,
      Encrypted: 'XCIUIHTVOQVRLHJEYJXAVICEJFWXRVRUAAEPVPNEQLFZGFQEBXOIUXGIVJXVGLBRBXYIDBFZVKCSGHNITYJBXTSWXZHWZAYSEPINIIZWBRMITIFMQJRKLKASRIMIJPICEMIGGEIINWUTPZWVIFFEDRJXJXEHTISVNGOWRRVLIMZZGWLHZWZKFXHDRRASRXCEKKAOINYJIJLWJPVGGGXMSCSNXVVGTIKLXJXYIAKHVXREKTVZWLPLEERIEJGKGZQVRLBWNSDILBQZWLRSUPZXFVWVSQIIXZXGJRKIFMSAICIUMVJRZGUHQHYEMUTXDSEWXKSHXYILXGCRFPGZCKVFZAWIMIMIFBRMIJTGGWZXFEUHYMXFVVXVJVUYDREPXYSJBDZHNEJKEIXZWKNIYFPEXXHZVRPBNHBIWSJXBVQGPWFEICTSEFYIMTELBSIWJIJOMXIJRGPIIGICHMGZVKEAGGJQDYFBGVXZSFLFTHVJSNPOAZXZMLZOVCFXGZWJEJRXJHVGJRTOXYIUHQHYEMUTXDSEWKHPZPPMFMLZLRRVLSAXYIWGHPWVVLAMNEGTDBINFFXZPLZRKLWWEOEZWAGQJXZSFHZZVVPWVXMSEMUGIOAFVCLSMEKVWLXJRRRWEIXXISFBGYIMMUXMAXYIUHQHYEMUTXDSEWHKSQMUIJBWNIIZWWADXYEOTVMEEXKXIFMEKLASNITSEFYIMTELBSIWKLWIVJZZHWKGVRESLIVJZZHWMLZHRXSUIXELWWBXCEJHWLMBRVHLAIOITLFHPJKPWMVLOLRXAMGVRESLUIVGTIKLIYFPEFRXCMIHHTVOCNIVHRJXYENXEICJMDOIMFLPDXXNEEHLAIYMJGMLWDSEWOBXCMEXZXISITYLBZZFIEFVLVVVWLBPGSEKGBRBAYMDXXCIIIZTWISKCWMFZIEEVXGDWZSFPLZXYIJMSNIVODXKDWCELBSIAVQMLXRSIOOBXCGFRYKINWZRVNWOVPEUTHZQZGKIVDZRGQZVJYGWSGHJXYIJLXJGIEXMEIEGTJHEXLKLSMEYHIIKLINECPGYXCIDYDMMKPVGGFTZXZRYVSIGVVFLXCEKLSOIWIVRLAIASTYKHJNSDYUAHZFRXWUYOAVGSGEGPRKJXIOLRXOXADPCRWXHJRXSAGKCSEIKMEIHZRXHVHIUTMUPDGUITTXZESSMMLJASIKMXJTISLXGOPZFWKXTEEHKXGPVZXQBRWSKLGNVGENWSGHJYIXWVLISCSYR'
    }

    this.decrypt = this.decrypt.bind(this);
  }

  decrypt () {
      console.log('decrypt');
      var fname = document.getElementById('input_1').value;
      var html = 'Decrypted <b>' + fname + '</b> ' ;
      this.state.Encrypted = fname
      var url = 'https://9fv8mjicc9.execute-api.us-east-2.amazonaws.com/default/Decrypt?Ecrypted='

      var test = this.state.Encrypted

      //const proxyurl = "https://cors-anywhere.herokuapp.com/";

      var responseUrl= url+test
      var response = null
      this.setState({Encrypted:test});
      console.log(responseUrl);


      const status = response => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        }
        return Promise.reject(new Error(response.statusText))
      }

      const json = response => response.json()
      const split = response => response.split(',')

      const promiseFetch= fetch(responseUrl)
        .then(status)
        .then(json)
        .then(split)
        .then((result) => {
            console.log("Request successful");

            //console.log(this);

            this.state.key = result[0];
            this.state.code = result[1]

        })
        .then(this.render())

        .catch((error) => {
            console.log(error);
            console.log("Switching to static files");
            console.log(error);
            //this.state.carbonData = carbonData.co2;

        });

      //this.loadData(responseUrl)
      //document.getElementById('result').innerHTML = html;
      //document.getElementById('encrypt_1').removeEventListener("click", this.decrypt);
      //document.getElementById('encrypt_1').disabled = true

  }

  componentDidMount() {
    this.setState({loaded:true});
    console.log('Hello');
  }

  render() {
    //const { loaded } = this.state;
    return (
      <html>
        <head>
          <title>Cryptography Class</title>
        </head>
        <body>
        <div id = "intro">The Vigenere Crypher </div>
        <div id = "subtitle">
           <br/>Vigenere cyphers work by choosing a phrase and a key, and then offsetting each the letters in the phase with the letters in the key. For example
           <br/>Plaintext:  A T T A C K A T D A W N
           <br/>Key:        L E M O N L E M O N L E
           <br/>Ciphertext: L X F O P V E F R N H R
           <br/>This particualr way of solving the cypher produces one result, but needs a very long string to begin
        </div>
        <div id = "example">Example Cypher:  XCIUIHTVOQVRLHJEYJXAVICEJFWXRVRUAAEPVPNEQLFZGFQEBXOIUXGIVJXVGLBRBXYIDBFZVKCSGHNITYJBXTSWXZHWZAYSEPINIIZWBRMITIFMQJRKLKASRIMIJPICEMIGGEIINWUTPZWVIFFEDRJXJXEHTISVNGOWRRVLIMZZGWLHZWZKFXHDRRASRXCEKKAOINYJIJLWJPVGGGXMSCSNXVVGTIKLXJXYIAKHVXREKTVZWLPLEERIEJGKGZQVRLBWNSDILBQZWLRSUPZXFVWVSQIIXZXGJRKIFMSAICIUMVJRZGUHQHYEMUTXDSEWXKSHXYILXGCRFPGZCKVFZAWIMIMIFBRMIJTGGWZXFEUHYMXFVVXVJVUYDREPXYSJBDZHNEJKEIXZWKNIYFPEXXHZVRPBNHBIWSJXBVQGPWFEICTSEFYIMTELBSIWJIJOMXIJRGPIIGICHMGZVKEAGGJQDYFBGVXZSFLFTHVJSNPOAZXZMLZOVCFXGZWJEJRXJHVGJRTOXYIUHQHYEMUTXDSEWKHPZPPMFMLZLRRVLSAXYIWGHPWVVLAMNEGTDBINFFXZPLZRKLWWEOEZWAGQJXZSFHZZVVPWVXMSEMUGIOAFVCLSMEKVWLXJRRRWEIXXISFBGYIMMUXMAXYIUHQHYEMUTXDSEWHKSQMUIJBWNIIZWWADXYEOTVMEEXKXIFMEKLASNITSEFYIMTELBSIWKLWIVJZZHWKGVRESLIVJZZHWMLZHRXSUIXELWWBXCEJHWLMBRVHLAIOITLFHPJKPWMVLOLRXAMGVRESLUIVGTIKLIYFPEFRXCMIHHTVOCNIVHRJXYENXEICJMDOIMFLPDXXNEEHLAIYMJGMLWDSEWOBXCMEXZXISITYLBZZFIEFVLVVVWLBPGSEKGBRBAYMDXXCIIIZTWISKCWMFZIEEVXGDWZSFPLZXYIJMSNIVODXKDWCELBSIAVQMLXRSIOOBXCGFRYKINWZRVNWOVPEUTHZQZGKIVDZRGQZVJYGWSGHJXYIJLXJGIEXMEIEGTJHEXLKLSMEYHIIKLINECPGYXCIDYDMMKPVGGFTZXZRYVSIGVVFLXCEKLSOIWIVRLAIASTYKHJNSDYUAHZFRXWUYOAVGSGEGPRKJXIOLRXOXADPCRWXHJRXSAGKCSEIKMEIHZRXHVHIUTMUPDGUITTXZESSMMLJASIKMXJTISLXGOPZFWKXTEEHKXGPVZXQBRWSKLGNVGENWSGHJYIXWVLISCSYR
        </div>
        Input: <input id="input_1"></input>

        <button id="encrypt_1" onClick={this.decrypt}>Decrypt</button>

        <div id="key">Key: {this.state.key}</div>
        <div id="result">Decrypted: {this.state.code}</div>
        </body>
      </html>

    );
  }
}
