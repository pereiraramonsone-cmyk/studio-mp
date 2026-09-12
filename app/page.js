export default function Page() {
  const whats = "555180248095";
  const msg = encodeURIComponent("Oi! Vi o site do Studio MP e quero agendar um horário!");

  return (
    <div style={{fontFamily:'system-ui', background:'#080808', color:'white', minHeight:'100vh'}}>
      <div style={{padding:'70px 20px', textAlign:'center', background:'linear-gradient(180deg, #1f1f1f 0%, #080808 100%)'}}>
        <h1 style={{fontSize:64, margin:0, fontWeight:900, letterSpacing:4}}>STUDIO MP</h1>
        <p style={{letterSpacing:7, opacity:0.4, fontSize:12, marginTop:8}}>NOVO HAMBURGO - RS</p>
        <p style={{maxWidth:360, margin:'18px auto 0', opacity:0.6, lineHeight:1.6, fontSize:15}}>Cortes na régua, fade perfeito e barba na navalha. Atendimento com hora marcada.</p>
        <a href={`https://wa.me/${whats}?text=${msg}`} target="_blank" style={{display:'inline-block', marginTop:28, background:'white', color:'black', padding:'17px 36px', borderRadius:100, fontWeight:900, textDecoration:'none', letterSpacing:1}}>AGENDAR NO WHATSAPP</a>
      </div>

      <div style={{maxWidth:900, margin:'0 auto', padding:'30px 20px'}}>
        <h2 style={{fontSize:22, letterSpacing:2, opacity:0.8}}>SERVIÇOS</h2>
        <div style={{display:'grid', gap:12, marginTop:16}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'#141414', padding:'20px', borderRadius:16, border:'1px solid #222'}}><span style={{fontWeight:700}}>Corte Fade / Degradê</span><span style={{fontWeight:900}}>R$ 45</span></div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'#141414', padding:'20px', borderRadius:16, border:'1px solid #222'}}><span style={{fontWeight:700}}>Corte + Barba</span><span style={{fontWeight:900}}>R$ 65</span></div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'#141414', padding:'20px', borderRadius:16, border:'1px solid #222'}}><span style={{fontWeight:700}}>Barba na Navalha</span><span style={{fontWeight:900}}>R$ 35</span></div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'#141414', padding:'20px', borderRadius:16, border:'1px solid #222'}}><span style={{fontWeight:700}}>Platinado / Pigmentação</span><span style={{opacity:0.6}}>a partir de R$ 80</span></div>
        </div>

        <div style={{marginTop:45, background:'white', color:'black', borderRadius:22, padding:'32px 26px', textAlign:'center'}}>
          <h2 style={{margin:0, fontSize:28, fontWeight:900, letterSpacing:1}}>VEM PRO MP</h2>
          <p style={{opacity:0.6, marginTop:10, lineHeight:1.5}}>Novo Hamburgo - RS<br/>Seg a Sáb 9h às 20h - Com hora marcada</p>
          <a href={`https://wa.me/${whats}?text=${msg}`} target="_blank" style={{display:'block', marginTop:22, background:'black', color:'white', padding:'18px', borderRadius:100, textDecoration:'none', fontWeight:900}}>FALAR NO WHATSAPP</a>
          <p style={{marginTop:14, fontSize:12, opacity:0.5}}>Resposta rápida • wa.me/555180248095</p>
        </div>

        <p style={{textAlign:'center', opacity:0.18, fontSize:11, marginTop:45, letterSpacing:1}}>© 2026 STUDIO MP • studio-mp.vercel.app</p>
      </div>

      <a href={`https://wa.me/${whats}?text=${msg}`} target="_blank" style={{position:'fixed', bottom:20, right:20, background:'#25D366', color:'white', width:62, height:62, borderRadius:'50%', display:'grid', placeItems:'center', fontSize:30, textDecoration:'none', boxShadow:'0 12px 30px rgba(0,0,0,0.6)', fontWeight:900}}>W</a>
    </div>
  )
}
