export function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
const number=(value,fallback=0)=>Number.isFinite(value)?value:fallback;
function glyph(token){const fill=token.filled?'#17365d':'#fff',stroke=`fill="${fill}" stroke="#17365d" stroke-width="3" stroke-linejoin="round"`;let svg='';
 switch(token.shape){
 case 'circle':svg=`<circle r="24" ${stroke}/>`;break;
 case 'square':svg=`<rect x="-23" y="-23" width="46" height="46" ${stroke}/>`;break;
 case 'triangle':svg=`<polygon points="0,-27 27,22 -27,22" ${stroke}/>`;break;
 case 'diamond':svg=`<polygon points="0,-28 25,0 0,28 -25,0" ${stroke}/>`;break;
 case 'arrow':svg=`<path d="M-10 25V-5H-24L0-29 24-5H10V25Z" ${stroke}/>`;break;
 case 'corner':svg=`<path d="M-24-27H-8V11H25V27H-24Z" ${stroke}/>`;break;
 case 'cross':svg=`<path d="M-9-27H9V-9H27V9H9V27H-9V9H-27V-9H-9Z" ${stroke}/>`;break;
 case 'line':svg='<path d="M-27 0H27" fill="none" stroke="#17365d" stroke-width="4"/>';break;
 case 'dots':{const count=Math.max(1,Math.min(9,Math.floor(number(token.count,1)))),cols=count<=3?count:3,rows=Math.ceil(count/cols);svg=Array.from({length:count},(_,i)=>`<circle cx="${(i%cols-(cols-1)/2)*19}" cy="${(Math.floor(i/cols)-(rows-1)/2)*19}" r="6" fill="#17365d"/>`).join('');break;}
 }
 return `<g transform="rotate(${number(token.rotation)}) scale(${Math.max(.2,Math.min(1.5,number(token.scale,1)))})">${svg}</g>`;
}
export function renderFigure(figure,compact=false){if(!figure)return '';const cols=Math.max(1,Math.min(8,Math.floor(number(figure.columns,1)))),width=cols*100+24,height=Math.ceil(figure.cells.length/cols)*100+24;const description=escapeHtml(figure.description);return `<figure class="question-figure ${compact?'compact':''}" style="max-width:${compact?90:Math.min(width,680)}px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${description}"><title>${description}</title>${figure.cells.map((cell,i)=>{if(cell.empty)return '';const tokens=cell.tokens||[];return `<g transform="translate(${12+i%cols*100} ${12+Math.floor(i/cols)*100})"><rect x="2" y="2" width="92" height="92" rx="5" fill="${cell.unknown?'#f7f2e7':'#fff'}" stroke="${cell.unknown?'#b49259':'#cbd5e1'}" stroke-width="1.5"/>${cell.unknown?'<text x="48" y="61" text-anchor="middle" font-size="36" fill="#927440">?</text>':cell.label?`<text x="48" y="58" text-anchor="middle" font-size="25" fill="#17365d">${escapeHtml(cell.label)}</text>`:tokens.map((token,j)=>`<g transform="translate(${tokens.length===1?48:24+j*(48/Math.max(1,tokens.length-1))} 48) scale(${tokens.length>1?.55:1})">${glyph(token)}</g>`).join('')}</g>`;}).join('')}</svg>${compact?'':`<figcaption>${description}</figcaption>`}</figure>`;}
