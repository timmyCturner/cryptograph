(this.webpackJsonpcryptograph=this.webpackJsonpcryptograph||[]).push([[0],{22:function(I,e,X){},23:function(I,e,X){},44:function(I,e,X){"use strict";X.r(e);var t=X(2),E=X.n(t),V=X(13),G=X.n(V),L=(X(22),X(14)),S=X(15),Z=X(3),W=X(17),n=X(16),M=(X.p,X(23),X(24),X(0)),R=function(I){Object(W.a)(X,I);var e=Object(n.a)(X);function X(){var I;return Object(L.a)(this,X),(I=e.call(this)).state={loaded:!1,Encrypted:"XCIUIHTVOQVRLHJEYJXAVICEJFWXRVRUAAEPVPNEQLFZGFQEBXOIUXGIVJXVGLBRBXYIDBFZVKCSGHNITYJBXTSWXZHWZAYSEPINIIZWBRMITIFMQJRKLKASRIMIJPICEMIGGEIINWUTPZWVIFFEDRJXJXEHTISVNGOWRRVLIMZZGWLHZWZKFXHDRRASRXCEKKAOINYJIJLWJPVGGGXMSCSNXVVGTIKLXJXYIAKHVXREKTVZWLPLEERIEJGKGZQVRLBWNSDILBQZWLRSUPZXFVWVSQIIXZXGJRKIFMSAICIUMVJRZGUHQHYEMUTXDSEWXKSHXYILXGCRFPGZCKVFZAWIMIMIFBRMIJTGGWZXFEUHYMXFVVXVJVUYDREPXYSJBDZHNEJKEIXZWKNIYFPEXXHZVRPBNHBIWSJXBVQGPWFEICTSEFYIMTELBSIWJIJOMXIJRGPIIGICHMGZVKEAGGJQDYFBGVXZSFLFTHVJSNPOAZXZMLZOVCFXGZWJEJRXJHVGJRTOXYIUHQHYEMUTXDSEWKHPZPPMFMLZLRRVLSAXYIWGHPWVVLAMNEGTDBINFFXZPLZRKLWWEOEZWAGQJXZSFHZZVVPWVXMSEMUGIOAFVCLSMEKVWLXJRRRWEIXXISFBGYIMMUXMAXYIUHQHYEMUTXDSEWHKSQMUIJBWNIIZWWADXYEOTVMEEXKXIFMEKLASNITSEFYIMTELBSIWKLWIVJZZHWKGVRESLIVJZZHWMLZHRXSUIXELWWBXCEJHWLMBRVHLAIOITLFHPJKPWMVLOLRXAMGVRESLUIVGTIKLIYFPEFRXCMIHHTVOCNIVHRJXYENXEICJMDOIMFLPDXXNEEHLAIYMJGMLWDSEWOBXCMEXZXISITYLBZZFIEFVLVVVWLBPGSEKGBRBAYMDXXCIIIZTWISKCWMFZIEEVXGDWZSFPLZXYIJMSNIVODXKDWCELBSIAVQMLXRSIOOBXCGFRYKINWZRVNWOVPEUTHZQZGKIVDZRGQZVJYGWSGHJXYIJLXJGIEXMEIEGTJHEXLKLSMEYHIIKLINECPGYXCIDYDMMKPVGGFTZXZRYVSIGVVFLXCEKLSOIWIVRLAIASTYKHJNSDYUAHZFRXWUYOAVGSGEGPRKJXIOLRXOXADPCRWXHJRXSAGKCSEIKMEIHZRXHVHIUTMUPDGUITTXZESSMMLJASIKMXJTISLXGOPZFWKXTEEHKXGPVZXQBRWSKLGNVGENWSGHJYIXWVLISCSYR"},I.decrypt=I.decrypt.bind(Object(Z.a)(I)),I}return Object(S.a)(X,[{key:"decrypt",value:function(){var I=this;console.log("decrypt");var e=document.getElementById("input_1").value;this.state.Encrypted=e;var X=this.state.Encrypted,t="https://9fv8mjicc9.execute-api.us-east-2.amazonaws.com/default/Decrypt?Ecrypted="+X;this.setState({Encrypted:X}),console.log(t);fetch(t).then((function(I){return I.status>=200&&I.status<300?Promise.resolve(I):Promise.reject(new Error(I.statusText))})).then((function(I){return I.json()})).then((function(I){return I.split(",")})).then((function(e){console.log("Request successful"),I.state.key=e[0],I.state.code=e[1]})).then(this.render()).catch((function(I){console.log(I),console.log("Switching to static files"),console.log(I)}))}},{key:"componentDidMount",value:function(){this.setState({loaded:!0}),console.log("Hello")}},{key:"render",value:function(){return Object(M.jsxs)("html",{children:[Object(M.jsx)("head",{children:Object(M.jsx)("title",{children:"Cryptography Class"})}),Object(M.jsxs)("body",{children:[Object(M.jsx)("div",{id:"intro",children:"The Vigenere Crypher "}),Object(M.jsxs)("div",{id:"subtitle",children:[Object(M.jsx)("br",{}),"Vigenere cyphers work by choosing a phrase and a key, and then offsetting each the letters in the phase with the letters in the key. For example",Object(M.jsx)("br",{}),"Plaintext:  A T T A C K A T D A W N",Object(M.jsx)("br",{}),"Key:        L E M O N L E M O N L E",Object(M.jsx)("br",{}),"Ciphertext: L X F O P V E F R N H R",Object(M.jsx)("br",{}),"This particualr way of solving the cypher produces one result, but needs a very long string to begin"]}),Object(M.jsx)("div",{id:"example",children:"Example Cypher:  XCIUIHTVOQVRLHJEYJXAVICEJFWXRVRUAAEPVPNEQLFZGFQEBXOIUXGIVJXVGLBRBXYIDBFZVKCSGHNITYJBXTSWXZHWZAYSEPINIIZWBRMITIFMQJRKLKASRIMIJPICEMIGGEIINWUTPZWVIFFEDRJXJXEHTISVNGOWRRVLIMZZGWLHZWZKFXHDRRASRXCEKKAOINYJIJLWJPVGGGXMSCSNXVVGTIKLXJXYIAKHVXREKTVZWLPLEERIEJGKGZQVRLBWNSDILBQZWLRSUPZXFVWVSQIIXZXGJRKIFMSAICIUMVJRZGUHQHYEMUTXDSEWXKSHXYILXGCRFPGZCKVFZAWIMIMIFBRMIJTGGWZXFEUHYMXFVVXVJVUYDREPXYSJBDZHNEJKEIXZWKNIYFPEXXHZVRPBNHBIWSJXBVQGPWFEICTSEFYIMTELBSIWJIJOMXIJRGPIIGICHMGZVKEAGGJQDYFBGVXZSFLFTHVJSNPOAZXZMLZOVCFXGZWJEJRXJHVGJRTOXYIUHQHYEMUTXDSEWKHPZPPMFMLZLRRVLSAXYIWGHPWVVLAMNEGTDBINFFXZPLZRKLWWEOEZWAGQJXZSFHZZVVPWVXMSEMUGIOAFVCLSMEKVWLXJRRRWEIXXISFBGYIMMUXMAXYIUHQHYEMUTXDSEWHKSQMUIJBWNIIZWWADXYEOTVMEEXKXIFMEKLASNITSEFYIMTELBSIWKLWIVJZZHWKGVRESLIVJZZHWMLZHRXSUIXELWWBXCEJHWLMBRVHLAIOITLFHPJKPWMVLOLRXAMGVRESLUIVGTIKLIYFPEFRXCMIHHTVOCNIVHRJXYENXEICJMDOIMFLPDXXNEEHLAIYMJGMLWDSEWOBXCMEXZXISITYLBZZFIEFVLVVVWLBPGSEKGBRBAYMDXXCIIIZTWISKCWMFZIEEVXGDWZSFPLZXYIJMSNIVODXKDWCELBSIAVQMLXRSIOOBXCGFRYKINWZRVNWOVPEUTHZQZGKIVDZRGQZVJYGWSGHJXYIJLXJGIEXMEIEGTJHEXLKLSMEYHIIKLINECPGYXCIDYDMMKPVGGFTZXZRYVSIGVVFLXCEKLSOIWIVRLAIASTYKHJNSDYUAHZFRXWUYOAVGSGEGPRKJXIOLRXOXADPCRWXHJRXSAGKCSEIKMEIHZRXHVHIUTMUPDGUITTXZESSMMLJASIKMXJTISLXGOPZFWKXTEEHKXGPVZXQBRWSKLGNVGENWSGHJYIXWVLISCSYR"}),"Input: ",Object(M.jsx)("input",{id:"input_1"}),Object(M.jsx)("button",{id:"encrypt_1",onClick:this.decrypt,children:"Decrypt"}),Object(M.jsxs)("div",{id:"key",children:["Key: ",this.state.key]}),Object(M.jsxs)("div",{id:"result",children:["Decrypted: ",this.state.code]})]})]})}}]),X}(t.Component),J=function(I){I&&I instanceof Function&&X.e(3).then(X.bind(null,45)).then((function(e){var X=e.getCLS,t=e.getFID,E=e.getFCP,V=e.getLCP,G=e.getTTFB;X(I),t(I),E(I),V(I),G(I)}))};G.a.render(Object(M.jsx)(E.a.StrictMode,{children:Object(M.jsx)(R,{})}),document.getElementById("root")),J()}},[[44,1,2]]]);
//# sourceMappingURL=main.cf23f2b3.chunk.js.map