// lista dos membros do grupo e infos
const groupMembers = {
  0: 'HOME',
  1: {
    name: 'Alan Brauna',
    route: './images/alan-brauna.pdf',
    jpg1: './images/cv-jpg/alan.jpg',
    social: 'alan-brauna-087023284',
  },
  2: {
    name: 'Cristiane Miranda',
    route: './images/cristiane-miranda.pdf',
    jpg1: './images/cv-jpg/cristiane1.jpg',
    jpg2: './images/cv-jpg/cristiane2.jpg',
    social: 'cristiane-morales-de-miranda',
  },
  3: {
    name: 'Emerson Lopes',
    route: './images/emerson-lopes.pdf',
    jpg1: './images/cv-jpg/emerson1.jpg',
    jpg2: './images/cv-jpg/emerson2.jpg',
    social: 'emerson-lopes-964725121',
  },
  4: {
    name: 'Jonathas Freitas',
    route: './images/jonathas-freitas.pdf',
    jpg1: './images/cv-jpg/jonathas1.jpg',
    jpg2: './images/cv-jpg/jonathas2.jpg',
    social: 'jonathas-carvalho-de-freitas-880528118',
  },
  5: {
    name: 'Luis Cruz',
    route: './images/luis-cruz.pdf',
    jpg1: './images/cv-jpg/luis1.jpg',
    jpg2: './images/cv-jpg/luis2.jpg',
    social: 'linkedin.com/in/luisfgcruz',
  },
  6: {
    name: 'Pedro Patricio',
    route: './images/pedro-silva.pdf',
    jpg1: './images/cv-jpg/pedro1.jpg',
    jpg2: './images/cv-jpg/pedro2.jpg',
    social: 'pedro-patricio-7905b1270',
  },
  7: {
    name: 'Samantha Maia',
    route: './images/samantha-maia.pdf',
    jpg1: './images/cv-jpg/samantha1.jpg',
    jpg2: './images/cv-jpg/samantha2.jpg',
    social: 'samanthamaiaduarte',
  },
};

// função de reset do painel onde são mostradas as infos
const clearPanel = (panel) => {
  while (panel.firstChild) {
    panel.removeChild(panel.firstChild);
  }
};

// função que imprime as infos no painel
const printInfo = (key = 0, members = groupMembers, clearFunction = clearPanel) => {
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

const headerMap = {
  0: {
    name: 'Projeto',
    content: 'Projeto',
  },
  1: {
    name: 'Serviços',
    content: 'Serviços',
  },
  2: {
    name: 'Arquitetura',
    content: 'Arquitetura',
  },
  3: {
    name: 'Equipe',
    content: 'Equipe',
  },
};

const headerClick = (key = 0) => {
  const stageTeam = document.getElementsByClassName('stage-team');
  const stageGeneral = document.getElementsByClassName('stage-general');

  if (key !== 3) {
    stageTeam[0].style.display = 'none';
    stageGeneral[0].style.display = 'inline';
  }

  if (key === 3) {
    stageGeneral[0].style.display = 'none';
    stageTeam[0].style.display = 'inline';
  }
};

headerClick();
