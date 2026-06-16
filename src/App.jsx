import { useState } from "react";
import "./App.css";

const sections = ["inicio", "autor", "resumo", "mundo", "analise", "contemporaneo"];

export default function App() {
  const [active, setSec] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = (id) => {
    setSec(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    ["inicio", "Início"],
    ["autor", "Autor"],
    ["resumo", "Narrativa"],
    ["mundo", "O Mundo"],
    ["analise", "Análise"],
    ["contemporaneo", "Hoje"],
  ];

  return (
    <div className="app">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Д-503</div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(([id, label]) => (
            <li key={id}>
              <button
                className={`nav-btn ${active === id ? "active" : ""}`}
                onClick={() => nav(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-grid-overlay" />
        <div className="hero-content">
          <div className="cipher-tag">REGISTRO № 001</div>
          <h1 className="hero-title">
            <span className="hero-title-ru">МЫ</span>
            <span className="hero-title-pt">Nós</span>
          </h1>
          <p className="hero-author">Ievguêni Zamiátin · 1924</p>
          <p className="hero-desc">
            No Estado Único, a felicidade é matemática. A liberdade é a doença.
            E o eu, o maior crime de todos.
          </p>
          <button className="hero-cta" onClick={() => nav("autor")}>
            Entrar no Estado Único
          </button>
        </div>
        <div className="hero-number">НЫ</div>
      </section>

      {/* QUOTE BANNER */}
      <div className="quote-banner">
        <div className="quote-inner">
          <span className="quote-mark">"</span>
          A liberdade e o crime estão tão indissoluvelmente ligados entre si como... como o movimento de um aeronave e a sua velocidade.
          <span className="quote-mark">"</span>
          <span className="quote-src">— Zamiátin, Nós</span>
        </div>
      </div>

      {/* AUTOR */}
      <section id="autor" className="sec sec-dark">
        <div className="container">
          <div className="sec-header">
            <span className="sec-tag">REGISTRO № 002</span>
            <h2>O Autor e seu Contexto</h2>
          </div>
          <div className="two-col">
            <div className="col-text">
              <h3>Ievguêni Ivánovitch Zamiátin</h3>
              <p>
                Nascido em 1884 em Lebedyan, Rússia, Zamiátin foi engenheiro naval,
                escritor e dissidente político. Membro do Partido Bolchevique em sua
                juventude, foi preso duas vezes pelo regime czarista — paradoxalmente,
                a Revolução de 1917 o assustaria tanto quanto a tirania que a precedeu.
              </p>
              <p>
                <em>Nós</em> foi escrito entre 1920 e 1921, em plena efervescência
                do regime soviético. A obra antecipou em décadas as grandes distopias
                do século XX: George Orwell admitiu que <em>1984</em> foi diretamente
                influenciado por Zamiátin; Aldous Huxley e seu <em>Admirável Mundo Novo</em>
                seguem trilha semelhante.
              </p>
              <p>
                O livro foi proibido na URSS. Zamiátin exilou-se em Paris em 1931,
                onde morreu em 1937 — esquecido pelo Estado que tentou retratar.
              </p>
            </div>
            <div className="col-facts">
              <div className="fact-card">
                <div className="fact-year">1905</div>
                <div className="fact-desc">Primeira prisão pelo czarismo por ativismo revolucionário</div>
              </div>
              <div className="fact-card">
                <div className="fact-year">1917</div>
                <div className="fact-desc">Revolução Russa — o evento que inspirou e aterrorizou Zamiátin</div>
              </div>
              <div className="fact-card">
                <div className="fact-year">1921</div>
                <div className="fact-desc">Conclusão de <em>Nós</em> — proibido imediatamente na URSS</div>
              </div>
              <div className="fact-card">
                <div className="fact-year">1924</div>
                <div className="fact-desc">Publicação em inglês nos EUA — nunca publicado em russo em vida</div>
              </div>
              <div className="fact-card">
                <div className="fact-year">1988</div>
                <div className="fact-desc">Primeira publicação oficial na URSS — 51 anos após a morte do autor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUMO */}
      <section id="resumo" className="sec sec-light">
        <div className="container">
          <div className="sec-header">
            <span className="sec-tag">REGISTRO № 003</span>
            <h2>A Narrativa</h2>
          </div>
          <p className="sec-intro">
            <em>Nós</em> é narrado como um diário do engenheiro <strong>D-503</strong>,
            construtor da espaçonave <em>Integral</em>, enviada para exportar a felicidade
            do Estado Único ao universo.
          </p>
          <div className="story-arc">
            <div className="arc-step">
              <div className="arc-num">I</div>
              <div className="arc-content">
                <h4>O Mundo Perfeito</h4>
                <p>
                  D-503 vive feliz no Estado Único: um país de vidro onde cada movimento
                  é visto, cada hora do dia é prescrita pela Tabela das Horas. Os cidadãos
                  — chamados <em>números</em>, nunca nomes — seguem a matemática da felicidade coletiva.
                </p>
              </div>
            </div>
            <div className="arc-step">
              <div className="arc-num">II</div>
              <div className="arc-content">
                <h4>A Perturbação</h4>
                <p>
                  D-503 conhece I-330, uma mulher que bebe, fuma, usa maquiagem — todos atos
                  proibidos. Ela o atrai para o mundo Antigo, além do Muro Verde.
                  D-503 começa a sentir algo perturbador: uma <em>alma</em>.
                </p>
              </div>
            </div>
            <div className="arc-step">
              <div className="arc-num">III</div>
              <div className="arc-content">
                <h4>A Rebelião</h4>
                <p>
                  I-330 integra um movimento revolucionário — o Mephi — que planeja
                  usar o <em>Integral</em> para derrubar o Estado Único. D-503 se vê
                  dividido entre a ordem que ama e a liberdade que descobre.
                </p>
              </div>
            </div>
            <div className="arc-step">
              <div className="arc-num">IV</div>
              <div className="arc-content">
                <h4>A Solução Final</h4>
                <p>
                  O Estado anuncia uma cirurgia obrigatória: a extirpação da fantasia — a parte
                  do cérebro responsável pela imaginação e pela resistência. D-503 se submete.
                  I-330 é executada. A ordem é restaurada.
                </p>
              </div>
            </div>
          </div>

          <div className="trecho-box">
            <div className="trecho-label">TRECHO DA OBRA</div>
            <blockquote>
              "Sou feito de números. Sou como os outros. Mas há algo dentro de mim que não
              tem número — algo que faz a minha mão tremer quando escrevo. Dizem que isso
              é uma doença. Talvez. Mas se é doença, não quero ser curado."
            </blockquote>
            <cite>— D-503, Nós (Zamiátin)</cite>
          </div>
        </div>
      </section>

      {/* O MUNDO */}
      <section id="mundo" className="sec sec-dark">
        <div className="container">
          <div className="sec-header">
            <span className="sec-tag">REGISTRO № 004</span>
            <h2>O Estado Único</h2>
          </div>
          <p className="sec-intro">
            A sociedade de <em>Nós</em> é construída sobre princípios filosóficos e
            políticos precisos — cada elemento é uma metáfora deliberada.
          </p>
          <div className="world-grid">
            <div className="world-card red">
              <div className="world-icon">⬛</div>
              <h4>Paredes de Vidro</h4>
              <p>
                Todos vivem em casas de vidro transparente. A privacidade é o pecado capital.
                <strong> Metáfora:</strong> o panóptico — a vigilância total que dispensa guardas físicos
                porque o vigiado se autovigia.
              </p>
            </div>
            <div className="world-card">
              <div className="world-icon">⏱</div>
              <h4>A Tabela das Horas</h4>
              <p>
                Cada minuto do dia é prescrito pelo Estado: trabalho, refeição, sono, sexo.
                <strong> Metáfora:</strong> o taylorismo levado ao extremo — o corpo humano como máquina eficiente.
              </p>
            </div>
            <div className="world-card">
              <div className="world-icon">🔢</div>
              <h4>Números, não Nomes</h4>
              <p>
                Cidadãos são identificados por códigos alfanuméricos (D-503, I-330, O-90).
                <strong> Metáfora:</strong> a despersonalização — a dissolução do indivíduo na massa coletiva.
              </p>
            </div>
            <div className="world-card red">
              <div className="world-icon">🌿</div>
              <h4>O Muro Verde</h4>
              <p>
                Separa o Estado Único da natureza selvagem. Além dele vivem humanos "primitivos" — livres.
                <strong> Metáfora:</strong> a fronteira entre civilização controlada e liberdade caótica.
              </p>
            </div>
            <div className="world-card">
              <div className="world-icon">🧠</div>
              <h4>A Operação da Fantasia</h4>
              <p>
                Cirurgia que remove a capacidade de imaginar. Anunciada como cura para
                a "doença da alma". <strong>Metáfora:</strong> a educação e a censura como lobotomia cultural.
              </p>
            </div>
            <div className="world-card">
              <div className="world-icon">🚀</div>
              <h4>O Integral</h4>
              <p>
                Espaçonave para exportar a "felicidade" do Estado ao universo.
                <strong> Metáfora:</strong> o imperialismo ideológico — a missão civilizatória forçada.
              </p>
            </div>
          </div>

          <div className="benfactor-box">
            <div className="ben-label">FIGURA CENTRAL DO PODER</div>
            <div className="ben-title">O Bienfeitor</div>
            <p>
              O líder supremo do Estado Único, eleito por unanimidade em cerimônia anual.
              Nunca questionado. Representa a fusão entre Estado, Deus e Máquina —
              o poder absoluto legitimado pela "vontade geral" forçada.
            </p>
          </div>
        </div>
      </section>

      {/* ANÁLISE */}
      <section id="analise" className="sec sec-light">
        <div className="container">
          <div className="sec-header">
            <span className="sec-tag">REGISTRO № 005</span>
            <h2>Análise Filosófico-Política</h2>
          </div>

          <div className="analysis-grid">
            <div className="analysis-item">
              <div className="analysis-tag">LIBERDADE</div>
              <h4>Liberdade vs. Felicidade</h4>
              <p>
                Zamiátin coloca em cena o dilema filosófico central do século XX:
                é possível ser feliz sem ser livre? O Estado Único responde que sim —
                e que a liberdade é, na verdade, a fonte de todo sofrimento.
                Ecoando Dostoievski em <em>O Grande Inquisidor</em>, a obra questiona
                se os humanos prefeririam ceder a liberdade em troca de segurança e ordem.
              </p>
            </div>
            <div className="analysis-item">
              <div className="analysis-tag">VIGILÂNCIA</div>
              <h4>O Panóptico de Vidro</h4>
              <p>
                Décadas antes de Michel Foucault teorizar o panoptismo, Zamiátin o
                imaginou com casas de vidro. O poder não precisa de violência quando
                o olhar do Estado é onipresente — o sujeito se vigia sozinho.
                A transparência arquitetônica é a metáfora perfeita do totalitarismo moderno.
              </p>
            </div>
            <div className="analysis-item">
              <div className="analysis-tag">CIÊNCIA E RAZÃO</div>
              <h4>A Razão como Tirania</h4>
              <p>
                O Estado Único é fundado no culto à matemática e à eficiência.
                A ciência não liberta — ela disciplina. Zamiátin critica o positivismo
                exacerbado: a crença de que a razão pura, aplicada à sociedade, produziria
                a ordem perfeita. É uma crítica ao Iluminismo levado às últimas consequências.
              </p>
            </div>
            <div className="analysis-item">
              <div className="analysis-tag">ARTE E SUBVERSÃO</div>
              <h4>A Imaginação como Resistência</h4>
              <p>
                A Operação da Fantasia é a solução do Estado para a rebelião —
                porque a imaginação é a raiz de todo questionamento. Para Zamiátin,
                a arte e a criatividade são atos políticos subversivos por natureza.
                A música, a poesia e o sonho são incompatíveis com o totalitarismo.
              </p>
            </div>
            <div className="analysis-item">
              <div className="analysis-tag">INDIVÍDUO E MASSA</div>
              <h4>O Eu Proibido</h4>
              <p>
                O título <em>Nós</em> é, paradoxalmente, o programa político do Estado:
                o coletivo absorve o indivíduo. D-503 descobre uma "alma" — e isso é
                tratado como doença. A tensão entre identidade individual e conformidade
                coletiva é o motor dramático e filosófico da obra.
              </p>
            </div>
            <div className="analysis-item">
              <div className="analysis-tag">UTOPIA/DISTOPIA</div>
              <h4>A Utopia de Alguém é a Distopia de Outro</h4>
              <p>
                O Estado Único acredita genuinamente ser perfeito. Zamiátin mostra que
                toda utopia contém sua própria distopia — depende de quem pergunta.
                Para o Bienfeitor, tudo funciona. Para I-330 e os rebeldes, é um pesadelo.
                A obra questiona: quem tem o direito de definir a "boa sociedade"?
              </p>
            </div>
          </div>

          <div className="trecho-box dark">
            <div className="trecho-label">TRECHO DA OBRA</div>
            <blockquote>
              "Eu pergunto: o que os homens — desde a infância — pedem, rezam, e anseiam?
              Eles querem que alguém lhes diga o que é o bem e o que é o mal. E o que é o bem
              é tudo o que reduz a fricção, e o que é o mal é tudo que aumenta."
            </blockquote>
            <cite>— O Bienfeitor, Nós (Zamiátin)</cite>
          </div>
        </div>
      </section>

      {/* CONTEMPORÂNEO */}
      <section id="contemporaneo" className="sec sec-dark">
        <div className="container">
          <div className="sec-header">
            <span className="sec-tag">REGISTRO № 006</span>
            <h2>Nós e o Mundo de Hoje</h2>
          </div>
          <p className="sec-intro">
            Escrito há mais de 100 anos, <em>Nós</em> parece um manual do presente.
          </p>
          <div className="contemporary-grid">
            <div className="con-card">
              <div className="con-icon">📡</div>
              <h4>Vigilância Digital</h4>
              <p>
                Câmeras de reconhecimento facial, algoritmos de monitoramento,
                redes sociais como espelhos do Estado de vidro. China, com seu
                sistema de "crédito social", é a realização mais literal da ficção de Zamiátin.
              </p>
            </div>
            <div className="con-card">
              <div className="con-icon">🤖</div>
              <h4>Algoritmos como Tabela das Horas</h4>
              <p>
                Plataformas digitais prescrevem o que consumimos, com quem nos relacionamos,
                o que sentimos — sem vidro, mas com código. A eficiência algorítmica
                ecoa a "Tabela das Horas" do Estado Único.
              </p>
            </div>
            <div className="con-card">
              <div className="con-icon">🌐</div>
              <h4>Populismo e Unanimidade</h4>
              <p>
                A eleição unânime do Bienfeitor ressoa em regimes contemporâneos que
                constroem consensos artificiais. A democracia de fachada — onde o resultado
                já está decidido — é uma herança do século XX ainda viva no XXI.
              </p>
            </div>
            <div className="con-card">
              <div className="con-icon">🧬</div>
              <h4>Tecnologia e Corpo</h4>
              <p>
                A Operação da Fantasia antecipa debates sobre neurotecnologia,
                psicofármacos como controle social e o sonho transhumanista de
                "otimizar" o ser humano — apagando o que nos torna imprevisíveis.
              </p>
            </div>
            <div className="con-card">
              <div className="con-icon">🎭</div>
              <h4>Arte Censurada</h4>
              <p>
                Em estados autoritários contemporâneos — e mesmo em democracias —
                a arte que questiona o poder é silenciada. Artistas são presos,
                obras banidas, plataformas bloqueadas. A imaginação ainda ameaça.
              </p>
            </div>
            <div className="con-card">
              <div className="con-icon">🌱</div>
              <h4>Natureza vs. Progresso</h4>
              <p>
                O Muro Verde entre o Estado Único e a natureza ecoa a crise climática:
                até onde vai a "civilização" antes de destruir o que a sustenta?
                A natureza "selvagem" de Zamiátin é o que hoje chamamos de biosfera.
              </p>
            </div>
          </div>

          <div className="legacy-box">
            <h3>Influências e Legado</h3>
            <div className="legacy-row">
              <div className="legacy-item">
                <span className="legacy-work">1984</span>
                <span className="legacy-author">George Orwell, 1949</span>
              </div>
              <div className="legacy-arrow">←</div>
              <div className="legacy-source">influenciado por <em>Nós</em></div>
            </div>
            <div className="legacy-row">
              <div className="legacy-item">
                <span className="legacy-work">Admirável Mundo Novo</span>
                <span className="legacy-author">Aldous Huxley, 1932</span>
              </div>
              <div className="legacy-arrow">←</div>
              <div className="legacy-source">influenciado por <em>Nós</em></div>
            </div>
            <div className="legacy-row">
              <div className="legacy-item">
                <span className="legacy-work">Fahrenheit 451</span>
                <span className="legacy-author">Ray Bradbury, 1953</span>
              </div>
              <div className="legacy-arrow">←</div>
              <div className="legacy-source">influenciado por <em>Nós</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-cipher">Д-503</div>
          <p>
            <strong>Nós</strong> · Ievguêni Zamiátin · 1921
          </p>
          <p className="footer-small">
            Material expositivo — Seminário "Outros Mundos Possíveis"
          </p>
        </div>
      </footer>
    </div>
  );
}
