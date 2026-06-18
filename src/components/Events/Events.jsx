import "./Events.css";
import { Calendar } from "lucide-react";

// Importe as imagens da sua pasta (ajuste os caminhos conforme sua estrutura)
import SulImg1 from "../../assets/Images/EventsImgs/img4.jpg"; // Imagem da esquerda (plantando)
import SulImg2 from "../../assets/Images/EventsImgs/img3.jpg"; // Imagem do meio (grupo interno)
import SulImg3 from "../../assets/Images/EventsImgs/img5.jpg"; // Imagem da direita (grupo externo)
import SummitImg from "../../assets/Images/EventsImgs/img1.jpg"; // Imagem do Summit (bandeiras)
import NacionalImg from "../../assets/Images/EventsImgs/img2.jpg"; // Imagem do Encontro Nacional (grupo de cima)

export default function Events() {
  return (
    <section className="events-section" id="events">
      <div className="container">
        
        {/* Título da seção aproveitando o seu CSS global */}
        <div className="title-wrapper text-center">
          <div className="section-title">
            <Calendar size={24} strokeWidth={1.5} />
            <span>Eventos</span>
          </div>
        </div>

        <div className="events-list">
          
          {/* CARD 1: Encontro Regional Sul (Layout de 4 colunas) */}
          <article className="event-card layout-4col">
            <img src={SulImg1} alt="Ação de plantio no Imersão Sul" className="event-img" />
            
            <div className="event-content">
              <h3>Encontro regional sul</h3>
              <p>
                A Imersão Sul nasceu como um espaço para transformar conexão em ação: aproximar pessoas, 
                fortalecer vínculos entre hubs e reconectar com o território que nos atravessa. Em Florianópolis, 
                vivemos uma experiência que foi além de um encontro: foi sobre construir juntos. A Ilha foi o 
                ponto de partida. O impacto, a gente leva adiante.
              </p>
            </div>

            <img src={SulImg2} alt="Grupo Imersão Sul ambiente interno" className="event-img" />
            <img src={SulImg3} alt="Grupo Imersão Sul ambiente externo" className="event-img" />
          </article>

          {/* CARD 2: Summit 2026/2027 (Layout de 2 colunas invertido) */}
          <article className="event-card layout-2col-reverse">
            <img src={SummitImg} alt="Participantes do Summit com bandeiras" className="event-img" />
            
            <div className="event-content">
              <h3>Summit 2026/2027</h3>
              <p>
                Realizado em Genebra, na Suíça, o Global Shapers Annual Summit é o principal encontro 
                mundial da comunidade Global Shapers, reunindo jovens lideranças de centenas de cidades 
                para compartilhar experiências, fortalecer conexões e cocriar soluções para os desafios mais urgentes do mundo.
              </p>
              <p>
                O Summit oferece uma oportunidade única para ampliar perspectivas, desenvolver novas competências e 
                conectar-se com uma rede global de agentes de transformação comprometidos com a construção de um futuro 
                mais sustentável, inclusivo e resiliente.
              </p>
              <p>
                Por meio de palestras, workshops, diálogos estratégicos e atividades colaborativas, os participantes 
                têm acesso a debates de relevância global, trocas interculturais e conexões que fortalecem iniciativas 
                de impacto em suas comunidades ao redor do mundo.
              </p>
            </div>
          </article>

          {/* CARD 3: Encontro Nacional (Layout de 2 colunas padrão) */}
          <article className="event-card layout-2col">
            <div className="event-content">
              <h3>Encontro nacional</h3>
              <p>
                O Encontro Nacional Global Shapers Brasil 2026 já tem destino definido: Belém, porta de entrada 
                da Amazônia e símbolo da riqueza cultural e ambiental do nosso país.
              </p>
              <p>
                Nos dias 18, 19 e 20 de setembro de 2026, Shapers de todo o Brasil se reunirão para uma jornada 
                transformadora de aprendizado, conexão e construção coletiva. Serão três dias de experiências imersivas, 
                trocas inspiradoras e colaboração para impulsionar soluções inovadoras para os desafios do presente e do futuro.
              </p>
              <p>
                Durante o encontro, os participantes poderão vivenciar: Experiências imersivas e inspiradoras; Conexão 
                com a cultura, os saberes e os territórios amazônicos; Workshops, painéis e diálogos de alto impacto; 
                Networking qualificado com lideranças e agentes de transformação de todo o país; Espaços de cocriação e 
                desenvolvimento de soluções para desafios reais.
              </p>
            </div>
            
            <img src={NacionalImg} alt="Grupo do Encontro Nacional" className="event-img" />
          </article>

        </div>
      </div>
    </section>
  );
}