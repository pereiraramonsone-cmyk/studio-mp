export default function Page() {
  const whats = "555180248095";
  const msg = encodeURIComponent("Fala Studio MP! Quero agendar");
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
    <div style={{background:'#080808', color:'white', minHeight:'100vh', fontFamily:'sans-serif'}}>
      <div style={{height:4, background:'linear-gradient(90deg,#d2b12a,#fff,#d2b12a)'}}></div>
      <div style={{textAlign:'center', padding:'30px 20px'}}>
        <img src="/IMG-20260912-WA0023.jpg" style={{width:150,height:150,borderRadius:'50%',border:'2px solid #d2b12a',objectFit:'cover',margin:'0 auto'}}/>
        <p style={{letterSpacing:6, opacity:0.5, marginTop:15, fontSize:12}}>STUDIO MP</p>
        <h2 style={{fontSize:28, margin:'10px 0'}}>Estilo que impõe respeito.</h2>
        <a href={`https://wa.me/${whats}?text=${msg}`} style={{display:'inline-block',marginTop:20,padding:'16px 30px',background:'#d2b12a',color:'black',borderRadius:30,textDecoration:'none',fontWeight:'bold'}}>AGENDAR NO WHATSAPP</a>
      </div>
      <div style={{maxWidth:540, margin:'0 auto', padding:'0 20px 40px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:30}}>
          <img src="/IMG-20260912-WA0024.jpg" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
          <img src="/IMG-20260912-WA0025.jpg" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
          <img src="/IMG-20260912-WA0026.jpg" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
          <img src="/IMG-20260912-WA0027.jpg" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
        </div>
        {servicos.map(s=>(
          <div key={s[0]} style={{display:'flex',justifyContent:'space-between',padding:'14px 0',borderBottom:'1px solid #222'}}>
            <span>{s[0]}</span><b style={{color:'#d2b12a'}}>{s[1]}</b>
          </div>
        ))}
      </div>
    </div>
  )
}
