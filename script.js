// lista dos membros do grupo e infos
const groupMembers = {
  0: 'HOME',
  1: {
    name: 'Alan Brauna',
    route: './images/cv-pdf/alan-brauna.pdf',
    jpg1: './images/cv-jpg/alan.jpg',
    social: 'alan-brauna-087023284',
  },
  2: {
    name: 'Cristiane Miranda',
    route: './images/cv-pdf/cristiane-miranda.pdf',
    jpg1: './images/cv-jpg/cristiane1.jpg',
    jpg2: './images/cv-jpg/cristiane2.jpg',
    social: 'cristiane-morales-de-miranda',
  },
  3: {
    name: 'Emerson Lopes',
    route: './images/cv-pdf/emerson-lopes.pdf',
    jpg1: './images/cv-jpg/emerson1.jpg',
    jpg2: './images/cv-jpg/emerson2.jpg',
    social: 'emerson-lopes-964725121',
  },
  4: {
    name: 'Jonathas Freitas',
    route: './images/cv-pdf/jonathas-freitas.pdf',
    jpg1: './images/cv-jpg/jonathas1.jpg',
    jpg2: './images/cv-jpg/jonathas2.jpg',
    social: 'jonathas-carvalho-de-freitas-880528118',
  },
  5: {
    name: 'Luis Cruz',
    route: './images/cv-pdf/luis-cruz.pdf',
    jpg1: './images/cv-jpg/luis1.jpg',
    jpg2: './images/cv-jpg/luis2.jpg',
    social: 'luisfgcruz',
  },
  6: {
    name: 'Pedro Patricio',
    route: './images/cv-pdf/pedro-silva.pdf',
    jpg1: './images/cv-jpg/pedro1.jpg',
    jpg2: './images/cv-jpg/pedro2.jpg',
    social: 'pedro-patricio-7905b1270',
  },
  7: {
    name: 'Samantha Maia',
    route: './images/cv-pdf/samantha-maia.pdf',
    jpg1: './images/cv-jpg/samantha1.jpg',
    jpg2: './images/cv-jpg/samantha2.jpg',
    social: 'samanthamaiaduarte',
  },
};

// função de reset do painel onde são mostradas as infos
const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

// função que imprime as infos no painel
const printInfo = (key = 1, members = groupMembers, clearFunction = clearElement) => {
  const buttons = document.getElementsByClassName('menu-option');
  const activeBtn = document.getElementById(`name-${key}`);

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].style.textShadow = 'none';
  };

  activeBtn.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
  
  // seleciona o painel
  const panel = document.getElementById('panel');

  // limpa o painel
  clearFunction(panel);

  if (key === 0) return null;

  const lineBreak = document.createElement('br');

  // cria o nome do membro
  const memberName = document.createElement('h2');
  memberName.setAttribute('class', 'member-name');
  const nameString = `Currículo de ${members[key].name}`;
  memberName.innerText = nameString;

  // cria o elemento que vai receber o cv
  const newBoard = document.createElement('div');
  newBoard.setAttribute('class', 'board');
  const resumePageOne = document.createElement('img');
  const altString = `Currículo de ${members[key].name}`;
  resumePageOne.setAttribute('src', members[key].jpg1);
  resumePageOne.setAttribute('alt', altString);
  resumePageOne.style.backgroundColor = 'white';

  newBoard.appendChild(resumePageOne);

  if (members[key].jpg2) {
    const resumePageTwo = document.createElement('img');
    resumePageTwo.setAttribute('src', members[key].jpg2);
    resumePageTwo.setAttribute('alt', altString);
    resumePageTwo.style.backgroundColor = 'white';
    newBoard.appendChild(resumePageTwo);
  }

  // cria o texto que vai ser mostrado para download do PDF
  const downloadText = document.createElement('p');
  downloadText.setAttribute('class', 'download-text');
  downloadText.innerText = 'Você pode baixar o arquivo clicando ';

  // cria o link para download do PDF
  const downloadLink = document.createElement('a');
  downloadLink.setAttribute('href', members[key].route);
  downloadLink.setAttribute('download', members[key].route);
  downloadLink.innerText = 'AQUI.';

  downloadText.appendChild(downloadLink);

  // cria o texto que vai ser mostrado para acesso ao linkedin
  const linkedinText = document.createElement('p');
  linkedinText.setAttribute('class', 'linkedin-text');
  linkedinText.innerText = 'Você pode acessar o perfil do Linkedin clicando ';

  // cria o link para o linkedin
  const linkedinLink = document.createElement('a');
  const linkedinRoute = `https://www.linkedin.com/in/${members[key].social}`;
  linkedinLink.setAttribute('href', linkedinRoute);
  linkedinLink.setAttribute('target', '_blank');
  linkedinLink.innerText = 'AQUI.';

  linkedinText.appendChild(linkedinLink);

  // adiciona os elementos ao painel
  panel.appendChild(memberName);

  panel.appendChild(lineBreak);

  panel.appendChild(newBoard);
  panel.appendChild(downloadText);

  panel.appendChild(lineBreak);
  panel.appendChild(lineBreak);

  panel.appendChild(linkedinText);
};

printInfo();

const stringsProjeto = {
  0: 'Bem-vindo ao Grupo 1 Soluções Web',
  1: `<br>Somos uma equipe especializada em <b>criação</b> e <b>hospedagem</b> de sites,<br>
    e estamos prontos para apresentar a você uma proposta emocionante.<br>
    Imagine a <b>visibilidade</b> e as <b>oportunidades</b> que podem surgir quando<br>
    a <strong>XPTO</strong> participar de um evento com a previsão de <b>11 milhões de acessos</b>!
    <br><br>`,
  2: 'O Nosso Objetivo:',
  3: `<br>Nosso objetivo neste projeto é criar um <strong>site de destaque</strong><br>
    para divulgar os currículos dos colaboradores da empresa <strong>XPTO</strong> durante o evento.<br>
    Estamos falando de um <b>website estático</b>, desenvolvido com as mais recentes tecnologias<br>
    <b>(HTML5, CSS3, Javascript)</b>, repleto de informações valiosas sobre os <strong>talentos</strong><br>
    que farão parte desse grande acontecimento.
    <br><br>`,
  4: 'Por Que Nos Escolher?',
  5: `<br>Ao escolher o <strong>Grupo 1 Soluções Web</strong>, você estará optando por uma equipe<br>
    que compreende a importância de uma presença online confiável e eficaz.<br>
    Trabalharemos incansavelmente para garantir que o seu site seja hospedado<br>
    com <b>segurança e eficiência</b> na nuvem <b>AWS</b>, aproveitando os serviços de rede<br>
    de <b>entrega de conteúdo, baixa latência, segurança e armazenamento durável</b><br>
    que atenderão facilmente a demanda de <b>11 milhões</b> de requisições (gets e selects).
    <br><br>`,
  6: 'O Futuro É Agora!',
  7: `<br>Junte-se a nós nesta jornada rumo ao <b>sucesso</b>.<br>
    Este é o momento de garantir que a <strong>XPTO</strong> brilhe no cenário do evento,<br>
    conectando-se com um público amplo e <b>diversificado</b>.<br>
    O futuro é agora, e nós estamos aqui para torná-lo <b>brilhante</b>.<br><br>

    Entre em contato conosco hoje mesmo para discutir como podemos transformar<br>
    essa visão em realidade.<br>
    <strong>Juntos</strong>, alcançaremos novos patamares de <b>sucesso</b> e <b>visibilidade</b> online.
    <br><br>`,
  8: 'Contate-nos agora para saber mais!<br><br><br>',
};

// home
const printHome = (strings = stringsProjeto, clearFunction = clearElement) => {
  // seleciona o painel
  const [stage] = document.getElementsByClassName('stage-general');

  // limpa o painel
  clearFunction(stage);

  // cria os elementos
  const lineBreak = document.createElement('br');

  const h3Constructor = (key) => {
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'home-h3');
    h3.innerHTML = strings[key];
    return h3;
  };

  const textConstructor = (key) => {
    const text = document.createElement('p');
    text.setAttribute('class', 'home-text');
    text.innerHTML = strings[key];
    return text;
  };

  const h3_0 = h3Constructor(0);
  const h3_2 = h3Constructor(2);
  const h3_4 = h3Constructor(4);
  const h3_6 = h3Constructor(6);
  const h3_8 = h3Constructor(8);

  const text_1 = textConstructor(1);
  const text_3 = textConstructor(3);
  const text_5 = textConstructor(5);
  const text_7 = textConstructor(7);

  // adiciona os elementos ao painel
  stage.appendChild(h3_0);
  stage.appendChild(lineBreak);
  stage.appendChild(text_1);
  stage.appendChild(lineBreak);
  stage.appendChild(lineBreak);
  stage.appendChild(h3_2);
  stage.appendChild(lineBreak);
  stage.appendChild(text_3);
  stage.appendChild(lineBreak);
  stage.appendChild(lineBreak);
  stage.appendChild(h3_4);
  stage.appendChild(lineBreak);
  stage.appendChild(text_5);
  stage.appendChild(lineBreak);
  stage.appendChild(lineBreak);
  stage.appendChild(h3_6);
  stage.appendChild(lineBreak);
  stage.appendChild(text_7);
  stage.appendChild(lineBreak);
  stage.appendChild(lineBreak);
  stage.appendChild(h3_8);
};

const printArq = (clearFunction = clearElement) => {
  // seleciona o painel
  const [stage] = document.getElementsByClassName('stage-general');

  // limpa o painel
  clearFunction(stage);

  // cria os elementos
  const lineBreak = document.createElement('br');

  const arquitetura = document.createElement('img');
  arquitetura.setAttribute('src', './images/arquitetura.png');
  arquitetura.setAttribute('alt', 'Arquitetura do site');
  arquitetura.setAttribute('class', 'arquitetura-img');
  arquitetura.style.backgroundColor = 'white';

  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'arq-h3');
  h3.innerHTML = 'Arquitetura';

  const text = document.createElement('p');
  text.setAttribute('class', 'arq-text');
  text.innerHTML = `A arquitetura do site foi pensada para ser <strong>simples e eficiente</strong>.<br>
    <br>
    O site é estático e não possui banco de dados, o que reduz a complexidade e
    aumenta a <strong>velocidade</strong> de carregamento.<br>
    <br>
    O site é hospedado na <strong>AWS</strong>, na região
    de São Paulo, o que garante baixa latência para os usuários brasileiros.<br>
    <br><br><br><br><br><br><br>`;

  // adiciona os elementos ao painel
  stage.appendChild(h3);
  stage.appendChild(lineBreak);
  stage.appendChild(arquitetura);
  stage.appendChild(lineBreak);
  stage.appendChild(text);
}

const printServ = (clearFunction = clearElement) => {
  // seleciona o painel
  const [stage] = document.getElementsByClassName('stage-general');

  // limpa o painel
  clearFunction(stage);

  // cria os elementos
  const image = document.createElement('img');
  image.setAttribute('src', './images/servicos.jpg');
  image.setAttribute('alt', 'Serviços');
  image.setAttribute('class', 'serv-img');
  image.style.backgroundColor = 'white';

  const lineBreak = document.createElement('br');

  const text = document.createElement('p');
  text.setAttribute('class', 'serv-text');
  text.innerHTML = `<br>O site foi desenvolvido com as mais recentes tecnologias

    <strong>(HTML5, CSS3, Javascript)</strong>, e está hospedado na <strong>AWS</strong>.<br>
    <br>
    A AWS é uma plataforma de <strong>computação em nuvem</strong> que oferece serviços de
    <strong>baixa latência, segurança e armazenamento durável</strong>.
    <br><br><br><br><br><br><br>`;

  // adiciona os elementos ao painel
  stage.appendChild(image);
  stage.appendChild(lineBreak);
  stage.appendChild(text);
}


const headerClick = (key = 0, clearFunction = clearElement) => {
  const buttons = document.getElementsByClassName('header-option');
  const activeBtn = document.getElementById(`btn-${key}`);

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].style.textShadow = 'none';
  };

  activeBtn.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';

  const stageTeam = document.getElementsByClassName('stage-team');
  const stageGeneral = document.getElementsByClassName('stage-general');

  if (key === 3) { // equipe
    stageGeneral[0].style.display = 'none';
    stageTeam[0].style.display = 'inline';
    return null;
  };
  stageTeam[0].style.display = 'none';
  stageGeneral[0].style.display = 'inline';

  switch (key) {
    case 1: // serviços
      clearFunction(stageGeneral[0]);
      printServ();
      break;
    case 2: // arquitetura
      clearFunction(stageGeneral[0]);
      printArq();
      break;
    default: // projeto
      clearFunction(stageGeneral[0]);
      printHome();
  }
};

headerClick();
