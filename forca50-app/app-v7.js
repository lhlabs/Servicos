(()=>{
'use strict';
try{const old=localStorage.getItem('forca50-auth-v6'),now=localStorage.getItem('forca50-auth-v7');if(old&&!now)localStorage.setItem('forca50-auth-v7',old)}catch{}
const files=['./v7-01.txt?v=7','./v7-02.txt?v=7','./v7-03.txt?v=7','./v7-04.txt?v=7','./v7-05.txt?v=7','./v7-06.txt?v=7','./v7-07.txt?v=7'];
Promise.all(files.map(f=>fetch(f,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('Falha ao carregar '+f);return r.text()})))
.then(parts=>(new Function(parts.join('')))())
.catch(e=>{console.error(e);document.body.innerHTML='<div style="font:16px system-ui;padding:24px;color:#fff;background:#0c1015;min-height:100vh"><h2>Erro ao carregar o Força 50</h2><p>'+String(e.message||e)+'</p></div>'});
})();
