(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(3),l=n.n(i),c=n(69),o=n.n(c),r=(n(79),n(80),n(11)),s=n(12),b=n(5),d=n(14),j=n(13),h=(n(81),n(10)),u=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={redirect:!1},a.logout=a.logout.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"logout",value:function(e){e.preventDefault(),sessionStorage.setItem("token",""),sessionStorage.clear(),this.setState({redirect:!0})}},{key:"renderLinks",value:function(){return sessionStorage.getItem("token")?Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("a",{className:"selected",href:"/",children:"Home"})]}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/create-account",children:"Create Account"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/transactions",children:"Transactions"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/login",onClick:this.logout,children:"Logout"})})]}):Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/signup",children:"Signup"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/login",children:"Login"})})]})}},{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(h.a,{to:"/login"}):Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("div",{className:"header-bar",children:Object(a.jsx)("div",{className:"nav-menu",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("a",{className:"selected",href:"/",children:"Home"})]}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/create-account",children:"Create Account"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/transactions",children:"Transactions"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/signup",children:"Signup"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/login",children:"Login"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/login",onClick:this.logout,children:"Logout"})})]})})})})}}]),n}(i.Component),p=n(16),O=(n(86),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",redirect:!1},a.onChange=a.onChange.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"onChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'mutation{login(email:"'.concat(this.state.email,'",password:"').concat(this.state.password,'")}')})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?alert("invalid login"):(console.log(e.data.login),sessionStorage.setItem("token",e.data.login),t.setState({redirect:!0}))}))}},{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(h.a,{to:"/"}):Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"login",children:Object(a.jsxs)("form",{id:"login",onSubmit:this.onSubmit,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("b",{children:"Email"}),"~","\n"]}),Object(a.jsx)("input",{type:"email",name:"email",id:"Uname",onChange:this.onChange,placeholder:"Email"}),"\n","\n",Object(a.jsxs)("label",{children:[Object(a.jsx)("b",{children:"Password     "}),"~","\n"]}),Object(a.jsx)("input",{type:"password",name:"password",id:"Pass",onChange:this.onChange,placeholder:"Password"}),"\n","\n",Object(a.jsx)("button",{className:"select-photo c-button",id:"login-button",children:"Login"}),Object(a.jsx)("p",{}),Object(a.jsx)("a",{href:"/signup",children:"OR create new account"})]})})})}}]),n}(i.Component)),v=(n(87),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={name:"",email:"",password:"",redirect:!1},a.onChange=a.onChange.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state),fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'mutation{signup(email:"'.concat(this.state.email,'",password:"').concat(this.state.password,'",name:"').concat(this.state.name,'"){name}}')})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?(console.log("error"),alert("invalid registeration")):(console.log(e),t.setState({redirect:!0}))}))}},{key:"onChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(h.a,{to:"/login"}):Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"login-page",children:Object(a.jsx)("div",{className:"form",children:Object(a.jsxs)("form",{className:"login-form",onSubmit:this.onSubmit,children:[Object(a.jsx)("input",{type:"text",name:"name",onChange:this.onChange,placeholder:"name"}),Object(a.jsx)("input",{type:"email",name:"email",onChange:this.onChange,placeholder:"email"}),Object(a.jsx)("input",{type:"password",name:"password",onChange:this.onChange,placeholder:"password"}),Object(a.jsx)("button",{children:"Register"}),Object(a.jsx)("a",{href:"/login",children:"OR Login"})]})})})})}}]),n}(i.Component)),x=(n(88),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={redirect:!1,bank:"cib",type:"current",currency:"USD"},a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.onChange=a.onChange.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"onSubmit",value:function(e){e.preventDefault(),fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:'mutation{createAccount(bank:"hsbc",type:"joint",currency:"EGP"){id}}'})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?alert("error"):alert("success")}))}},{key:"onChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value)),console.log(this.state)}},{key:"render",value:function(){return this.state.redirect||!sessionStorage.getItem("token")?Object(a.jsx)(h.a,{to:"/login"}):Object(a.jsx)("div",{children:Object(a.jsx)("div",{class:"login-page",children:Object(a.jsx)("div",{class:"form",children:Object(a.jsxs)("form",{class:"login-form",onSubmit:this.onSubmit,children:[Object(a.jsx)("p",{children:"Bank"}),Object(a.jsxs)("select",{onChange:this.onChange,name:"bank",value:this.state.bank,id:"bankList",children:[Object(a.jsx)("option",{value:"cib",selected:"selected",label:"cib",children:"CIB"}),Object(a.jsx)("option",{value:"qnb",label:"qnb",children:"QNB"}),Object(a.jsx)("option",{value:"hsbc",label:"hsbc",children:"HSBC"})]}),Object(a.jsx)("p",{children:"Type"}),Object(a.jsxs)("select",{onChange:this.onChange,name:"type",value:this.state.type,id:"Type",children:[Object(a.jsx)("option",{value:"current",selected:"selected",label:"current",children:"Current"}),Object(a.jsx)("option",{value:"saving",label:"saving",children:"Saving"}),Object(a.jsx)("option",{value:"credit",label:"credit",children:"Credit"}),Object(a.jsx)("option",{value:"joint",label:"joint",children:"Joint"})]}),Object(a.jsx)("p",{children:"Currency"}),Object(a.jsxs)("select",{id:"currencyList",name:"currency",onChange:this.onChange,value:this.state.currency,children:[Object(a.jsx)("option",{value:"USD",selected:"selected",label:"US dollar",children:"USD"}),Object(a.jsx)("option",{value:"EUR",label:"Euro",children:"EUR"}),Object(a.jsx)("option",{value:"JPY",label:"Japanese yen",children:"JPY"}),Object(a.jsx)("option",{value:"GBP",label:"Pound sterling",children:"GBP"}),Object(a.jsx)("option",{disabled:!0,children:"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),Object(a.jsx)("option",{value:"AED",label:"United Arab Emirates dirham",children:"AED"}),Object(a.jsx)("option",{value:"AFN",label:"Afghan afghani",children:"AFN"}),Object(a.jsx)("option",{value:"ALL",label:"Albanian lek",children:"ALL"}),Object(a.jsx)("option",{value:"AMD",label:"Armenian dram",children:"AMD"}),Object(a.jsx)("option",{value:"ANG",label:"Netherlands Antillean guilder",children:"ANG"}),Object(a.jsx)("option",{value:"AOA",label:"Angolan kwanza",children:"AOA"}),Object(a.jsx)("option",{value:"ARS",label:"Argentine peso",children:"ARS"}),Object(a.jsx)("option",{value:"AUD",label:"Australian dollar",children:"AUD"}),Object(a.jsx)("option",{value:"AWG",label:"Aruban florin",children:"AWG"}),Object(a.jsx)("option",{value:"AZN",label:"Azerbaijani manat",children:"AZN"}),Object(a.jsx)("option",{value:"BAM",label:"Bosnia and Herzegovina convertible mark",children:"BAM"}),Object(a.jsx)("option",{value:"BBD",label:"Barbadian dollar",children:"BBD"}),Object(a.jsx)("option",{value:"BDT",label:"Bangladeshi taka",children:"BDT"}),Object(a.jsx)("option",{value:"BGN",label:"Bulgarian lev",children:"BGN"}),Object(a.jsx)("option",{value:"BHD",label:"Bahraini dinar",children:"BHD"}),Object(a.jsx)("option",{value:"BIF",label:"Burundian franc",children:"BIF"}),Object(a.jsx)("option",{value:"BMD",label:"Bermudian dollar",children:"BMD"}),Object(a.jsx)("option",{value:"BND",label:"Brunei dollar",children:"BND"}),Object(a.jsx)("option",{value:"BOB",label:"Bolivian boliviano",children:"BOB"}),Object(a.jsx)("option",{value:"BRL",label:"Brazilian real",children:"BRL"}),Object(a.jsx)("option",{value:"BSD",label:"Bahamian dollar",children:"BSD"}),Object(a.jsx)("option",{value:"BTN",label:"Bhutanese ngultrum",children:"BTN"}),Object(a.jsx)("option",{value:"BWP",label:"Botswana pula",children:"BWP"}),Object(a.jsx)("option",{value:"BYN",label:"Belarusian ruble",children:"BYN"}),Object(a.jsx)("option",{value:"BZD",label:"Belize dollar",children:"BZD"}),Object(a.jsx)("option",{value:"CAD",label:"Canadian dollar",children:"CAD"}),Object(a.jsx)("option",{value:"CDF",label:"Congolese franc",children:"CDF"}),Object(a.jsx)("option",{value:"CHF",label:"Swiss franc",children:"CHF"}),Object(a.jsx)("option",{value:"CLP",label:"Chilean peso",children:"CLP"}),Object(a.jsx)("option",{value:"CNY",label:"Chinese yuan",children:"CNY"}),Object(a.jsx)("option",{value:"COP",label:"Colombian peso",children:"COP"}),Object(a.jsx)("option",{value:"CRC",label:"Costa Rican col\xf3n",children:"CRC"}),Object(a.jsx)("option",{value:"CUC",label:"Cuban convertible peso",children:"CUC"}),Object(a.jsx)("option",{value:"CUP",label:"Cuban peso",children:"CUP"}),Object(a.jsx)("option",{value:"CVE",label:"Cape Verdean escudo",children:"CVE"}),Object(a.jsx)("option",{value:"CZK",label:"Czech koruna",children:"CZK"}),Object(a.jsx)("option",{value:"DJF",label:"Djiboutian franc",children:"DJF"}),Object(a.jsx)("option",{value:"DKK",label:"Danish krone",children:"DKK"}),Object(a.jsx)("option",{value:"DOP",label:"Dominican peso",children:"DOP"}),Object(a.jsx)("option",{value:"DZD",label:"Algerian dinar",children:"DZD"}),Object(a.jsx)("option",{value:"EGP",label:"Egyptian pound",children:"EGP"}),Object(a.jsx)("option",{value:"ERN",label:"Eritrean nakfa",children:"ERN"}),Object(a.jsx)("option",{value:"ETB",label:"Ethiopian birr",children:"ETB"}),Object(a.jsx)("option",{value:"EUR",label:"EURO",children:"EUR"}),Object(a.jsx)("option",{value:"FJD",label:"Fijian dollar",children:"FJD"}),Object(a.jsx)("option",{value:"FKP",label:"Falkland Islands pound",children:"FKP"}),Object(a.jsx)("option",{value:"GBP",label:"British pound",children:"GBP"}),Object(a.jsx)("option",{value:"GEL",label:"Georgian lari",children:"GEL"}),Object(a.jsx)("option",{value:"GGP",label:"Guernsey pound",children:"GGP"}),Object(a.jsx)("option",{value:"GHS",label:"Ghanaian cedi",children:"GHS"}),Object(a.jsx)("option",{value:"GIP",label:"Gibraltar pound",children:"GIP"}),Object(a.jsx)("option",{value:"GMD",label:"Gambian dalasi",children:"GMD"}),Object(a.jsx)("option",{value:"GNF",label:"Guinean franc",children:"GNF"}),Object(a.jsx)("option",{value:"GTQ",label:"Guatemalan quetzal",children:"GTQ"}),Object(a.jsx)("option",{value:"GYD",label:"Guyanese dollar",children:"GYD"}),Object(a.jsx)("option",{value:"HKD",label:"Hong Kong dollar",children:"HKD"}),Object(a.jsx)("option",{value:"HNL",label:"Honduran lempira",children:"HNL"}),Object(a.jsx)("option",{value:"HKD",label:"Hong Kong dollar",children:"HKD"}),Object(a.jsx)("option",{value:"HRK",label:"Croatian kuna",children:"HRK"}),Object(a.jsx)("option",{value:"HTG",label:"Haitian gourde",children:"HTG"}),Object(a.jsx)("option",{value:"HUF",label:"Hungarian forint",children:"HUF"}),Object(a.jsx)("option",{value:"IDR",label:"Indonesian rupiah",children:"IDR"}),Object(a.jsx)("option",{value:"ILS",label:"Israeli new shekel",children:"ILS"}),Object(a.jsx)("option",{value:"IMP",label:"Manx pound",children:"IMP"}),Object(a.jsx)("option",{value:"INR",label:"Indian rupee",children:"INR"}),Object(a.jsx)("option",{value:"IQD",label:"Iraqi dinar",children:"IQD"}),Object(a.jsx)("option",{value:"IRR",label:"Iranian rial",children:"IRR"}),Object(a.jsx)("option",{value:"ISK",label:"Icelandic kr\xf3na",children:"ISK"}),Object(a.jsx)("option",{value:"JEP",label:"Jersey pound",children:"JEP"}),Object(a.jsx)("option",{value:"JMD",label:"Jamaican dollar",children:"JMD"}),Object(a.jsx)("option",{value:"JOD",label:"Jordanian dinar",children:"JOD"}),Object(a.jsx)("option",{value:"JPY",label:"Japanese yen",children:"JPY"}),Object(a.jsx)("option",{value:"KES",label:"Kenyan shilling",children:"KES"}),Object(a.jsx)("option",{value:"KGS",label:"Kyrgyzstani som",children:"KGS"}),Object(a.jsx)("option",{value:"KHR",label:"Cambodian riel",children:"KHR"}),Object(a.jsx)("option",{value:"KID",label:"Kiribati dollar",children:"KID"}),Object(a.jsx)("option",{value:"KMF",label:"Comorian franc",children:"KMF"}),Object(a.jsx)("option",{value:"KPW",label:"North Korean won",children:"KPW"}),Object(a.jsx)("option",{value:"KRW",label:"South Korean won",children:"KRW"}),Object(a.jsx)("option",{value:"KWD",label:"Kuwaiti dinar",children:"KWD"}),Object(a.jsx)("option",{value:"KYD",label:"Cayman Islands dollar",children:"KYD"}),Object(a.jsx)("option",{value:"KZT",label:"Kazakhstani tenge",children:"KZT"}),Object(a.jsx)("option",{value:"LAK",label:"Lao kip",children:"LAK"}),Object(a.jsx)("option",{value:"LBP",label:"Lebanese pound",children:"LBP"}),Object(a.jsx)("option",{value:"LKR",label:"Sri Lankan rupee",children:"LKR"}),Object(a.jsx)("option",{value:"LRD",label:"Liberian dollar",children:"LRD"}),Object(a.jsx)("option",{value:"LSL",label:"Lesotho loti",children:"LSL"}),Object(a.jsx)("option",{value:"LYD",label:"Libyan dinar",children:"LYD"}),Object(a.jsx)("option",{value:"MAD",label:"Moroccan dirham",children:"MAD"}),Object(a.jsx)("option",{value:"MDL",label:"Moldovan leu",children:"MDL"}),Object(a.jsx)("option",{value:"MGA",label:"Malagasy ariary",children:"MGA"}),Object(a.jsx)("option",{value:"MKD",label:"Macedonian denar",children:"MKD"}),Object(a.jsx)("option",{value:"MMK",label:"Burmese kyat",children:"MMK"}),Object(a.jsx)("option",{value:"MNT",label:"Mongolian t\xf6gr\xf6g",children:"MNT"}),Object(a.jsx)("option",{value:"MOP",label:"Macanese pataca",children:"MOP"}),Object(a.jsx)("option",{value:"MRU",label:"Mauritanian ouguiya",children:"MRU"}),Object(a.jsx)("option",{value:"MUR",label:"Mauritian rupee",children:"MUR"}),Object(a.jsx)("option",{value:"MVR",label:"Maldivian rufiyaa",children:"MVR"}),Object(a.jsx)("option",{value:"MWK",label:"Malawian kwacha",children:"MWK"}),Object(a.jsx)("option",{value:"MXN",label:"Mexican peso",children:"MXN"}),Object(a.jsx)("option",{value:"MYR",label:"Malaysian ringgit",children:"MYR"}),Object(a.jsx)("option",{value:"MZN",label:"Mozambican metical",children:"MZN"}),Object(a.jsx)("option",{value:"NAD",label:"Namibian dollar",children:"NAD"}),Object(a.jsx)("option",{value:"NGN",label:"Nigerian naira",children:"NGN"}),Object(a.jsx)("option",{value:"NIO",label:"Nicaraguan c\xf3rdoba",children:"NIO"}),Object(a.jsx)("option",{value:"NOK",label:"Norwegian krone",children:"NOK"}),Object(a.jsx)("option",{value:"NPR",label:"Nepalese rupee",children:"NPR"}),Object(a.jsx)("option",{value:"NZD",label:"New Zealand dollar",children:"NZD"}),Object(a.jsx)("option",{value:"OMR",label:"Omani rial",children:"OMR"}),Object(a.jsx)("option",{value:"PAB",label:"Panamanian balboa",children:"PAB"}),Object(a.jsx)("option",{value:"PEN",label:"Peruvian sol",children:"PEN"}),Object(a.jsx)("option",{value:"PGK",label:"Papua New Guinean kina",children:"PGK"}),Object(a.jsx)("option",{value:"PHP",label:"Philippine peso",children:"PHP"}),Object(a.jsx)("option",{value:"PKR",label:"Pakistani rupee",children:"PKR"}),Object(a.jsx)("option",{value:"PLN",label:"Polish z\u0142oty",children:"PLN"}),Object(a.jsx)("option",{value:"PRB",label:"Transnistrian ruble",children:"PRB"}),Object(a.jsx)("option",{value:"PYG",label:"Paraguayan guaran\xed",children:"PYG"}),Object(a.jsx)("option",{value:"QAR",label:"Qatari riyal",children:"QAR"}),Object(a.jsx)("option",{value:"RON",label:"Romanian leu",children:"RON"}),Object(a.jsx)("option",{value:"RON",label:"Romanian leu",children:"RON"}),Object(a.jsx)("option",{value:"RSD",label:"Serbian dinar",children:"RSD"}),Object(a.jsx)("option",{value:"RUB",label:"Russian ruble",children:"RUB"}),Object(a.jsx)("option",{value:"RWF",label:"Rwandan franc",children:"RWF"}),Object(a.jsx)("option",{value:"SAR",label:"Saudi riyal",children:"SAR"}),Object(a.jsx)("option",{value:"SEK",label:"Swedish krona",children:"SEK"}),Object(a.jsx)("option",{value:"SGD",label:"Singapore dollar",children:"SGD"}),Object(a.jsx)("option",{value:"SHP",label:"Saint Helena pound",children:"SHP"}),Object(a.jsx)("option",{value:"SLL",label:"Sierra Leonean leone",children:"SLL"}),Object(a.jsx)("option",{value:"SLS",label:"Somaliland shilling",children:"SLS"}),Object(a.jsx)("option",{value:"SOS",label:"Somali shilling",children:"SOS"}),Object(a.jsx)("option",{value:"SRD",label:"Surinamese dollar",children:"SRD"}),Object(a.jsx)("option",{value:"SSP",label:"South Sudanese pound",children:"SSP"}),Object(a.jsx)("option",{value:"STN",label:"S\xe3o Tom\xe9 and Pr\xedncipe dobra",children:"STN"}),Object(a.jsx)("option",{value:"SYP",label:"Syrian pound",children:"SYP"}),Object(a.jsx)("option",{value:"SZL",label:"Swazi lilangeni",children:"SZL"}),Object(a.jsx)("option",{value:"THB",label:"Thai baht",children:"THB"}),Object(a.jsx)("option",{value:"TJS",label:"Tajikistani somoni",children:"TJS"}),Object(a.jsx)("option",{value:"TMT",label:"Turkmenistan manat",children:"TMT"}),Object(a.jsx)("option",{value:"TND",label:"Tunisian dinar",children:"TND"}),Object(a.jsx)("option",{value:"TOP",label:"Tongan pa\u02bbanga",children:"TOP"}),Object(a.jsx)("option",{value:"TRY",label:"Turkish lira",children:"TRY"}),Object(a.jsx)("option",{value:"TTD",label:"Trinidad and Tobago dollar",children:"TTD"}),Object(a.jsx)("option",{value:"TVD",label:"Tuvaluan dollar",children:"TVD"}),Object(a.jsx)("option",{value:"TWD",label:"New Taiwan dollar",children:"TWD"}),Object(a.jsx)("option",{value:"TZS",label:"Tanzanian shilling",children:"TZS"}),Object(a.jsx)("option",{value:"UAH",label:"Ukrainian hryvnia",children:"UAH"}),Object(a.jsx)("option",{value:"UGX",label:"Ugandan shilling",children:"UGX"}),Object(a.jsx)("option",{value:"USD",label:"United States dollar",children:"USD"}),Object(a.jsx)("option",{value:"UYU",label:"Uruguayan peso",children:"UYU"}),Object(a.jsx)("option",{value:"UZS",label:"Uzbekistani so\u02bbm",children:"UZS"}),Object(a.jsx)("option",{value:"VES",label:"Venezuelan bol\xedvar soberano",children:"VES"}),Object(a.jsx)("option",{value:"VND",label:"Vietnamese \u0111\u1ed3ng",children:"VND"}),Object(a.jsx)("option",{value:"VUV",label:"Vanuatu vatu",children:"VUV"}),Object(a.jsx)("option",{value:"WST",label:"Samoan t\u0101l\u0101",children:"WST"}),Object(a.jsx)("option",{value:"XAF",label:"Central African CFA franc",children:"XAF"}),Object(a.jsx)("option",{value:"XCD",label:"Eastern Caribbean dollar",children:"XCD"}),Object(a.jsx)("option",{value:"XOF",label:"West African CFA franc",children:"XOF"}),Object(a.jsx)("option",{value:"XPF",label:"CFP franc",children:"XPF"}),Object(a.jsx)("option",{value:"ZAR",label:"South African rand",children:"ZAR"}),Object(a.jsx)("option",{value:"ZMW",label:"Zambian kwacha",children:"ZMW"}),Object(a.jsx)("option",{value:"ZWB",label:"Zimbabwean bonds",children:"ZWB"})]}),Object(a.jsx)("button",{children:"Create"})]})})})})}}]),n}(i.Component)),g=(n(89),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={redirect:!1,id:parseInt(e.match.params.id),bank:"",type:""},a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.onChange=a.onChange.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"componentWillMount",value:function(){var e=this;fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:"{account(id:".concat(this.state.id,"){\n                bank\n                type\n            }}")})}).then((function(e){return e.json()})).then((function(t){e.setState({bank:t.data.account.bank,type:t.data.account.type}),console.log(e.state)}))}},{key:"onSubmit",value:function(e){e.preventDefault(),fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"mutation{updateAccount(id:".concat(this.state.id,',bank:"').concat(this.state.bank,'",type:"').concat(this.state.type,'"){\n              bank\n              type\n            }}')})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?alert("error"):alert("success")}))}},{key:"onChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return sessionStorage.getItem("token")?Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"login-page",children:Object(a.jsx)("div",{className:"form",children:Object(a.jsxs)("form",{className:"login-form",onSubmit:this.onSubmit,children:[Object(a.jsx)("p",{children:"Bank"}),Object(a.jsxs)("select",{onChange:this.onChange,value:this.state.bank,name:"bank",id:"bankList",children:[Object(a.jsx)("option",{value:"cib",label:"cib",children:"CIB"}),Object(a.jsx)("option",{value:"qnb",label:"qnb",children:"QNB"}),Object(a.jsx)("option",{value:"hsbc",label:"hsbc",children:"HSBC"})]}),Object(a.jsx)("p",{children:"Type"}),Object(a.jsxs)("select",{onChange:this.onChange,value:this.state.type,name:"type",id:"Type",children:[Object(a.jsx)("option",{value:"current",label:"current",children:"Current"}),Object(a.jsx)("option",{value:"saving",label:"saving",children:"Saving"}),Object(a.jsx)("option",{value:"credit",label:"credit",children:"Credit"}),Object(a.jsx)("option",{value:"joint",label:"joint",children:"Joint"})]}),Object(a.jsx)("button",{children:"Update"})]})})})}):Object(a.jsx)(h.a,{to:"/login"})}}]),n}(i.Component)),m=(n(90),n(91),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={bank:e.bank,id:e.id,type:e.type,currency:e.currency,balance:e.balance,activated:e.activated},a.activatedButton=a.activatedButton.bind(Object(b.a)(a)),a.handleActivate=a.handleActivate.bind(Object(b.a)(a)),a.handleDeactivate=a.handleDeactivate.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"handleActivate",value:function(){var e=this;fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:"mutation{activate(id:".concat(this.state.id,")}")})}).then((function(e){return e.json()})).then((function(t){e.setState({activated:!0})}))}},{key:"handleDeactivate",value:function(){var e=this;fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:"mutation{deactivate(id:".concat(this.state.id,")}")})}).then((function(e){return e.json()})).then((function(t){e.setState({activated:!1})}))}},{key:"activatedButton",value:function(){return this.state.activated?Object(a.jsx)("button",{onClick:this.handleDeactivate,id:"activated",children:"Activated"}):Object(a.jsx)("button",{onClick:this.handleActivate,id:"deactivated",children:"DeActivated"})}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"account-container",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Bank:"}),Object(a.jsx)("span",{children:this.state.bank})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"ID:"}),Object(a.jsx)("span",{children:this.state.id})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Type:"}),Object(a.jsx)("span",{children:this.state.type})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Currency:"}),Object(a.jsx)("span",{children:this.state.currency})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Balance:"}),Object(a.jsx)("span",{children:this.state.balance})]}),this.activatedButton(),Object(a.jsx)("a",{href:"/update/"+this.state.id,children:Object(a.jsx)("button",{children:"Update"})})]})})}}]),n}(i.Component)),f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={redirect:!1,accounts:[],filter:"all"},a.getAllaccount=a.getAllaccount.bind(Object(b.a)(a)),a.getByBank=a.getByBank.bind(Object(b.a)(a)),a.onChange=a.onChange.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"getAllaccount",value:function(){var e=this;fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:"{accounts{\n                id\n                balance\n                bank\n                type\n                currency\n                activated\n            }}"})}).then((function(e){return e.json()})).then((function(t){var n=t.data.accounts;e.setState({accounts:n.slice()})}))}},{key:"componentWillMount",value:function(){this.getAllaccount()}},{key:"getByBank",value:function(){var e=this;fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:'{accounts(bank:"'.concat(this.state.filter,'"){\n                id\n                balance\n                bank\n                type\n                currency\n                activated\n            }}')})}).then((function(e){return e.json()})).then((function(t){console.log(t);var n=t.data.accounts;e.setState({accounts:n.slice()})}))}},{key:"displayAccounts",value:function(){return this.state.accounts.map((function(e){return Object(a.jsx)(m,{id:e.id,bank:e.bank,currency:e.currency,type:e.type,balance:e.balance,activated:e.activated},e.id)}))}},{key:"onChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value),(function(){"all"==e.target.value?this.getAllaccount():this.getByBank()}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"custom-dropdown big",children:Object(a.jsxs)("select",{onChange:this.onChange,value:this.state.filter,name:"filter",children:[Object(a.jsx)("option",{value:"all",label:"all",children:"All"}),Object(a.jsx)("option",{value:"cib",label:"cib",children:"CIB"}),Object(a.jsx)("option",{value:"qnb",label:"qnb",children:"QNB"}),Object(a.jsx)("option",{value:"hsbc",label:"hsbc",children:"HSBC"})]})}),this.displayAccounts()]})}}]),n}(i.Component),y=(n(92),n(93),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={redirect:!1,id:e.id,withdraws:e.withdraws,deposits:e.deposits,transfers:e.transfers},a.displayWithdraws=a.displayWithdraws.bind(Object(b.a)(a)),a.displayDeposits=a.displayDeposits.bind(Object(b.a)(a)),a.displayTransfers=a.displayTransfers.bind(Object(b.a)(a)),a.deleteTransaction=a.deleteTransaction.bind(Object(b.a)(a)),console.log(e),a}return Object(s.a)(n,[{key:"deleteTransaction",value:function(){fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:"mutation{deleteTransaction(transId:".concat(this.state.id,")}")})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?alert("error"):e.data.deleteTransaction?alert("removed Transaction"):alert("error")}))}},{key:"displayWithdraws",value:function(){return this.state.withdraws.map((function(e){return Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Withdraw"}),Object(a.jsxs)("span",{children:[" From ",e.from,", ",Object(a.jsx)("b",{children:"Balance"})," ",e.balance]})]})}))}},{key:"displayDeposits",value:function(){return this.state.deposits.map((function(e){return Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Deposit"}),Object(a.jsxs)("span",{children:[" From ",e.to,", ",Object(a.jsx)("b",{children:"Balance"})," ",e.balance]})]})}))}},{key:"displayTransfers",value:function(){return this.state.transfers.map((function(e){return Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Transfer"}),Object(a.jsxs)("span",{children:[" From ",e.from," To ",e.to,", ",Object(a.jsx)("b",{children:"Balance"})," ",e.balance]})]})}))}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"account-container",children:[this.displayDeposits(),this.displayWithdraws(),this.displayTransfers(),Object(a.jsx)("button",{onClick:this.deleteTransaction,children:"Delete"})]})})}}]),n}(i.Component)),S=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={redirect:!1,from:"2010-01-01",to:"2030-01-01",transactions:[],newID:-1},a.getAllTransactions=a.getAllTransactions.bind(Object(b.a)(a)),a.newTransaction=a.newTransaction.bind(Object(b.a)(a)),a.onChange=a.onChange.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"newTransaction",value:function(){var e=this;fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:"mutation{newTransaction}"})}).then((function(e){return e.json()})).then((function(t){var n=t.data.newTransaction;e.setState({newID:n,redirect:!0})}))}},{key:"componentDidMount",value:function(){this.getAllTransactions()}},{key:"displayTransactions",value:function(){return this.state.transactions.map((function(e){return Object(a.jsx)(y,{id:e.id,withdraws:e.withdraws,deposits:e.deposits,transfers:e.transfers},e.id)}))}},{key:"getAllTransactions",value:function(){var e=this;console.log(this.state),fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:'{getTransactions(from:"'.concat(this.state.from,' 00:00:00",to:"').concat(this.state.to,' 23:59:59"){\n                id\n                user_id\n                withdraws{\n                from\n                balance\n                }\n                deposits{\n                to\n                balance\n                }\n                transfers{\n                from\n                to \n                balance\n                }\n            }}')})}).then((function(e){return e.json()})).then((function(t){console.log(t);var n=t.data.getTransactions;e.setState({transactions:n.slice()})}))}},{key:"componentDidMount",value:function(){this.getAllTransactions()}},{key:"displayTransactions",value:function(){return this.state.transactions.map((function(e){return Object(a.jsx)(y,{id:e.id,withdraws:e.withdraws,deposits:e.deposits,transfers:e.transfers},e.id)}))}},{key:"onChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value),(function(){this.getAllTransactions()}))}},{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(h.a,{to:"/new-transaction/"+this.state.newID}):Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{onChange:this.onChange,type:"date",id:"date",name:"from",value:this.state.from}),Object(a.jsx)("input",{type:"date",id:"date",name:"to",value:this.state.to,onChange:this.onChange}),Object(a.jsx)("button",{className:"new-transaction",onClick:this.newTransaction,children:"New Transaction"}),this.displayTransactions()]})}}]),n}(i.Component),C=(n(94),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={id:parseInt(e.match.params.id),redirect:!1,depositTo:-1,depositBalance:-1,withdrawFrom:-1,withdrawBalance:-1,tranferFrom:-1,transferTo:-1,transferBalance:-1},a.onChange=a.onChange.bind(Object(b.a)(a)),a.AddDeposit=a.AddDeposit.bind(Object(b.a)(a)),a.AddWithdraw=a.AddWithdraw.bind(Object(b.a)(a)),a.AddTransfer=a.AddTransfer.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"onChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value),console.log(this.state))}},{key:"AddDeposit",value:function(e){e.preventDefault(),fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:"mutation{depositMoney(transId:".concat(this.state.id,",to:").concat(this.state.depositTo,',balance:"').concat(this.state.depositBalance,'")}')})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?alert("error"):"true"==e.data.depositMoney?alert("added deposit!"):alert("error")}))}},{key:"AddWithdraw",value:function(e){e.preventDefault(),-1!=this.state.withdrawFrom&&-1!=this.state.withdrawBalance?fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:"mutation{withdrawMoney(transId:".concat(this.state.id,",from:").concat(this.state.withdrawFrom,',balance:"').concat(this.state.withdrawBalance,'")}')})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?alert("error"):"true"==e.data.withdrawMoney?alert("added withdraw!"):alert("error")})):alert("error")}},{key:"AddTransfer",value:function(e){e.preventDefault(),-1!=this.state.transferTo&&-1!=this.state.transferBalance&&-1!=this.state.transferFrom?fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify({query:"mutation{transferMoney(transId:".concat(this.state.id,",from:").concat(this.state.transferFrom,",to:").concat(this.state.transferTo,',balance:"').concat(this.state.withdrawBalance,'")}')})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?alert("error"):"true"==e.data.transferMoney?alert("added transfer!"):alert("error")})):alert("error")}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"login-page",children:Object(a.jsx)("div",{className:"form",children:Object(a.jsxs)("form",{className:"login-form",children:[Object(a.jsx)("p",{children:"Deposit"}),Object(a.jsx)("input",{type:"number",name:"depositTo",onChange:this.onChange,placeholder:"Deposit To {account id}"}),Object(a.jsx)("input",{type:"number",name:"depositBalance",onChange:this.onChange,placeholder:"Deposit balance in EGP"}),Object(a.jsx)("button",{className:"Add",onClick:this.AddDeposit,children:"Add deposit"}),Object(a.jsx)("p",{children:"Withdraw"}),Object(a.jsx)("input",{type:"number",name:"withdrawFrom",onChange:this.onChange,placeholder:"Withdraw From {account id}"}),Object(a.jsx)("input",{type:"number",name:"withdrawBalance",onChange:this.onChange,placeholder:"Withdraw balance in EGP"}),Object(a.jsx)("button",{className:"Add",onClick:this.AddWithdraw,children:"Add withdraw"}),Object(a.jsx)("p",{children:"Transfer"}),Object(a.jsx)("input",{type:"number",name:"transferFrom",onChange:this.onChange,placeholder:"Transfer From {account id}"}),Object(a.jsx)("input",{type:"number",name:"transferTo",onChange:this.onChange,placeholder:"Transfer To {account id}"}),Object(a.jsx)("input",{type:"number",name:"transferBalance",onChange:this.onChange,placeholder:"Transfer Balance in EGP"}),Object(a.jsx)("button",{className:"Add",onClick:this.AddTransfer,children:"Add Transfer"}),Object(a.jsx)("button",{className:"Finish",children:"Finish"})]})})})})}}]),n}(i.Component)),T=n(20),k=n(32),D=n(52),B=new(function(){function e(){Object(r.a)(this,e),this.authnticated=!1}return Object(s.a)(e,[{key:"login",value:function(e){this.authnticated=!0,e()}},{key:"logout",value:function(e){this.authnticated=!1,e()}},{key:"isAuthenticated",value:function(){return!!sessionStorage.getItem("token")}}]),e}()),A=function(e){var t=e.component,n=Object(D.a)(e,["component"]);return Object(a.jsx)(h.b,Object(k.a)(Object(k.a)({},n),{},{render:function(e){return B.isAuthenticated()?Object(a.jsx)(t,Object(k.a)({},e)):Object(a.jsx)(h.a,{to:"/login"})}}))},N=function(e){var t=e.component,n=Object(D.a)(e,["component"]);return Object(a.jsx)(h.b,Object(k.a)(Object(k.a)({},n),{},{render:function(e){return B.isAuthenticated()?Object(a.jsx)(h.a,{to:"/"}):Object(a.jsx)(t,Object(k.a)({},e))}}))};var w=function(){return Object(a.jsx)(T.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsxs)(h.d,{children:[Object(a.jsx)(A,{path:"/",exact:!0,component:f}),Object(a.jsx)(N,{path:"/login",exact:!0,component:O}),Object(a.jsx)(N,{path:"/signup",exact:!0,component:v}),Object(a.jsx)(A,{path:"/create-account",exact:!0,component:x}),Object(a.jsx)(A,{path:"/update/:id",exact:!0,component:g}),Object(a.jsx)(A,{path:"/transactions",exact:!0,component:S}),Object(a.jsx)(A,{path:"/new-transaction/:id",exact:!0,component:C})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),l(e),c(e)}))},M=n(34),R=new M.ApolloClient({cache:new M.InMemoryCache,link:new M.HttpLink({uri:"/graphql-playground"})});o.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(M.ApolloProvider,{client:R,children:Object(a.jsx)(w,{})})}),document.getElementById("root")),P()},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.ec8e1901.chunk.js.map