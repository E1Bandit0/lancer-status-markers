import{S as h,O as s,t as $,d,e as k,P as p,s as E,f as S}from"./markers-DYaK3p3Z.js";import{e as n,i as b,s as T}from"./style-Bnlgm5X3.js";const o=document.querySelector("#app"),m="Click a status to add or remove it. Hover for what it does.";o.innerHTML=`
  <div class="picker">
    <div class="grid">
      ${h.map(e=>`
        <button class="tile" data-id="${e.id}" aria-pressed="false" title="${n(e.name)}">
          ${b(e)}
          <span>${n(e.name)}</span>
        </button>`).join("")}
    </div>
    <div class="detail" aria-live="polite"><p class="hint">${m}</p></div>
    <div class="picker-foot">
      <button class="link" id="open-reference">Full reference</button>
      <button class="link danger" id="clear-all">Clear all</button>
    </div>
  </div>`;const u=o.querySelector(".detail"),c=[...o.querySelectorAll(".tile")];function f(e){const t=e?S.get(e):void 0;if(!t){u.innerHTML=`<p class="hint">${m}</p>`;return}u.innerHTML=`
    <p class="detail-title">${n(t.name)}
      <span class="chip">${t.kind}</span>${t.note?`<span class="chip alt">${n(t.note)}</span>`:""}
    </p>
    <p>${n(t.summary)}</p>
    ${t.clear?`<p class="clear"><b>Ends:</b> ${n(t.clear)}</p>`:""}`}for(const e of c){const t=()=>f(e.dataset.id);e.addEventListener("mouseenter",t),e.addEventListener("focus",t)}o.querySelector(".grid").addEventListener("mouseleave",()=>f());T();s.onReady(async()=>{let e=await s.player.getSelection()??[];const t=a=>{const i=[...E(a,e).values()];for(const l of c){const v=l.dataset.id,r=i.filter(g=>g.has(v)).length,y=r===0?"false":r===i.length?"true":"mixed";l.setAttribute("aria-pressed",y)}};t(await s.scene.items.getItems()),s.scene.items.onChange(t),s.player.onChange(async a=>{e=a.selection??[],t(await s.scene.items.getItems())});for(const a of c)a.addEventListener("click",async()=>{a.disabled=!0;try{await $(a.dataset.id,e)}catch(i){await d(i)}finally{a.disabled=!1}});document.getElementById("clear-all").addEventListener("click",()=>k(e).catch(d)),document.getElementById("open-reference").addEventListener("click",async()=>{await s.action.open(),await s.popover.close(p)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&s.popover.close(p)})});
