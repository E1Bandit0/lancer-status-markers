import{G as T,S as A,b as q,O as r,g as M,D as R,c as j,a as B,d as I,i as C,s as O,e as G}from"./markers-2dMaeA6z.js";import{s as x,i as z,e as d}from"./style-CHBKGuZp.js";const u=document.querySelector("#app");function D(e){return`
    <li class="row" data-id="${e.id}" data-search="${d(`${e.name} ${e.kind} ${e.note??""} ${e.summary}`.toLowerCase())}">
      ${z(e,"row-icon")}
      <div class="row-body">
        <p class="row-title">${d(e.name)}${e.note?`<span class="chip alt">${d(e.note)}</span>`:""}</p>
        <p>${d(e.summary)}</p>
        ${e.clear?`<p class="clear"><b>Ends:</b> ${d(e.clear)}</p>`:""}
      </div>
      <button class="apply" hidden aria-pressed="false">Apply</button>
    </li>`}u.innerHTML=`
  <div class="reference">
    <header>
      <h1>Lancer <span>//</span> Status reference</h1>
      <input id="search" type="search" placeholder="Search statuses" autocomplete="off" />
    </header>
    <main>
      <section id="selected" hidden>
        <h2>On selected token</h2>
        <div id="selected-list" class="selected-list"></div>
      </section>
      ${T.map(e=>`
        <section class="group">
          <h2>${e.title} <small>${e.blurb}</small></h2>
          <ul>${A.filter(i=>i.kind===e.kind).map(D).join("")}</ul>
        </section>`).join("")}
      <p class="empty" hidden>No status matches that search.</p>
      <p class="how">
        <b>Adding markers:</b> right-click a token (or select it and press Shift + S) and choose
        <b>Lancer Status</b>. Select a token while this panel is open to see what its markers mean.
      </p>
    </main>
    <footer id="gm" hidden>
      <span>Marker size</span>
      <div class="segmented">
        ${q.map(e=>`<button data-size="${e.value}">${e.label}</button>`).join("")}
      </div>
    </footer>
  </div>`;const L=document.getElementById("search"),f=[...u.querySelectorAll(".row")];L.addEventListener("input",()=>{const e=L.value.trim().toLowerCase();let i=0;for(const o of f){const p=o.dataset.search.includes(e);o.hidden=!p,p&&i++}for(const o of u.querySelectorAll(".group"))o.hidden=!o.querySelector(".row:not([hidden])");u.querySelector(".empty").hidden=i>0});x();r.onReady(async()=>{let e=[],i=[],o=await r.scene.isReady();const p=document.getElementById("selected"),g=document.getElementById("selected-list"),m=()=>{var v;const t=i.filter(a=>e.includes(a.id)&&a.type==="IMAGE"&&!C(a)),n=t.map(a=>a.id),c=[...O(i,n).values()],h=new Set(c.flatMap(a=>[...a]));if(p.hidden=t.length===0,t.length){const a=t.length===1?((v=t[0].text)==null?void 0:v.plainText)||t[0].name:`${t.length} tokens`;p.querySelector("h2").textContent=`On ${a}`;const l=A.filter(s=>h.has(s.id));g.innerHTML=l.length?l.map(s=>`<a href="#" data-jump="${s.id}">${z(s)}<span>${d(s.name)}</span></a>`).join(""):'<p class="hint">No status markers.</p>'}for(const a of f){const l=a.dataset.id,s=a.querySelector(".apply"),E=c.length>0&&c.every(y=>y.has(l));s.hidden=t.length===0,s.textContent=E?"Remove":"Apply",s.setAttribute("aria-pressed",String(E)),a.classList.toggle("active",h.has(l)),s.onclick=async()=>{s.disabled=!0;try{await G(l,n)}catch(y){await I(y)}finally{s.disabled=!1}}}};g.addEventListener("click",t=>{const n=t.target.closest("[data-jump]");if(!n)return;t.preventDefault();const c=f.find(h=>h.dataset.id===n.dataset.jump);c==null||c.scrollIntoView({behavior:"smooth",block:"center"})});const w=async()=>{i=o?await r.scene.items.getItems():[],e=await r.player.getSelection()??[],m()};r.scene.onReadyChange(async t=>{o=t,await w(),await k()}),r.scene.items.onChange(t=>{i=t,m()}),r.player.onChange(t=>{e=t.selection??[],m()});const S=document.getElementById("gm"),$=[...S.querySelectorAll("[data-size]")],b=t=>$.forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.size===t))),k=async()=>{const t=await r.player.getRole()==="GM";S.hidden=!(t&&o),b(o?await M():R)};for(const t of $)t.addEventListener("click",async()=>{const n=t.dataset.size;try{await r.scene.setMetadata({[j]:n}),b(n),await B()}catch(c){await I(c)}});await w(),await k()});
