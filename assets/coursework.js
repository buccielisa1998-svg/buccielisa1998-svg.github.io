(() => {
  const assignments = Array.isArray(window.ELISA_ASSIGNMENTS) ? window.ELISA_ASSIGNMENTS : [];
  const list = document.getElementById('assignment-list');
  const filters = document.getElementById('assignment-filters');
  const empty = document.getElementById('archive-empty');
  const count = document.getElementById('archive-count');
  if (!list || !filters || !empty || !count) return;
  const categories = [...new Set(assignments.map(x => x.category).filter(Boolean))];
  let selected = 'All';
  const makeEl=(tag,cls,txt)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(txt!==undefined)el.textContent=txt;return el;};
  function render(){
    list.replaceChildren();
    const visible = selected === 'All' ? assignments : assignments.filter(a => a.category===selected);
    const total=visible.length;
    count.textContent=`${total} ${total===1?'item':'items'}${selected==='All'?'':' · '+selected}`;
    empty.hidden=total!==0;
    list.hidden=total===0;
    for(const a of visible){
      if(!a.title || !a.url) continue;
      const card=makeEl('article','assignment-card');
      card.append(makeEl('span','', [a.course,a.year,a.format].filter(Boolean).join(' · ').toUpperCase()));
      card.append(makeEl('h3','',a.title));
      if(a.description) card.append(makeEl('p','',a.description));
      const actions=makeEl('div','assignment-actions');
      const link=makeEl('a','assignment-link',`${a.linkLabel||'View work'} ↗`);
      link.href=a.url;link.target='_blank';link.rel='noopener noreferrer';actions.append(link);
      if(a.secondaryUrl){const extra=makeEl('a','assignment-secondary',a.secondaryLabel||'Download file');extra.href=a.secondaryUrl;extra.rel='noopener noreferrer';actions.append(extra);}
      card.append(actions);list.append(card);
    }
  }
  for(const cat of ['All',...categories]){
    const btn=makeEl('button','filter-button',cat);
    btn.type='button';btn.setAttribute('aria-pressed',String(cat===selected));
    btn.addEventListener('click',()=>{
      selected=cat;
      filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.textContent===cat)));
      render();
    });
    filters.append(btn);
  }
  render();
})();
