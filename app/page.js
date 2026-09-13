export default function Home(){
return(
<main style={{background:"#0a0a0a",color:"#fff",padding:"15px",textAlign:"center",fontFamily:"Arial"}}>

{/* LOGO PRIMEIRO - AGORA CERTO */}
<div style={{padding:"25px 0 15px 0"}}>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0027.jpg" style={{width:"160px",height:"160px",borderRadius:"50%",objectFit:"cover",border:"3px solid #d4af37",margin:"0 auto",display:"block"}}/>
<h1 style={{color:"#d4af37",fontSize:"38px",margin:"15px 0 0 0",fontWeight:"900"}}>STUDIO MP</h1>
<p style={{letterSpacing:"4px",fontSize:"12px",color:"#aaa"}}>BARBEARIA</p>
<p style={{fontSize:"14px",color:"#d4af37",marginTop:"10px",fontWeight:"bold"}}>📍 Rua Icaro, 777 - Canudos<br/>Novo Hamburgo - RS</p>
</div>

{/* 4 CORTES */}
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginTop:"20px"}}>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0023.jpg" style={{width:"100%",borderRadius:"12px",aspectRatio:"1",objectFit:"cover"}}/>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0024.jpg" style={{width:"100%",borderRadius:"12px",aspectRatio:"1",objectFit:"cover"}}/>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0025.jpg" style={{width:"100%",borderRadius:"12px",aspectRatio:"1",objectFit:"cover"}}/>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0026.jpg" style={{width:"100%",borderRadius:"12px",aspectRatio:"1",objectFit:"cover"}}/>
</div>

<div style={{background:"#1a1a1a",padding:"20px",borderRadius:"16px",marginTop:"20px",textAlign:"left",border:"1px solid #d4af37"}}>
<h2 style={{color:"#d4af37",textAlign:"center",marginTop:"0"}}>TABELA DE PRECOS</h2>
<p>✂️ SOCIAL - R$35</p><p>✂️ MAQUINA - R$25</p><p>🧔 BARBA - R$25</p><p>🔥 BARBOTERAPIA - R$35</p><p>💡 LUZES - R$90</p><p>⚪ PLATINADO - R$120</p>
</div>

<a href="https://wa.me/555180248090?text=Ola%20STUDIO%20MP%20da%20Rua%20Icaro%20777%20quero%20agendar" style={{display:"block",background:"#d4af37",color:"#000",padding:"18px",borderRadius:"12px",marginTop:"20px",fontWeight:"bold",textDecoration:"none"}}>AGENDAR NO WHATSAPP</a>

</main>
)
}
