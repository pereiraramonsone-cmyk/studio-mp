export default function Page() {
  return (
    <div style={{background:'#080808', color:'white', minHeight:'100vh', fontFamily:'sans-serif'}}>
      <div style={{height:4, background:'linear-gradient(90deg,#d2b12a,#fff,#d2b12a)'}}></div>
      
      <div style={{textAlign:'center', padding:'25px 15px'}}>
        <img src="/IMG-20260912-WA0023.jpg" style={{width:130,height:130,borderRadius:'50%',border:'3px solid #d2b12a',objectFit:'cover',margin:'0 auto',display:'block'}}/>
        <p style={{letterSpacing:5, opacity:0.5, marginTop:12, fontSize:11}}>STUDIO MP</p>
        <h1 style={{fontSize:28, margin:'10px 0', fontWeight:'900'}}>ESTILO QUE IMPOE<br/><span style={{color:'#d2b12a'}}>RESPEITO.</span></h1>
        <p style={{opacity:0.6, fontSize:13}}>Novo Hamburgo - RS</p>
        <a href="https://wa.me/555180248095?text=Ola%20Studio%20MP%20quero%20agendar" style={{display:'inline-block',marginTop:20,padding:'16px 32px',background:'#d2b12a',color:'black',borderRadius:40,textDecoration:'none',fontWeight:'900'}}>AGENDAR NO WHATSAPP</a>
      </div>

      <div style={{padding:'0 15px', maxWidth:500, margin:'0 auto'}}>
        <img src="/IMG-20260912-WA0024.jpg" style={{width:'100%',height:400,objectFit:'cover',borderRadius:16}}/>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:10}}>
          <img src="/IMG-20260912-WA0025.jpg" style={{width:'100%',height:200,objectFit:'cover',borderRadius:12}}/>
          <img src="/IMG-20260912-WA0026.jpg" style={{width:'100%',height:200,objectFit:'cover',borderRadius:12}}/>
        </div>
        <img src="/IMG-20260912-WA0027.jpg" style={{width:'100%',height:280,objectFit:'cover',borderRadius:12, marginTop:10}}/>
      </div>

      <div style={{maxWidth:480, margin:'20px auto', padding:'20px'}}>
        <h3 style={{opacity:0.5, fontSize:11, letterSpacing:3}}>PRECOS</h3>
        <div style={{display:'flex',justifyContent:'space-between',padding:'14px 0',borderBottom:'1px solid #222'}}><span>Corte</span><b style={{color:'#d2b12a'}}>R$ 35</b></div>
        <div style={{display:'flex',justifyContent:'space-between',padding:'14px 0',borderBottom:'1px solid #222'}}><span>Corte + Barba</span><b style={{color:'#d2b12a'}}>R$ 60</b></div>
        <div style={{display:'flex',justifyContent:'space-between',padding:'14px 0'}}><span>Sobrancelha</span><b style={{color:'#d2b12a'}}>R$ 15</b></div>
      </div>
    </div>
  )
}
