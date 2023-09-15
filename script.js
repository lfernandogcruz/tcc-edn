// lista dos membros do grupo e infos
const groupMembers = {
  0: 'HOME',
  1: {
    name: 'Alan Brauna',
    route: './images/alan-brauna.pdf',
    social: 'alan-brauna-087023284',
  },
  2: {
    name: 'Cristiane Miranda',
    route: './images/cristiane-miranda.pdf',
    social: 'cristiane-morales-de-miranda',
  },
  3: {
    name: 'Emerson Lopes',
    route: './images/emerson-lopes.pdf',
    social: 'emerson-lopes-964725121',
  },
  4: {
    name: 'Jonathas Freitas',
    route: './images/jonathas-freitas.pdf',
    social: 'jonathas-carvalho-de-freitas-880528118',
  },
  5: {
    name: 'Luis Cruz',
    route: './images/luis-cruz.pdf',
    social: 'linkedin.com/in/luisfgcruz',
  },
  6: {
    name: 'Pedro Silva',
    route: './images/pedro-silva.pdf',
    social: 'pedro-patricio-7905b1270',
  },
  7: {
    name: 'Samantha Maia',
    route: './images/samantha-maia.pdf',
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

  // cria o objeto que vai receber o pdf
  const newBoard = document.createElement('object');
  // adiciona os atributos necessários
  newBoard.setAttribute('data', members[key].route);
  newBoard.setAttribute('type', 'application/pdf');
  newBoard.innerText = 'Seu navegador não suporta PDFs';

  // cria o texto que vai ser mostrado para download do PDF
  const downloadText = document.createElement('p');
  downloadText.innerText = 'Você pode baixar o arquivo clicando ';

  // cria o link para download do PDF
  const downloadLink = document.createElement('a');
  downloadLink.setAttribute('href', members[key].route);
  downloadLink.setAttribute('download', members[key].route);
  downloadLink.innerText = 'AQUI.';

  downloadText.appendChild(downloadLink);

  // cria o texto que vai ser mostrado para acesso ao linkedin
  const linkedinText = document.createElement('p');
  linkedinText.innerText = 'Você pode acessar o perfil do Linkedin clicando ';

  // cria o link para o linkedin
  const linkedinLink = document.createElement('a');
  const linkedinRoute = `https://www.linkedin.com/in/${members[key].social}`;
  linkedinLink.setAttribute('href', linkedinRoute);
  linkedinLink.setAttribute('target', '_blank');
  linkedinLink.innerText = 'AQUI.';

  linkedinText.appendChild(linkedinLink);

  // adiciona os elementos ao painel
  panel.appendChild(newBoard);
  panel.appendChild(downloadText);
  
  panel.appendChild(lineBreak);
  panel.appendChild(lineBreak);

  panel.appendChild(linkedinText);
};

printInfo();
