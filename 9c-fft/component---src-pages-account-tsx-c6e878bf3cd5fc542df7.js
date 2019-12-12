(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{298:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(330),s=t(41),o=t(355),c=t(352),u=t(344),d=t(334),l=t(150),m=t(331),f=function(n){var e=n.transactions,t=[{key:"coulmnNonce",name:"Nonce",fieldName:"nonce",minWidth:5,maxWidth:50,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0},{key:"columnId",name:"ID",fieldName:"id",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0,onRender:function(n){var e=n.id;return a.a.createElement(o.a,{href:"../transaction/?"+e},e)}},{key:"columnSignature",name:"Signature",fieldName:"signature",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0},{key:"columnSigner",name:"Signer",fieldName:"signer",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0,onRender:function(n){var e=n.signer;return a.a.createElement(o.a,{href:"./?"+e},e)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0}];return a.a.createElement(c.a,{items:e.slice(0,-1),columns:t,selectionMode:u.b.none,getKey:function(n){return n.id},setKey:"set",layoutMode:d.e.justified,isHeaderVisible:!0,onItemInvoked:function(n){var e=n.id;return Object(s.navigate)("../transaction/?"+e)}})};e.default=function(n){var e=n.location,t=Object(i.a)(e),r=t[0];t[1];return a.a.createElement(l.a,null,a.a.createElement("h1",null,"Account Details"),a.a.createElement("p",null,"Account Number: ",a.a.createElement("b",null,r)),a.a.createElement(m.d,{variables:{involvedAddress:r}},function(n){var e=n.data,t=n.loading,i=n.error;if(t)return a.a.createElement("p",null,"loading…");if(i)return a.a.createElement("p",null,"error!");var s=e.transactionQuery.transactions;if(!s)return a.a.createElement("p",null,"There are no transactions.");var o=s.reduce(function(n,e){return e.signer===r?n[0].push(e):n[1].push(e),n},[[],[]]),c=o[0],u=o[1],d=c.length,l=u.length;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Signed Transactions: ",d),d>0?a.a.createElement(f,{transactions:t?[]:c}):a.a.createElement("div",null,"No transactions of this type"),a.a.createElement("h2",null,"Involved Transactions: ",l),l?a.a.createElement(f,{transactions:t?[]:u}):a.a.createElement("div",null,"No transactions of this type"))}))}},330:function(n,e,t){"use strict";t.d(e,"a",function(){return i});t(164);var r=t(0),a=t(162);function i(n){return[Object(r.useMemo)(function(){return n.search.substr(1)},[n]),Object(r.useCallback)(function(e){var t=n.pathname.substr(Object(a.withPrefix)("/").length-1);Object(a.navigate)(t+(e?"?"+e:""))},[n,a.navigate])]}},331:function(n,e,t){"use strict";t.d(e,"b",function(){return y}),t.d(e,"a",function(){return E}),t.d(e,"c",function(){return k}),t.d(e,"d",function(){return S});t(45);var r=t(165),a=t.n(r),i=t(0),s=t(332);t(333);function o(){var n=v(["\n    query TransactionsByAccount($involvedAddress: Address) {\n  transactionQuery {\n    transactions(involvedAddress: $involvedAddress) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return o=function(){return n},n}function c(){var n=v(["\n    query TransactionById($id: ID) {\n  transactionQuery {\n    transaction(id: $id) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return c=function(){return n},n}function u(){var n=v(["\n    query TransactionList($signer: Address!, $updatedAddresses: Address!, $desc: Boolean!, $offset: Int!, $limit: Int!) {\n  transactionQuery {\n    transactions(signer: $signer, updatedAddresses: $updatedAddresses, desc: $desc, offset: $offset, limit: $limit) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return u=function(){return n},n}function d(){var n=v(["\n    query BlockByHash($hash: ID) {\n  blockQuery {\n    block(hash: $hash) {\n      ...BlockCommon\n      miner\n      nonce\n      previousBlock {\n        hash\n      }\n      transactions {\n        ...TransactionCommon\n      }\n    }\n  }\n}\n    ","\n",""]);return d=function(){return n},n}function l(){var n=v(["\n    query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n  blockQuery {\n    blocks(desc: true, offset: $offset, limit: $limit, excludeEmptyTxs: $excludeEmptyTxs) {\n      ...BlockCommon\n      miner\n      transactions {\n        id\n      }\n    }\n  }\n}\n    ",""]);return l=function(){return n},n}function m(){var n=v(["\n    fragment TransactionCommon on Transaction {\n  actions {\n    arguments {\n      key\n      value\n    }\n  }\n  id\n  nonce\n  publicKey\n  signature\n  signer\n  timestamp\n  updatedAddresses\n}\n    "]);return m=function(){return n},n}function f(){var n=v(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return f=function(){return n},n}function v(n,e){return e||(e=n.slice(0)),n.raw=e,n}var b=a()(f()),h=a()(m()),g=a()(l(),b),y=function(n){return i.createElement(s.b,Object.assign({query:g},n))};var p=a()(d(),b,h),E=function(n){return i.createElement(s.b,Object.assign({query:p},n))};a()(u(),h);var $=a()(c(),h),k=function(n){return i.createElement(s.b,Object.assign({query:$},n))};var T=a()(o(),h),S=function(n){return i.createElement(s.b,Object.assign({query:T},n))}}}]);
//# sourceMappingURL=component---src-pages-account-tsx-c6e878bf3cd5fc542df7.js.map