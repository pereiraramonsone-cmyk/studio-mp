export default function Page() {
  const whats = "555180248095";
  const msg = encodeURIComponent("Fala Studio MP! Quero agendar 💈");
  const servicos = [
    ["Corte", "R$ 35,00"],
    ["Corte Máquina", "R$ 25,00"],
    ["Corte Tesoura", "R$ 40,00"],
    ["Sobrancelha", "R$ 15,00"],
    ["Barba Simples", "R$ 25,00"],
    ["Barboterapia", "R$ 35,00"],
    ["Hig. Nariz", "R$ 20,00"],
    ["Hig. Orelha", "R$ 20,00"],
  ];
  return (
    <div style={{background:'#080808', color:'white', minHeight:'100vh', fontFamily:'system-ui'}}>
      <div style={{height:4, background:'linear-gradient(90deg, #0d2b12, #D4AF37, #0d2b12)'}}/>
      <div style={{textAlign:'center', padding:'40px 20px 20px', background:'radial-gradient(800px 400px at 50% 0%, #132a14 0%, #080808 70%)'}}>
        /IMG-20260912-WA0023.jpg
        <p style={{letterSpacing:6, opacity:0.5, fontSize:12, marginTop:16}}>STUDIO MP • NOVO HAMBURGO</p>
        <h2 style={{fontSize:28, margin:'10px 0 0', fontWeight:900}}>NA RÉGUA SEMPRE</h2>
        <a href={`https://wa.me/${whats}?text=${msg}`} style={{display:'inline-block', marginTop:20, background:'linear-gradient(180deg, #F8E9A6, #D4AF37)', color:'#0f1f0a', padding:'18px 38px', borderRadius:100, fontWeight:900, textDecoration:'none'}}>AGENDAR 51 8024-8095</a>
      </div>
      <div style={{maxWidth:540, margin:'0 auto', padding:'10px 16px 50px'}}>
        <h2 style={{color:'#D4AF37', fontSize:12, letterSpacing:5, margin:'24px 8px 12px'}}>4 CORTES REAIS</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <img src="/corte1.jpg" style={{width:'100%', height:320, objectFit:'cover', borderRadius:20, border:'1px solid #222'}} />
          <img src="/corte2.jpg" style={{width:'100%', height:320, objectFit:'cover', borderRadius:20, border:'1px solid #222'}} />
          <img src="/corte3.jpg" style={{width:'100%', height:320, objectFit:'cover', borderRadius:20, border:'1px solid #222'}} />
          <img src="/corte4.jpg" style={{width:'100%', height:320, objectFit:'cover', borderRadius:20, border:'1px solid #222'}} />
        </div>
        <h2 style={{color:'#D4AF37', fontSize:12, letterSpacing:5, margin:'36px 8px 0'}}>TABELA DE PREÇOS</h2>
        <div style={{marginTop:12, borderRadius:20, overflow:'hidden', border:'1px solid #1e2e1a'}}>
          {servicos.map(([n,p], i)=><div key={n} style={{display:'flex', justifyContent:'space-between', padding:'18px 20px', background: i%2===0 ? '#121212' : '#0f0f0f', borderLeft:'3px solid #D4AF37'}}><span style={{fontWeight:600}}>{n}</span><b style={{color:'#D4AF37'}}>{p}</b></div>)}
        </div>
        <div style={{marginTop:28, background:'linear-gradient(135deg, #1a3316, #080808)', border:'1px solid #D4AF37', borderRadius:24, padding:28, textAlign:'center'}}>
          <h2 style={{margin:0, color:'#F8E9A6'}}>VEM PRO MP 💈</h2>
          <a href={`https://wa.me/${whats}?text=${msg}`} style={{display:'block', marginTop:18, background:'#D4AF37', color:'black', padding:'18px', borderRadius:100, textDecoration:'none', fontWeight:900}}>CHAMAR NO WHATSAPP</a>
        </div>
      </div>
    </div>
  )
}
