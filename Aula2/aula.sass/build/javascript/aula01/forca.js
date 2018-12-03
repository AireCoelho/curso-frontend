class Forca{

    constructor(){
      this.imagens = [
        'resources/img/forca01.png',
        'resources/img/forca02.png',
        'resources/img/forca03.png',
        'resources/img/forca04.png',
        'resources/img/forca05.png',
        'resources/img/forca06.png',
        'resources/img/forca07.png',
        'resources/img/forca08.png'
      ];
      this.imagemAtual = 0;
  
    }
  
    isEnforcado(){
      return this.imagemAtual === this.imagens.length -1;
    }
  
    getTemplate(){
      const template = `
        <div class="forca">
          <img src="${this.imagens[this.imagemAtual]}">
          <div>
            <button id="btnPrevious">Anterior</button>
            <button id="btnNext">Próximo</button>
          </div>
        </div>
      `;
      return template;
    }
  
    render(rootElement){
      if(rootElement){
        rootElement.innerHTML = this.getTemplate();
      }
    }
  
    bind(rootElement){
      this.elImagem = rootElement.querySelector('img');
      this.elBtnProximo = rootElement.querySelector('#btnNext');
      this.elBtnAnterior = rootElement.querySelector('#btnPrevious');
      if(this.elBtnProximo){
        this.elBtnProximo.addEventListener('click',this.proximo.bind(this));
      }
      if(this.elBtnAnterior){
        this.elBtnAnterior.addEventListener('click',this.anterior.bind(this));
      }
    }
    proximo(){
      if(this.imagemAtual< this.imagens.length -1){
        this.imagemAtual++;
      }
      this.updateImagem();
    }
    anterior(){
      if(this.imagemAtual> 0){
        this.imagemAtual--;
      }
      this.updateImagem();
    }
    updateImagem(){
      if(this.elImagem){
        this.elImagem.src = this.imagens[this.imagemAtual];
      }
    }
  
    start(){
      const rootElement = document.getElementById('forca');
      this.render(rootElement);
      this.bind(rootElement);
    }
  }
  
  class Teclado{
    constructor(){
      this.teclas = 'QWEÉÊRTYUÚIÍOÓÔÕPAÁÀÂÃSDFGHJKLÇCZXVBNM';
      this.selecionados = [];
      this.listeners = [];
      this.processarClick = true;
    }
  
    addKeyPressListener(listener){
      if(listener){
        this.listeners.push(listener);
      }
    }
    updateListeners(tecla){
      for(let listener of this.listeners){
        listener(tecla);
      }
    }
  
    getTemplate(){
      let teclado = `<div class="teclado">`;
      for(let index = 0; index < this.teclas.length; index++){
        teclado += `<div class="tecla">${this.teclas[index]}</div>`;
      }
      teclado+='</div>';
      return teclado;
    }
  
    render(rootElement){
      if(rootElement){
        rootElement.innerHTML = this.getTemplate();
      }
    }
    bind(rootElement){
      const teclas = rootElement.querySelectorAll('.tecla');
      const action = this.acionarTecla.bind(this);
      for(let index = 0; index < teclas.length; index++){
        teclas[index].addEventListener('click',action);
      }
    }
    acionarTecla(evento){
      if(this.processarClick){
        const tecla = evento.target;
        if(!tecla.classList.contains('ativa')){
          this.selecionados.push(tecla.innerText);
          tecla.classList.add('ativa');
          this.updateListeners(tecla.innerText);
        }
      }
    }
    start(){
      const rootElement = document.getElementById('teclado');
      this.render(rootElement);
      this.bind(rootElement);
    }
  }
  
  class PainelPalavra{
  
    constructor(palavra){
      this.palavra = palavra && palavra.toUpperCase();
      this.totalLetras = 0;
    }
  
    isCompleto(){
      return this.totalLetras === this.palavra.length;
    }
  
    getTemplate(){
      let template = `<div class="painel-palavra">`;
      for(let index = 0; index < this.palavra.length; index++){
        template += `<div class="letra"> - </div>`;
      }
      template+='</div>';
      return template;
    }
  
    render(rootElement){
      if(rootElement){
        rootElement.innerHTML = this.getTemplate();
      }
    }
    bind(rootElement){
      if(rootElement){
        this.elLetras = rootElement.querySelectorAll('.letra');
      }
    }
    
    mostrarLetra(letra){
      let encontrou = false;
      const count = this.palavra.length;
      for(let index = 0; index < count; index++){
        if(letra === this.palavra[index]){
          this.totalLetras++;
          this.elLetras[index].innerText = letra;
          encontrou = true;
        }
      }
      if(!encontrou){
        this.notificarPalavraNaoEncontrada();
      }
    }
    notificarPalavraNaoEncontrada(){
      for(let listener of this.listenersPalavraNaoEncontrada){
        listener();
      }
    }
    addPalavraNaoEncontradaListener(listener){
      if(!this.listenersPalavraNaoEncontrada){
        this.listenersPalavraNaoEncontrada = [];
      }
      this.listenersPalavraNaoEncontrada.push(listener);
    }
    start(){
      const rootElement = document.getElementById('painel-palavra');
      this.render(rootElement);
      this.bind(rootElement);
    }
  
  }
  class Letreiro{
    constructor(mensagem){
      this.mensagem = mensagem;
    }
    render(rootElement){
      if(rootElement){
        rootElement.innerText = this.mensagem || '';
      }
    }
    bind(rootElement){
      if(rootElement){
        this.elMensagem = rootElement;
      }
    }
    atualizarMensagem(mensagem){
      this.mensagem = mensagem;
      if(this.elMensagem){
        this.elMensagem.innerText = mensagem;
      }
    }
    start(){
      const rootElement = document.getElementById('letreiro');
      this.render(rootElement);
      this.bind(rootElement);
    }
  }
  
  const forca = new Forca();
  forca.start();
  const teclado = new Teclado();
  teclado.start();
  
  const painelPalavra = new PainelPalavra("Bagrinho");
  painelPalavra.start();
  
  const letreiro = new Letreiro('Escolha uma Letra');
  letreiro.start();
  
  teclado.addKeyPressListener(tecla=> {
    painelPalavra.mostrarLetra(tecla);
    if(painelPalavra.isCompleto()){
      letreiro.atualizarMensagem('Parabéns você ganhou!');
      teclado.processarClick = false;
    }
  });
  painelPalavra.addPalavraNaoEncontradaListener(()=>{
    forca.proximo();
    teclado.processarClick = !forca.isEnforcado();
    if(forca.isEnforcado()){
      letreiro.atualizarMensagem('Você perdeu!');
    }
  });
  