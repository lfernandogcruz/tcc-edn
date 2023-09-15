// lista dos membros do grupo e infos
const groupMembers = {
  0: 'HOME',
  1: {
    name: 'Alan Brauna',
    route: './images/alan-brauna.pdf',
    social: '',
  },
  2: {
    name: 'Cristiane Miranda',
    route: './images/cristiane-miranda.pdf',
    social: '',
  },
  3: {
    name: 'Emerson Lopes',
    route: './images/emerson-lopes.pdf',
    social: '',
  },
  4: {
    name: 'Jonathas Freitas',
    route: './images/jonathas-freitas.pdf',
    social: '',
  },
  5: {
    name: 'Luis Cruz',
    route: './images/luis-cruz.pdf',
    social: '',
  },
  6: {
    name: 'Pedro Silva',
    route: './images/pedro-silva.pdf',
    social: '',
  },
  7: {
    name: 'Samantha Maia',
    route: './images/samantha-maia.pdf',
    social: '',
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
  if (key === 0) return null;

  // seleciona o painel
  const panel = document.getElementById('panel');

  // limpa o painel
  clearFunction(panel);

  // cria o objeto que vai receber o pdf
  const newBoard = document.createElement('object');
  // adiciona os atributos necessários
  newBoard.setAttribute('data', members[key].route);
  newBoard.setAttribute('type', 'application/pdf');
  newBoard.innerText = 'Seu navegador não suporta PDFs';

  // cria o texto que vai ser mostrado para download do PDF
  const downloadText = document.createElement('p');
  downloadText.innerText = 'Você pode baixar o arquivo clicando';

  const downloadLink = document.createElement('a');
  downloadLink.setAttribute('href', members[key].route);
  downloadLink.setAttribute('download', members[key].route);
  downloadLink.innerText = 'AQUI.';

  // adiciona os elementos ao painel
  panel.appendChild(newBoard);
  panel.appendChild(downloadText);
  panel.appendChild(downloadLink);
};

printInfo();
