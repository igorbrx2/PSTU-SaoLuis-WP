<?php
// Template Name: Home
?>

<?php get_header(); ?>

<body>

  <!-- MENU -->
  <header id="cabecalho">
    <div class="logo">
      <a href="./">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/Logo PSTU/logo-pstu.png" alt="Logo PSTU São Luís">
      </a>
    </div>
    <nav>
      <ul id="nav-list" class="montserrat-font">
        <li><a href="#pre-candidaturas">Candidatos</a></li>
        <li><a href="#rolagemProp">Propostas</a></li>
        <li><a href="#agenda">Agenda</a></li>
      </ul>
    </nav>
    <div class="mobile-menu">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </header>

  <!-- INTRODUÇÃO -->
  <section id="intro">
    <img class="responsiveImg" src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/candidatos.png" alt="Candidatos do PSTU São Luís: Saulo Arcangeli, Jaciara Castro, Coletivo das Pretas e Jayro Mesquita">
  </section>

  <div class="zap">
    <a href="https://wa.me/5598991951616" target="_blank">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/botaoZap.png" alt="Contato via WhatsApp">
    </a>
  </div>

  <!-- CONTRIBUIÇÃO FINANCEIRA -->
  <section id="contribuicao">
    <div class="contribuicao montserrat-font">
      <h2>Contribuição Financeira</h2>
      <p>Copie o Pix ou escaneie o QR Code para apoiar o PSTU São Luís.</p>
    </div>
    <div class="QRCode">
      <div class="divCopiar">
        <a href="#" id="copyLink">
          <img class="copiar" src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/btnCopiar.png" alt="Copiar código Pix">
        </a>
        <p class="montserrat-font">Pix: <b>56.256.408/0001-83</b></p>
      </div>
      <img class="QR" src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/qrCodeContribuicao.png" alt="QR Code para contribuição financeira">
    </div>
  </section>

  <!-- QUEM SOMOS -->
  <section id="pre-candidaturas">
    <h2 class="montserrat-font">Quem Somos</h2>

    <ul class="candidatos-pref container-1200">

      <li class="card-candidato" data-candidato="sauloArcangeli">
        <a href="./">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/saulo.png" alt="Saulo Arcangeli - Candidato a prefeito de São Luís">
          <h3 class="montserrat-font"><strong>Saulo</strong><br><b>Arcangeli</b></h3>
          <div class="linha-vermelha"></div>
          <p class="montserrat-font">Candidato a prefeito de São Luís</p>
        </a>
      </li>

      <li class="card-candidato" data-candidato="jaciaraCastro">
        <a href="./">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/jaciara.png" alt="Jaciara Castro - Candidata a vice-prefeita de São Luís">
          <h3 class="montserrat-font"><strong>Jaciara</strong><br><b>Castro</b></h3>
          <div class="linha-vermelha"></div>
          <p class="montserrat-font">Candidata a vice-prefeita de São Luís</p>
        </a>
      </li>

      <li class="card-candidato" data-candidato="coletivoDasPretas">
        <a href="./">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/coletivoPretas.png" alt="Coletivo das Pretas - Candidatas a vereadoras de São Luís">
          <h3 class="montserrat-font"><strong>Coletivo<br>das Pretas</strong></h3>
          <div class="linha-vermelha"></div>
          <p class="montserrat-font">Candidatas a vereadoras de São Luís</p>
        </a>
      </li>

      <li class="card-candidato" data-candidato="jayroMesquita">
        <a href="./">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/jayro.png" alt="Jayro Mesquita - Candidato a vereador de São Luís">
          <h3 class="montserrat-font"><strong>Jayro</strong><br><b>Mesquita</b></h3>
          <div class="linha-vermelha"></div>
          <p class="montserrat-font" id="rolagemProp">Candidato a vereador de São Luís</p>
        </a>
      </li>

    </ul>

  </section>

  <div class="bg-faca-parte">
    <section id="faca-parte">
      <div class="vamos-trilhar">
        <div class="clique-aqui">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/cartilhas.png" alt="Cartilhas do PSTU São Luís">
        </div>
        <h2 class="montserrat-font">
          Acesse Nossas<br>
          Propostas
        </h2>
        <div class="btnCartilha">
          <a href="<?php echo get_stylesheet_directory_uri(); ?>/arquivosDeReferencia/programapstuSaulo&Jaciara2024.pdf" download="programapstuSaulo&Jaciara2024.pdf">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/btnBaixar.png" alt="Baixar proposta PSTU São Luís">
          </a>
          <a href="<?php echo get_stylesheet_directory_uri(); ?>/arquivosDeReferencia/programapstuSaulo&Jaciara2024.pdf" target="_blank">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/fotosCandidatos2024/btnLer.png" alt="Ler proposta PSTU São Luís">
          </a>
        </div>
      </div>
    </section>
  </div>

  <!-- VIDEOS -->
  <section id="videos">
    <h2 class="montserrat-font">VÍDEOS</h2>
    <div id="main-video-container" class="container-1200">
    </div>
    <div id="video-thumbnails" class="container-1200">
    </div>
  </section>

  <!-- AGENDA -->
  <section class="container-agenda">

    <h1 class="montserrat-font agendaH1" id="agenda">AGENDA</h1>

    <div class="container">
      <div class="calendar">
        <div class="eventos"><span class="montserrat-font">EVENTOS</span></div>
        <div class="month">
          <i class="prev">❮</i>
          <div class="date">
            <h1></h1>
            <p class="montserrat-font"></p>
          </div>
          <i class="next">❯</i>
        </div>
        <div class="weekdays">
          <div>Dom</div>
          <div>Seg</div>
          <div>Ter</div>
          <div>Qua</div>
          <div>Qui</div>
          <div>Sex</div>
          <div>Sáb</div>
        </div>
        <div class="days"></div>
      </div>
      <div class="agenda">
        <div class="prox-eventos"><span class="montserrat-font">PRÓXIMOS EVENTOS</span></div>
        <div class="events montserrat-font"></div>
      </div>
    </div>

  </section>

  <!-- FOOTER -->
  <section class="modalNando-container" id="modal" style="position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 999;
  justify-content: center;
  align-items: center;">
    <div class="modalNando" style="background: white;
  text-align: start;
  height: 70vh;
  width: 800px;
  max-width: 90vw;
  overflow-y: auto;
  padding: 50px 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 22px -3px rgba(0,0,0,0.4);
  position: relative;">
      <button data-modal="fechar" class="botaoFechar" id="fecharModal" style="background: var(--vermelho-fonte);
  color: white;
  font-weight: bold;
  border-style: none;
  position: absolute;
  z-index: 9999;
  padding: 5px 10px;
  border-radius: 10px;
  top: 10px;
  right: 10px;">fechar</button>
      <div id="modalConteudo">
      </div>
    </div>
  </section>

  <!-- Modal para a mensagem de sucesso -->
  <div id="successMessage" class="montserrat-font">
    Código copiado com sucesso! Pague o PIX no aplicativo do seu banco.
  </div>

  <!-- Overlay para cobrir o fundo -->
  <div id="overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999;"></div>

  <?php get_footer(); ?>