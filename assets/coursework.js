(() => {
  const assignments = Array.isArray(window.ELISA_ASSIGNMENTS) ? window.ELISA_ASSIGNMENTS : [];
  const list = document.getElementById('assignment-list');
  const filters = document.getElementById('assignment-filters');
  const empty = document.getElementById('archive-empty');
  const count = document.getElementById('archive-count');
  if (!list || !filters || !empty || !count) return;
  const categories = [...new Set(assignments.map(x => x.category).filter(Boolean))];
  let selected = 'All';
  const makeEl=(tag,cls,text)=>{ const el=document.createElement(tag); if(cls)el.className=cls; if(text!==undefined)el.textContent=text;return el; };
  function render(){
    list.replaceChildren();
    const visible = selected === 'All' ? assignments : assignments.filter(a=>a.category===selected);
    const total = visible.length;
    count.textContent = `${total} ${total === 1 ? 'entry' : 'entries'}${selected === 'All' ? '' : ' · '+selected}`;
    empty.hidden = total !== 0;
    list.hidden = total === 0;
    for(const a of visible){
      if(!a.title || !a.url) continue;
      const card = makeEl('article','assignment-card');
      card.append(makeEl('span','', [a.course,a.year].filter(Boolean).join(' · ').toUpperCase()));
      card.append(makeEl('h3','',a.title));
      if(a.description) card.append(makeEl('p','',a.description));
      const link = makeEl('a','assignment-link',`${a.linkLabel || 'View work'} ↗`);
      link.href = a.url; link.target = '_blank'; link.rel='noopener noreferrer';
      card.append(link);list.append(card);
    }
  }
  if(categories.length){
    for(const cat of ['All',...categories]){
      const btn=makeEl('button','filter-button',cat);
      btn.type='button';btn.setAttribute('aria-pressed',String(cat===selected));
      btn.addEventListener('click',()=>{
        selected=cat;
        filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed', String(b.textContent===cat)));
        render();
      });
      filters.append(btn);
    }
  }
  render();
})();
