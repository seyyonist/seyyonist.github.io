(this.webpackJsonpcsv_to_tally=this.webpackJsonpcsv_to_tally||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),i=(a(13),a(3)),c=a(4),s=a(7),u=a(6),E=(a(14),a(18));function m(e,t){var a="<"+t+">";for(var n in e)a+="<"+n+">",a+=e[n],a+="</"+n+">";return a=(a=a.replace(/<\/?[0-9]{1,}>/g,""))+"</"+t+">"}function v(e){var t="";for(var a in e)t+="<"+a+">",t+=e[a],t+="</"+a+">";return t=t.replace(/<\/?[0-9]{1,}>/g,"")}var d=a(5),p=function(e){return r.a.createElement("div",{id:"results",className:"results",style:{display:e.show?"block":"none"}},r.a.createElement("div",{className:"header"},r.a.createElement("button",{onClick:function(){return e.toggle()},className:"btn btn-sm btn-danger"},"close")),r.a.createElement("div",{className:"body"},e.value))},C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={csvString:"",xml:"",dataList:[],selectedFile:"",showResult:!1},e}return Object(c.a)(a,[{key:"openFile",value:function(){this.refs.fileSelector.click()}},{key:"readInputFile",value:function(e){var t=this,a=new FileReader,n=e.target.files[0].name;a.readAsText(e.target.files[0],"UTF-8"),a.onload=function(){var e=a.result.trim();t.setState({csvString:e})},this.setState({selectedFile:n})}},{key:"processCSV",value:function(){var e=this.state.csvString.split("\n"),t=[];if(console.debug(e),Array.isArray(e)){for(var a=1;a<e.length;a++){console.debug(e[a]);var n=e[a].split(",");if(Array.isArray(n)){var r={date:n[0],vtype:n[1],refNo:a,drLed:n[3],crLed:n[4],drAmt:n[5],crAmt:n[6],amt:n[5]+n[6],narration:n[7]};t.push(r)}}this.setState({dataList:t})}else alert("invalid data")}},{key:"generateXML",value:function(){var e=this.state.dataList,t="<ENVELOPE><HEADER><TALLYREQUEST>Import Data</TALLYREQUEST></HEADER><BODY><IMPORTDATA><REQUESTDESC><REPORTNAME>Vouchers</REPORTNAME><STATICVARIABLES><SVCURRENTCOMPANY></SVCURRENTCOMPANY></STATICVARIABLES></REQUESTDESC><REQUESTDATA>";e.forEach((function(e,a){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:123234,a=Object(E.a)(),n={REMOVEZEROENTRIES:"No",ISDEEMEDPOSITIVE:"No",LEDGERNAME:e.crLed,AMOUNT:e.amt},r={REMOVEZEROENTRIES:"No",ISDEEMEDPOSITIVE:"Yes",LEDGERNAME:e.drLed,AMOUNT:-e.amt},l={VOUCHERTYPENAME:e.vtype,DATE:e.date,EFFECTIVEDATE:e.date,REFERENCE:e.refNo,NARRATION:e.narration,GUID:a,ALTERID:t},o=v(l),i=m(n,"ALLLEDGERENTRIES.LIST"),c=m(r,"ALLLEDGERENTRIES.LIST"),s='<VOUCHER REMOTEID="'+a+'" VCHTYPE="'+e.vtype+'" ACTION="Create">',u='<TALLYMESSAGE xmlns:UDF="TallyUDF">'+s+o+i+c+"</VOUCHER></TALLYMESSAGE>";return u}(e,a);t+=n})),t+="</REQUESTDATA></IMPORTDATA></BODY></ENVELOPE>",this.setState({xml:t});var a=new Blob([t],{type:"application/xml;charset=utf-8"});d.saveAs(a,"VoucherExport_"+(new Date).getTime()+".xml")}},{key:"OBJtoXML",value:function(e,t){var a="<"+t+">";for(var n in e)a+="<"+n+">",a+=e[n],a+="</"+n+">";return a=(a=a.replace(/<\/?[0-9]{1,}>/g,""))+"</"+t+">"}},{key:"toggleResult",value:function(){var e=this.state.showResult;this.setState({showResult:!e})}},{key:"handelDrRowChange",value:function(e,t){var a=e.target.value,n=this.state.dataList;n[t].drLed=a,this.setState({dataList:n})}},{key:"handelCrRowChange",value:function(e,t){var a=e.target.value,n=this.state.dataList;n[t].crLed=a,this.setState({dataList:n})}},{key:"handelvTypeRowChange",value:function(e,t){var a=e.target.value,n=this.state.dataList;n[t].vtype=a,this.setState({dataList:n})}},{key:"render",value:function(){var e=this,t=this.state.dataList.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.date),r.a.createElement("td",null,r.a.createElement("select",{key:a,value:t.vtype,onChange:function(t){return e.handelvTypeRowChange(t,a)}},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Contra"},"Contra"),r.a.createElement("option",{value:"Credit Note"},"Credit Note"),r.a.createElement("option",{value:"Debit Note"},"Debit Note"),r.a.createElement("option",{value:"Delivery Note"},"Delivery Note"),r.a.createElement("option",{value:"Job Work In Order"},"Job Work In Order"),r.a.createElement("option",{value:"Job Work Out Order"},"Job Work Out Order"),r.a.createElement("option",{value:"Journal"},"Journal"),r.a.createElement("option",{value:"Material In"},"Material In"),r.a.createElement("option",{value:"Material Out"},"Material Out"),r.a.createElement("option",{value:"Memorandum"},"Memorandum"),r.a.createElement("option",{value:"Payment"},"Payment"),r.a.createElement("option",{value:"Physical Stock"},"Physical Stock"),r.a.createElement("option",{value:"Purchase"},"Purchase"),r.a.createElement("option",{value:"Purchase Order"},"Purchase Order"),r.a.createElement("option",{value:"Receipt"},"Receipt"),r.a.createElement("option",{value:"Receipt Note"},"Receipt Note"),r.a.createElement("option",{value:"Rejections In"},"Rejections In"),r.a.createElement("option",{value:"Rejections Out"},"Rejections Out"),r.a.createElement("option",{value:"Reversing Journal"},"Reversing Journal"),r.a.createElement("option",{value:"Sales"},"Sales"),r.a.createElement("option",{value:"Sales Order"},"Sales Order"),r.a.createElement("option",{value:"StockJournal"},"StockJournal"))),r.a.createElement("td",null,t.refNo),r.a.createElement("td",null,r.a.createElement("select",{key:a,value:t.drLed,onChange:function(t){return e.handelDrRowChange(t,a)}},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"HDFC - FD"},"HDFC - FD"),r.a.createElement("option",{value:"Syndicate Bank - FD"},"Syndicate Bank - FD"),r.a.createElement("option",{value:"HDFC Diners Premium Cr Card"},"HDFC Diners Premium Cr Card"),r.a.createElement("option",{value:"SBI IRCTC Cr Card"},"SBI IRCTC Cr Card"),r.a.createElement("option",{value:"HDFC Diners Black Cr Card"},"HDFC Diners Black Cr Card"),r.a.createElement("option",{value:"Professional Fees Received"},"Professional Fees Received"),r.a.createElement("option",{value:"Professional Fees Paid"},"Professional Fees Paid"),r.a.createElement("option",{value:"Travel Expenses"},"Travel Expenses"),r.a.createElement("option",{value:"Staff Welfare"},"Staff Welfare"),r.a.createElement("option",{value:"Conveyance Expenses"},"Conveyance Expenses"),r.a.createElement("option",{value:"Communication Expenses"},"Communication Expenses"),r.a.createElement("option",{value:"Vehicle Maintenance"},"Vehicle Maintenance"),r.a.createElement("option",{value:"Life Insurance Premium"},"Life Insurance Premium"),r.a.createElement("option",{value:"Interest Received - SB"},"Interest Received - SB"),r.a.createElement("option",{value:"Interest Received - FD"},"Interest Received - FD"),r.a.createElement("option",{value:"Public Provident Fund"},"Public Provident Fund"),r.a.createElement("option",{value:"Drawings"},"Drawings"),r.a.createElement("option",{value:"TDS Deducted FY 2019 -20"},"TDS Deducted FY 2019 -20"),r.a.createElement("option",{value:"Mediclaim Insurance"},"Mediclaim Insurance"),r.a.createElement("option",{value:"Suspense"},"Suspense"))),r.a.createElement("td",null,r.a.createElement("select",{key:a,value:t.crLed,onChange:function(t){return e.handelCrRowChange(t,a)}},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"HDFC - FD"},"HDFC - FD"),r.a.createElement("option",{value:"Syndicate Bank - FD"},"Syndicate Bank - FD"),r.a.createElement("option",{value:"HDFC Diners Premium Cr Card"},"HDFC Diners Premium Cr Card"),r.a.createElement("option",{value:"SBI IRCTC Cr Card"},"SBI IRCTC Cr Card"),r.a.createElement("option",{value:"HDFC Diners Black Cr Card"},"HDFC Diners Black Cr Card"),r.a.createElement("option",{value:"Professional Fees Received"},"Professional Fees Received"),r.a.createElement("option",{value:"Professional Fees Paid"},"Professional Fees Paid"),r.a.createElement("option",{value:"Travel Expenses"},"Travel Expenses"),r.a.createElement("option",{value:"Staff Welfare"},"Staff Welfare"),r.a.createElement("option",{value:"Conveyance Expenses"},"Conveyance Expenses"),r.a.createElement("option",{value:"Communication Expenses"},"Communication Expenses"),r.a.createElement("option",{value:"Vehicle Maintenance"},"Vehicle Maintenance"),r.a.createElement("option",{value:"Life Insurance Premium"},"Life Insurance Premium"),r.a.createElement("option",{value:"Interest Received - SB"},"Interest Received - SB"),r.a.createElement("option",{value:"Interest Received - FD"},"Interest Received - FD"),r.a.createElement("option",{value:"Public Provident Fund"},"Public Provident Fund"),r.a.createElement("option",{value:"Drawings"},"Drawings"),r.a.createElement("option",{value:"TDS Deducted FY 2019 -20"},"TDS Deducted FY 2019 -20"),r.a.createElement("option",{value:"Mediclaim Insurance"},"Mediclaim Insurance"),r.a.createElement("option",{value:"Suspense"},"Suspense"))),r.a.createElement("td",null,t.drAmt),r.a.createElement("td",null,t.crAmt),r.a.createElement("td",null,t.amt),r.a.createElement("td",null,t.narration))}));return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:!0},"Voucher to tally XML "),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor03"},r.a.createElement("ul",{className:"navbar-nav mr-auto"}))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("input",{type:"file",id:"chooseFile",ref:"fileSelector",onChange:this.readInputFile.bind(this),onClick:function(e){e.target.value=null},style:{display:"none"}}),r.a.createElement("div",{className:"bg-info pl-2 pr-2 pb-1 pt-1 text-dark"},"Selected file :",r.a.createElement("button",{onClick:function(){return e.openFile()},type:"button",className:"btn btn-sm btn-primary"},"Open File")," : ",this.state.selectedFile,"\xa0",r.a.createElement("button",{onClick:function(){return e.processCSV()},type:"button",className:"btn btn-sm btn-success"},"Process CSV"),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-warning float-right",onClick:function(){return e.generateXML()}},"Generate XML")),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Voucher Type"),r.a.createElement("th",null,"Ref Number"),r.a.createElement("th",null,"Dr Ledger"),r.a.createElement("th",null,"Cr Ledger"),r.a.createElement("th",null,"Dr Amount"),r.a.createElement("th",null,"Cr Amounr"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"narration"))),r.a.createElement("tbody",null,t)),r.a.createElement("hr",null),r.a.createElement(p,{value:this.state.xml,show:this.state.showResult,toggle:function(){return e.toggleResult()}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.57385a11.chunk.js.map