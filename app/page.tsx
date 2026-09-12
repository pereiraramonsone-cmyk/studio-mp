import Link from "next/link";
const WHATS = "https://wa.me/5551980248095?text=Quero%20agendar%20na%20Studio%20MP";

const servicos = [
  { nome: "Corte", preco: "35,00" },
  { nome: "Corte Máq", preco: "25,00" },
  { nome: "Corte Tesoura", preco: "40,00" },
  { nome: "Sobrancelha", preco: "15,00" },
  { nome: "Barba Simples", preco: "25,00" },
  { nome: "Barboterapia", preco: "35,00", destaque: true },
  { nome: "Hig. Nariz", preco: "20,00" },
  { nome: "Hig. Orelha", preco: "20,00" },
];

export default function Home(){
  return(
    <main className="min-h-screen bg-[#0A0F0D] text-white">
      <header className="flex justify-between items-center px-6 py-4 border-b border-[#12261F] sticky top-0 bg-[#0A0F0D]/90 backdrop-blur z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#12261F] border border-[#C6A87D] rounded-full flex items-center justify-center text-[#C6A87D] font-black">MP</div>
          <div><p className="font-black leading-none">STUDIO MP</p><p className="text-[10px] tracking-[0.2em] text-[#C6A87D]">BARBEARIA</p></div>
        </div>
        <a href={WHATS} className="bg-[#C6A87D] text-black px-5 py-2 rounded-full font-bold text-sm">AGENDAR</a>
      </header>

      <section className="px-6 py-14">
        <p className="text-[#C6A87D] text-xs tracking-widest">R. ÍCARO, 777 • NOVO HAMBURGO - RS</p>
        <h1 className="text-5xl font-black leading-[0.9] mt-4">ESTILO QUE<br/><span className="text-[#C6A87D]">IMPÕE</span><br/>RESPEITO.</h1>
        <a href={WHATS} className="inline-block mt-8 bg-[#C6A87D] text-black px-8 py-4 rounded-full font-black">AGENDAR HORÁRIO</a>
      </section>

      <section className="px-6 py-10 bg-[#12261F]/50">
        <h2 className="text-3xl font-black mb-6">SERVIÇOS</h2>
        <div className="grid grid-cols-2 gap-4">
          {servicos.map(s=>(
            <div key={s.nome} className={`rounded-2xl p-5 border ${s.destaque?'bg-[#C6A87D] text-black border-[#C6A87D]':'bg-[#0A0F0D] border-[#12261F]'}`}>
              <p className="font-bold text-sm">{s.nome}</p>
              <p className={`text-2xl font-black mt-2 ${s.destaque?'text-black':'text-[#C6A87D]'}`}>R$ {s.preco}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="p-10 text-center border-t border-[#12261F] mt-10">
        <a href={WHATS} className="bg-[#C6A87D] text-black px-10 py-4 rounded-full font-black">CHAMAR NO WHATS 51 98024-8095</a>
      </footer>
    </main>
  )
}
