console.log("Script carregado corretamente");

// Definindo os compromissos diretamente no código
const date = new Date();

const compromissos = {
    "2024-08-26": ["Participação no dia de Lutas dos bancários - 9h", "Entrevista Jornal da Mira - 12h", "Gravação de programas para as redes sociais - 16h"],
	"2024-08-27": ["Panfletagem na Deodoro/Canto da Viração - 8h", "Entrevista no programa Conexão Nós, na Rádio FM Esperança - 13h", "Roda de conversa com moradores da Fé em Deus - 19h"],
  "2024-08-28": ["Gravação de programa para as redes sociais - 8h", "Reunião com o Sindicato dos Urbanitários sobre saneamento em São Luís - 14h30", "Reunião da Coordenação da campanha - 19h"],
  "2024-08-29": ["Entrevista Saulo Arcangeli na Mais FM - 7h", "Panfletagem no Liceu Maranhense(cobertura Mirante) - 13h"],
  "2024-08-30": ["Terminal da Integração – Dia D do passe livre estudantil - 7h", "Roda de conversa com as mulheres da Vila Dom Luís(a confirmar) - 16h"],
  "2024-08-31": ["Ato contra o feminicídio na Deodoro(cobertura Mirante) - 8h", "Adesivaço na sede - 16h"],
  "2024-09-01": ["Feira do Bairro de Fátima - 7h30", "Adesivaço na sede - 16h"],
  "2024-09-02": ["Entrevista Saulo Arcangeli no programa Abrindo o Verbo (Mirante News) - 14h30", "Sabatina Saulo Arcangeli no programa Ponto Continuando (92,3 FM) - 19h"],
  "2024-09-03": ["Entrevista Pauta Alternativa (Tv Alternativa) - 8h30", "Reunião com o Fórum de Trabalhadores e Trabalhadoras da Assistência Social , no Sind. de Assistentes Sociais (casa do trabalhador) cobertura Mirante - 15h", "Entrevista Saulo Arcangeli UQ Podcast - 19h30"],
  "2024-09-04": ["Entrevista Saulo Arcangeli na Educadora - 8h", "Gravação de vídeo para redes sociais - 16h"],
	"2024-09-06": ["Entrevista Rádio Universidade - 9h", "Entrevista JTVUFMA - 12h30", "Reunião sorteio sabatina do Programa Direto a Pauta da Rádio  92.3 FM - 16h"],
	"2024-09-07": ["Brechó de Lutas - 8h", "Programa Café com Leane Lago - 9h30", "Roda de conversa na comunidade tradicional Rio dos Cachorros (zona rural) - 16h"],
	"2024-09-08": ["Panfletagem Feira do Anjo da Guarda - 8h"],
	"2024-09-12": ["Bom dia Mirante - 7h30", "Panfletagem RU da UFMA - 11h30", "Sabatina no programa Tá na Hora (Difusora) - 19h"],
	"2024-09-13": ["Panfletagem na CAEMA Centro - 7h30", "Gravação de programa para redes sociais- 8h30", "Sabatina Direto a Pauta (FM 92.3) - 18h"],
	"2024-09-14": ["Caminhada no Quilombo Liberdade - 7h30"],
	"2024-09-15": ["Panfletagem na feira do João Paulo  - 8h"],
	"2024-09-16": ["Gravação de programas para redes sociais - 9h", "Panfletagem no IFMA Monte Castelo - 13h30", "Encontro com Associação de Surdos do Maranhão - 16h"],
	"2024-09-17": ["Panfletagem na empresa de transporte 1001 - 4h", "Panfletagem na UEMA - 11h30", "Ato pelo SIM ao Passe Livre Estudantil (Praça Deodoro) - 16h", "Plenária de Campanha - 19h"],
	"2024-09-18": ["Panfletagem na Vale - 6h", "Sabatina Band - 18h50"],
  "2024-09-19": ["Entrega do documento da UNICEF com “Análises e sugestões com relação à direitos de crianças e adolescentes”, na sede do partido - 9h", "Debate Imirante - 20h", "Debate Imirante - 20h"],
  "2024-09-20": ["Panfletagem IEMA (Centro) - 6h45", "Debate TV Difusora - 17h30"],
  "2024-09-21": ["Roda de conversa com o Fórum de Pessoas com Deficiência - 9h30", "Caminhada na comunidade tradicional do TAIM - 17h"],
  "2024-09-22": ["Panfletagem Feira da Cidade Operária - 8h"],
  "2024-09-23": ["Panfletagem na empresa de transporte 1001 - 4h", "Caminhada na comunidade tradicional do Cajueiro - 17h", "Live sobre a educação de São Luís - 20h"],
  "2024-09-24": ["Panfletagem nos Correios do São Cristóvão - 7h30", "Debate sobre Passe Livre Estudantil na UNDB - 17h", "Plenária de campanha - 19h"],
  "2024-09-25": ["Panfletagem no CEM São Cristóvão - 12h30", "Caminhada na comunidade tradicional Rio dos Cachorros - 18h"],
  "2024-09-26": ["JM1 - 12h", "Caminhada na Rua Grande - 16h"],
    // Adicione mais compromissos conforme necessário
};

const findNearestDayWithAppointments = (selectedDate) => {
    let nearestDay = null;
    let nearestDayDiff = Infinity;
    const todayTime = selectedDate.getTime();

    for (let day in compromissos) {
        const dayDate = new Date(day);
        const diff = dayDate.getTime() - todayTime;

        if (diff >= 0 && diff < nearestDayDiff && compromissos[day].length > 0) {
            nearestDay = dayDate;
            nearestDayDiff = diff;
        }
    }

    return nearestDay;
};

const renderCalendar = () => {
    date.setDate(1);
    const monthDays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    document.querySelector('.date p').innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        const currentDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else if (compromissos[currentDate]) {
            days += `<div class="appointment">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;

    updateEvents(new Date());
};

const updateEvents = (selectedDate) => {
    const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    let events = compromissos[formattedDate] || [];
    const eventsDiv = document.querySelector('.events');

    if (events.length === 0) {
        const nearestDay = findNearestDayWithAppointments(selectedDate);
        if (nearestDay) {
            const nearestDate = `${nearestDay.getFullYear()}-${String(nearestDay.getMonth() + 1).padStart(2, '0')}-${String(nearestDay.getDate()).padStart(2, '0')}`;
            events = compromissos[nearestDate] || [];
            eventsDiv.innerHTML = `<h3 style="text-align: center; font-size: 1.2rem; margin: 10px auto;">Compromissos para ${nearestDay.getDate()}</h3>` + events.map(event => `<div>${event}</div>`).join('');
        } else {
            eventsDiv.innerHTML = "<h3 style='text-align: center; font-size: 1.2rem; margin: 10px auto;'>Sem compromissos</h3>";
        }
    } else {
        eventsDiv.innerHTML = `<h3 style="text-align: center; font-size: 1.2rem; margin: 10px auto;">Compromissos para ${selectedDate.getDate()}</h3>` + events.map(event => `<div>${event}</div>`).join('');
    }
};

document.querySelectorAll('.days').forEach(day => {
    day.addEventListener('click', (e) => {
        if (e.target.classList.contains('prev-date') || e.target.classList.contains('next-date')) return;
        const selectedDay = parseInt(e.target.innerHTML);
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), selectedDay);
        updateEvents(selectedDate);
    });
});

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();


// COPIAR PIX
document.getElementById('copyLink').addEventListener('click', function(event) {
  event.preventDefault(); 
  
  const textToCopy = '56.256.408/0001-83';

  // Verifica se a API Clipboard está disponível
  if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(function() {
          console.log('Texto copiado com sucesso!');
          document.getElementById('successMessage').style.display = 'block';
          document.getElementById('overlay').style.display = 'block';
      }).catch(function(error) {
          console.error('Erro ao copiar o texto: ', error);
      });
  } else {
      console.error('A API Clipboard não é suportada neste navegador.');
      alert('Seu navegador não suporta a funcionalidade de copiar para a área de transferência.');
  }
});

document.addEventListener('click', function(event) {
  if (event.target.id !== 'copyLink' && event.target.id !== 'successMessage') {
      document.getElementById('successMessage').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
  }
});


// VIDEOS
document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = 'AIzaSyCYvN7-x4gcl4Vf1UH72YcfYgMGAgSytto'; // Substitua com sua chave API
    const CHANNEL_ID = 'UCGOV9SpaX3gSE4e6EZANX9g'; // Substitua com o ID do canal
    const MAX_RESULTS = 5;
    const mainVideoContainer = document.getElementById('main-video-container');
    const videoThumbnailsContainer = document.getElementById('video-thumbnails');
  
    async function fetchLatestVideos() {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`);
        const data = await response.json();
  
        data.items.forEach((item, index) => {
          const videoId = item.id.videoId;
          const videoTitle = item.snippet.title;
          const videoThumbnail = item.snippet.thumbnails.high.url;
  
          if (index === 0) {
            // Embed the most recent video
            mainVideoContainer.innerHTML = `
              <div class="video-main">
                <iframe width="70%" height="450px" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
              </div>
            `;
          } else {
            // Display thumbnails for the rest of the videos
            const videoElement = document.createElement('div');
            videoElement.classList.add('video-thumbnail');
            videoElement.innerHTML = `
              <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                <img src="${videoThumbnail}" alt="${videoTitle}">
                <p class="montserrat-font" style="font-weight: bold; text-align: start; line-height: 1.1;">${videoTitle}</p>
              </a>
            `;
            videoThumbnailsContainer.appendChild(videoElement);
          }
        });
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
        mainVideoContainer.innerHTML = '<p>Não foi possível carregar o vídeo. Tente novamente mais tarde.</p>';
      }
    }
  
    fetchLatestVideos();
  });  

// MODAIS DE APRESENTAÇÃO

    // conteúdo dinâmico dos candidatos
    const candidatos = {
    'sauloArcangeli': `
    <p class="montserrat-font" style="line-height: 1.3; font-size: 1.2rem;">Professor da UEMA, doutor em Políticas Públicas e servidor do Ministério Público do Trabalho. É sindicalista de entidades de trabalhadores e trabalhadoras e atua como membro dos movimentos sociais no Conselho da Cidade de São Luís, que delibera sobre as diretrizes para a formulação e implementação da política de desenvolvimento urbano e rural da nossa cidade.<br>
<br>A candidatura de Saulo Arcangeli à prefeitura de São Luís, um ativista presente nas principais lutas que ocorreram em São Luís nos últimos anos, é a expressão, no campo eleitoral, das reivindicações dos trabalhadores e da juventude da cidade, de uma maioria, pobre e periférica, que é excluída de políticas públicas adequadas de transporte e mobilidade urbana, saúde, educação, abastecimento de água, iluminação pública, trabalho, e que sofre com uma agressiva poluição ambiental e com as várias formas de opressão às mulheres, negros e negras e aos LGBTQIAP+.<br>
    </p>`,

    'jaciaraCastro': `<p class="montserrat-font" style="line-height: 1.3; font-size: 1.2rem;"">
    A candidata a vice-prefeita de São Luís é formada em Serviço Social pela Universidade Federal do Maranhão, empregada pública da Companhia de Saneamento Ambiental do Maranhão (CAEMA) e ativista do movimento de mulheres da cidade de São Luís.<br>
    
    <br>Atua, junto com os trabalhadores e trabalhadoras da companhia, pela restruturação e manutenção de uma CAEMA pública e estatal e, nestas eleições, será uma voz, juntamente com Saulo Arcangeli, pela permanência da companhia em São Luís. Jaciara tem uma voz firme no combate ao machismo e a violência contra as mulheres, atuando no Movimento Mulheres em Luta, MML.

</p>`,

'coletivoDasPretas': `<p class="montserrat-font" style="line-height: 1.3; font-size: 1.2rem;">
  Um coletivo que reúne três mulheres negras, professora Ester Durans, professora aposentada Marina Martins e Kimberlly Serejo, estudante de Serviço Social da Universidade Federal do Maranhão, que colocam seus nomes à disposição para disputar uma vaga na Câmara Municipal de São Luís, em busca de garantias de políticas públicas à população desassistida, em defesa da educação, da juventude e das trabalhadoras e trabalhadores da periferia de nossa cidade.<br>

<br>O Coletivo das Pretas é uma candidatura coletiva classista, revolucionária e socialista, que defende um programa voltado para a classe trabalhadora, para a juventude  trabalhadora, preta e pobre, no combate às opressões machistas, racistas e LGBTfóbicas, na luta contra as desigualdades sociais e econômicas, e firmemente contra a violência às mulheres: encarceramento,  feminicídios e todas as mazelas cotidianas do capitalismo.<br> 

<br>Defendemos as políticas compensatórias e reparações históricas que garantam o acesso à educação, habitação, saúde, trabalho, emprego, renda, assistência social, segurança, cultura e lazer. Contudo, deixamos evidente que tais políticas no capitalismo são temporárias e não garantirão a total emancipação das mulheres e dos trabalhadores. É preciso destruir o sistema capitalista, que oprime, explora e humilha o nosso povo! É preciso construir a revolução socialista.<br>
  
  <br><strong>No Legislativo municipal, iremos elaborar e votar em projetos que garantam, entre outras pautas:
</strong><br>

  <br>-	Escolas socialmente referenciadas;<br>
  <br>-	Creches públicas e gratuitas em todos os bairros;<br>
  <br>-	Fim da escala de trabalho 6x1;<br>
  <br>-	Transporte público municipal de qualidade e com gratuidade para estudantes e desempregados;<br>
  <br>-	Respeito aos pisos salariais da Educação, da Saúde e da Segurança;<br>
</p>`,

'jayroMesquita': `<p class="montserrat-font" style="line-height: 1.3; font-size: 1.2rem;">
Filho de uma família de treze filhos que passava muitas dificuldades em município do continente do estado do Maranhão e que resolveu vir para São Luís em busca de melhores dias para sua prole, Jayro Mesquita é recém-formado em Engenharia Civil e seu TCC foi trabalhado a partir de uma situação de palafita existente em seu bairro, o Santa Cruz, ali Jayro projetou o recolhimento dos esgoto dessa comunidade de palafitas com vistas a diminuir o impacto ambiental e também contribuir para uma melhor qualidade de vida daqueles comunitários, principalmente para as crianças que ali vivem.<br>

<br>Jayro Mesquita é trabalhador portuário avulso no Porto do Itaqui. Recentemente participou de um movimento de greve exatamente em defesa da manutenção do posto de trabalho de dezenas de operários, que vivem frequentemente recebendo ataques e ameaças da classe empresarial. Durante o movimento grevista os trabalhadores se impuseram e foram para a frente do porto, para mostrar aos empresários que os trabalhadores estão atentos e não permitirão que sejam retirados nossos direitos de trabalho dentro da área portuária.<br>

<br>Candidato a vereador pela primeira vez, estarei focado na elaboração e votação de projetos que garantam pontos cruciais da minha luta e das pautas do PSTU, entre os quais:<br> 

<br>-	Implantação do passe livre para estudantes e desempregados;<br>
<br>-	Implantação de uma política de casas populares para moradores de área de risco e palafitas;<br>
<br>-	Fiscalização da aplicação de leis que garantam a vida e a saúde de mulheres e crianças, e elaboração de projetos com o teor da salvaguarda das minorias;
<br>
<br>-	Fiscalização rigorosa e punição para empresas, órgãos e indivíduos que agridam o meio ambiente da Ilha de São Luís;<br>
</p>`,

    };
    
    document.addEventListener('DOMContentLoaded', () => {
        const modalContainer = document.querySelector('.modalNando-container');
        const modalConteudo = document.getElementById('modalConteudo');
        const botaoFechar = document.getElementById('fecharModal');
        
        document.querySelectorAll('.card-candidato').forEach(candidato => {
            candidato.addEventListener('click', (event) => {
              event.preventDefault();
              const idCandidato = candidato.getAttribute('data-candidato');
              if (candidatos[idCandidato]) {
                modalConteudo.innerHTML = candidatos[idCandidato];
                modalContainer.style.display = 'flex';
              }
            });
          });

          botaoFechar.addEventListener('click', () => {
            modalContainer.style.display = 'none';
          });
        
          modalContainer.addEventListener('click', (event) => {
            if (event.target === modalContainer) {
              modalContainer.style.display = 'none';
            }
          });
        });

// MENU RESPONSIVO

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeclass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeclass);
        this.mobileMenu.classList.toggle(this.activeclass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    "#nav-list",
    "#nav-list li"
);
mobileNavbar.init();

// ROLAGEM
document.querySelector('a[href="#pre-candidaturas"]').addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector('#pre-candidaturas');
    const offset = 100; // ajuste conforme necessário
    const topPosition = targetSection.offsetTop - offset;

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });  
 });



