(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4,7],{295:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(355),c=t(162),i=t(330),u=t(352),s=t(344),o=t(334),d=t(331),m=function(e){var n=e.txs,t=[{key:"columnId",name:"Id",fieldName:"id",minWidth:50,maxWidth:300,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e){var n=e.id;return r.a.createElement(l.a,{href:"../transaction/?"+n},n)}},{key:"columnSigner",name:"Signer",fieldName:"signer",minWidth:50,maxWidth:250,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"string",isPadded:!0,onRender:function(e){var n=e.signer;return r.a.createElement(l.a,{href:"../account/?"+n},n)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:50,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0},{key:"columnActionNumber",name:"Action #",minWidth:20,maxWidth:40,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"number",isPadded:!0,onRender:function(e){return r.a.createElement(r.a.Fragment,null,e.actions?e.actions.length:"--")}}];return r.a.createElement(u.a,{items:n,columns:t,selectionMode:s.b.none,getKey:function(e){return e.id},setKey:"set",layoutMode:o.e.justified,isHeaderVisible:!0,onItemInvoked:function(e){return Object(c.navigate)("../transaction/?"+e.id)}})};n.default=function(e){var n=e.location,t=Object(i.a)(n),a=t[0],c=(t[1],a);return r.a.createElement(d.a,{variables:{hash:c}},function(e){var n=e.data,t=e.loading,a=e.error;if(t)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Loading…"));if(a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Failed to load ",c," - ",JSON.stringify(a.message)));var i=n.blockQuery.block;if(!i)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"No such block: ",r.a.createElement("code",null,c)));var u="../account/?"+i.miner;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Index"),r.a.createElement("dd",null,i.index),r.a.createElement("dt",null,"Hash"),r.a.createElement("dd",null,r.a.createElement("code",null,i.hash)),r.a.createElement("dt",null,"Nonce"),r.a.createElement("dd",null,r.a.createElement("code",null,i.nonce)),r.a.createElement("dt",null,"Miner"),r.a.createElement("dd",null,r.a.createElement(l.a,{href:u},r.a.createElement("code",null,i.miner))),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,i.timestamp),r.a.createElement("dt",null,"Previous hash"),r.a.createElement("dd",null,i.previousBlock?r.a.createElement(l.a,{href:"./?"+i.previousBlock.hash},r.a.createElement("code",null,i.previousBlock.hash)):"N/A"),r.a.createElement("dt",null,"Difficulty"),r.a.createElement("dd",null,i.difficulty),r.a.createElement("dt",null,"Transactions"),i.transactions.length>0?r.a.createElement(m,{txs:i.transactions}):r.a.createElement("dd",null,r.a.createElement("i",null,"There is no transactions in this block."))))})}},296:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(330),c=t(331),i=t(355);n.default=function(e){var n=e.location,t=Object(l.a)(n),a=t[0],u=(t[1],a);return r.a.createElement(c.c,{variables:{id:u}},function(e){var n=e.data,t=e.loading,a=e.error;if(t)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("p",null,"Loading…"));if(a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("p",null,"Failed to load ",u," - ",JSON.stringify(a.message)));var l=n.transactionQuery.transaction;if(!l)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("p",null,"No such transaction: ",r.a.createElement("code",null,u)));var c="../account/?"+l.signer;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Id"),r.a.createElement("dd",null,r.a.createElement("code",null,l.id)),r.a.createElement("dt",null,"Nonce"),r.a.createElement("dd",null,l.nonce," "),r.a.createElement("dt",null,"Public Key"),r.a.createElement("dd",null,r.a.createElement("code",null,l.publicKey)),r.a.createElement("dt",null,"Signature"),r.a.createElement("dd",null,r.a.createElement("code",null,l.signature)),r.a.createElement("dt",null,"Signer"),r.a.createElement("dd",null,r.a.createElement(i.a,{href:c},r.a.createElement("code",null,l.signer))),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,l.timestamp),r.a.createElement("dt",null,"Updated Addresses"),l.updatedAddresses.map(function(e,n){return r.a.createElement("dd",{key:n},r.a.createElement(i.a,{href:"../account/?"+e},r.a.createElement("code",null,e)))}),r.a.createElement("dt",null,"Actions"),l.actions.map(function(e,n){return r.a.createElement("dd",{key:n},r.a.createElement("dl",null,e.arguments.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.key},r.a.createElement("dt",null,e.key),r.a.createElement("dd",null,r.a.createElement("code",null," ",JSON.stringify(e.value)," ")))})))})))})}},299:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(330),c=t(295),i=t(296);n.default=function(e){var n=e.location,t=Object(l.a)(n);t[0],t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Results"),r.a.createElement(c.default,{location:n}),r.a.createElement(i.default,{location:n}))}},330:function(e,n,t){"use strict";t.d(n,"a",function(){return l});t(164);var a=t(0),r=t(162);function l(e){return[Object(a.useMemo)(function(){return e.search.substr(1)},[e]),Object(a.useCallback)(function(n){var t=e.pathname.substr(Object(r.withPrefix)("/").length-1);Object(r.navigate)(t+(n?"?"+n:""))},[e,r.navigate])]}},331:function(e,n,t){"use strict";t.d(n,"b",function(){return y}),t.d(n,"a",function(){return p}),t.d(n,"c",function(){return T}),t.d(n,"d",function(){return B});t(45);var a=t(165),r=t.n(a),l=t(0),c=t(332);t(333);function i(){var e=f(["\n    query TransactionsByAccount($involvedAddress: Address) {\n  transactionQuery {\n    transactions(involvedAddress: $involvedAddress) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return i=function(){return e},e}function u(){var e=f(["\n    query TransactionById($id: ID) {\n  transactionQuery {\n    transaction(id: $id) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return u=function(){return e},e}function s(){var e=f(["\n    query TransactionList($signer: Address!, $updatedAddresses: Address!, $desc: Boolean!, $offset: Int!, $limit: Int!) {\n  transactionQuery {\n    transactions(signer: $signer, updatedAddresses: $updatedAddresses, desc: $desc, offset: $offset, limit: $limit) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return s=function(){return e},e}function o(){var e=f(["\n    query BlockByHash($hash: ID) {\n  blockQuery {\n    block(hash: $hash) {\n      ...BlockCommon\n      miner\n      nonce\n      previousBlock {\n        hash\n      }\n      transactions {\n        ...TransactionCommon\n      }\n    }\n  }\n}\n    ","\n",""]);return o=function(){return e},e}function d(){var e=f(["\n    query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n  blockQuery {\n    blocks(desc: true, offset: $offset, limit: $limit, excludeEmptyTxs: $excludeEmptyTxs) {\n      ...BlockCommon\n      miner\n      transactions {\n        id\n      }\n    }\n  }\n}\n    ",""]);return d=function(){return e},e}function m(){var e=f(["\n    fragment TransactionCommon on Transaction {\n  actions {\n    arguments {\n      key\n      value\n    }\n  }\n  id\n  nonce\n  publicKey\n  signature\n  signer\n  timestamp\n  updatedAddresses\n}\n    "]);return m=function(){return e},e}function E(){var e=f(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return E=function(){return e},e}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}var g=r()(E()),h=r()(m()),v=r()(d(),g),y=function(e){return l.createElement(c.b,Object.assign({query:v},e))};var b=r()(o(),g,h),p=function(e){return l.createElement(c.b,Object.assign({query:b},e))};r()(s(),h);var k=r()(u(),h),T=function(e){return l.createElement(c.b,Object.assign({query:k},e))};var $=r()(i(),h),B=function(e){return l.createElement(c.b,Object.assign({query:$},e))}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-92e8b3e2b28ee1f901a5.js.map