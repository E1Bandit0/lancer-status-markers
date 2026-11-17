import{G as T,S as A,a as q,O as i,g as I,D as M,b as j,c as B,d as E,i as C,s as P,t as _}from"./markers-DYaK3p3Z.js";import{s as G,i as O,e as d}from"./style-Bnlgm5X3.js";const u=document.querySelector("#app");function N(e){return`
    <li class="row" data-id="${e.id}" data-search="${d(`${e.name} ${e.kind} ${e.note??""} ${e.summary}`.toLowerCase())}">
      ${O(e,"row-icon")}
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
          <ul>${A.filter(r=>r.kind===e.kind).map(N).join("")}</ul>
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
        ${q.map(e=>`<button data-per-row="${e.value}">${e.label}</button>`).join("")}
      </div>
    </footer>
  </div>`;const L=document.getElementById("search"),w=[...u.querySelectorAll(".row")];L.addEventListener("input",()=>{const e=L.value.trim().toLowerCase();let r=0;for(const o of w){const p=o.dataset.search.includes(e);o.hidden=!p,p&&r++}for(const o of u.querySelectorAll(".group"))o.hidden=!o.querySelector(".row:not([hidden])");u.querySelector(".empty").hidden=r>0});G();i.onReady(async()=>{let e=[],r=[],o=await i.scene.isReady();const p=document.getElementById("selected"),f=document.getElementById("selected-list"),m=()=>{var v;const t=r.filter(a=>e.includes(a.id)&&a.type==="IMAGE"&&!C(a)),n=t.map(a=>a.id),c=[...P(r,n).values()],h=new Set(c.flatMap(a=>[...a]));if(p.hidden=t.length===0,t.length){const a=t.length===1?((v=t[0].text)==null?void 0:v.plainText)||t[0].name:`${t.length} tokens`;p.querySelector("h2").textContent=`On ${a}`;const l=A.filter(s=>h.has(s.id));f.innerHTML=l.length?l.map(s=>`<a href="#" data-jump="${s.id}">${O(s)}<span>${d(s.name)}</span></a>`).join(""):'<p class="hint">No status markers.</p>'}for(const a of w){const l=a.dataset.id,s=a.querySelector(".apply"),R=c.length>0&&c.every(y=>y.has(l));s.hidden=t.length===0,s.textContent=R?"Remove":"Apply",s.setAttribute("aria-pressed",String(R)),a.classList.toggle("active",h.has(l)),s.onclick=async()=>{s.disabled=!0;try{await _(l,n)}catch(y){await E(y)}finally{s.disabled=!1}}}};f.addEventListener("click",t=>{const n=t.target.closest("[data-jump]");if(!n)return;t.preventDefault();const c=w.find(h=>h.dataset.id===n.dataset.jump);c==null||c.scrollIntoView({behavior:"smooth",block:"center"})});const g=async()=>{r=o?await i.scene.items.getItems():[],e=await i.player.getSelection()??[],m()};i.scene.onReadyChange(async t=>{o=t,await g(),await k()}),i.scene.items.onChange(t=>{r=t,m()}),i.player.onChange(t=>{e=t.selection??[],m()});const S=document.getElementById("gm"),b=[...S.querySelectorAll("[data-per-row]")],$=t=>b.forEach(n=>n.setAttribute("aria-pressed",String(Number(n.dataset.perRow)===t))),k=async()=>{const t=await i.player.getRole()==="GM";S.hidden=!(t&&o),$(o?await I():M)};for(const t of b)t.addEventListener("click",async()=>{const n=Number(t.dataset.perRow);try{await i.scene.setMetadata({[j]:n}),$(n),await B()}catch(c){await E(c)}});await g(),await k()});
