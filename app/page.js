export default function Home(){
return(
<main style={{background:"#0a0a0a",color:"#fff",padding:"20px",textAlign:"center",fontFamily:"Arial"}}>

<div style={{padding:"30px 0 10px 0"}}>
<h1 style={{color:"#d4af37",fontSize:"42px",margin:"0",fontWeight:"900",letterSpacing:"2px"}}>STUDIO MP</h1>
<p style={{letterSpacing:"4px",fontSize:"12px",color:"#aaa",marginTop:"5px"}}>NOVO HAMBURGO - RS</p>
<p style={{fontSize:"13px",color:"#888",marginTop:"10px"}}>R. Bartolomeu de Gusmao, 1117 - Canudos</p>
</div>

<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginTop:"25px"}}>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0023.jpg" style={{width:"100%",borderRadius:"12px",aspectRatio:"1",objectFit:"cover"}}/>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0024.jpg" style={{width:"100%",borderRadius:"12px",aspectRatio:"1",objectFit:"cover"}}/>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0025.jpg" style={{width:"100%",borderRadius:"12px",aspectRatio:"1",objectFit:"cover"}}/>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0026.jpg" style={{width:"100%",borderRadius:"12px",aspectRatio:"1",objectFit:"cover"}}/>
<img src="https://raw.githubusercontent.com/pereiraramonsone-cmyk/studio-mp/main/app/IMG-20260912-WA0027.jpg" style={{width:"100%",borderRadius:"12px",aspectRatio:"1",objectFit:"cover",gridColumn:"1 / 3"}}/>
</div>

<div style={{background:"#1a1a1a",padding:"20px",borderRadius:"16px",marginTop:"20px",textAlign:"left",border:"1px solid #d4af37"}}>
<h2 style={{color:"#d4af37",textAlign:"center",marginTop:"0"}}>TABELA DE PRECOS</h2>
<p>✂️ SOCIAL - R$35</p><p>✂️ MAQUINA - R$25</p><p>🧔 BARBA - R$25</p><p>🔥 BARBOTERAPIA - R$35</p><p>💡 LUZES - R$90</p><p>⚪ PLATINADO - R$120</p>
</div>

<a href="https://wa.me/555180248090?text=Ola%20STUDIO%20MP%20quero%20agendar" style={{display:"block",background:"#d4af37",color:"#000",padding:"18px",borderRadius:"12px",marginTop:"20px",fontWeight:"bold",textDecoration:"none"}}>AGENDAR NO WHATSAPP</a>

</main>
)
}
