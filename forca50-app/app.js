(()=>{
'use strict';
const files=['./code-01.txt?v=6','./code-02.txt?v=6','./code-03.txt?v=6','./code-04.txt?v=6','./code-05.txt?v=6','./code-06.txt?v=6'];
Promise.all(files.map(f=>fetch(f,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('Falha ao carregar '+f);return r.text()})))
  .then(parts=>(new Function(parts.join('')))())
  .catch(e=>{console.error(e);document.body.innerHTML='<div style="font:16px system-ui;padding:24px;color:#fff;background:#0c1015;min-height:100vh"><h2>Erro ao carregar o Força 50</h2><p>'+String(e.message||e)+'</p></div>'});
})();
