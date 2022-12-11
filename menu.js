let butImg, butImgO, bgImg, titulo, ty, a;
let key;
var menu = 0;
let game;

function preload(){//carregar imagens
  butImgO = loadImage('assets/Botao.png');
  butImg = loadImage('assets/Botao_Highlight.png');
  bgImg = loadImage('assets/Fundo_Menu.png');
  bgJogo = loadImage('assets/Fundo_Jogo.png')
  blocoImg = loadImage('assets/Bloco_Resposta.png');
  titulo = loadImage('assets/TituloP.png')
}
function setup() {//Definir variáveis comuns
  createCanvas(720, 720);
  frameRate(30);
  rectMode(RADIUS);
  imageMode(CENTER);
  ty = (height/2)-200;
  a = 0;
  faseAt = 0;
  fasePre = 0;
  game = new Jogo();
}

function draw() {
  //definir imagem de fundo
  background(0);
  noStroke();
  if(menu == 0){
    //Menu Principal
    image(bgImg, width/2, height/2, width, height)
    a = a + (deltaTime/1000);
    ty = ty+(Math.sin(a)/5);
    image(titulo, width/2, ty, titulo.width*(128/720)*5, titulo.height*(128/720)*5);

    //invocar botões do menu
    new Button(width/2, (height/2)+ 120, butImg, butImgO, 'CRÉDITOS', sceneLoad, 1, 1)
    new Button(width/2, height/2, butImg,  butImgO, 'JOGAR', sceneLoad, 2, 1, StartFase)
  }
  
  if(menu == 1){//Menu de Créditos
    image(bgImg, width/2, height/2, width, height)
    fill(0)
    //Nome dos Desenvolvedores
    new TextGen('DESENVOLVEDORES', width/2, height/2 -120, 26, CENTER, CENTER, BOLD, 0)
    stroke(255)
    strokeWeight(3)
    new TextGen('Dante Mendes Gomes', width/2, height/2 - 40, 26, CENTER, CENTER, NORMAL, 0)
    new TextGen('Victor de Alcantara Gouveia', width/2, height/2, 26, CENTER, CENTER, NORMAL, 0)
    new TextGen('Sávio Rafael Marques de Alcântara', width/2, height/2 + 40, 26, CENTER, CENTER, NORMAL, 0)
    new TextGen('Arte da Fase por Michele "Buch" em OpenGameArt.org', width/2, height/2 + 90, 15, CENTER, CENTER, NORMAL, 0)
    //Botão de voltar
    noStroke()
    new Button(80, height - 50, butImg, butImgO, 'VOLTAR', sceneLoad, 0, 0.6)
    if(kb.presses('escape')){
      sceneLoad(0);
    }
  }
  if(menu == 2){
    //Executar o "update" do jogo
    game.update();
    }
  if(menu == 3){
    //Tela de Fim de Jogo
    image(bgImg, width/2, height/2);
    fill(0);
    new TextGen('VOCÊ VENCEU O JOGO!!!', width/2, height/2, 50, CENTER, CENTER, BOLD, 0);
    new TextGen('Aperte ESC para voltar ao menu', width/2, height/2 + 120, 25, CENTER, CENTER, BOLD, 0);
    faseAt = 0;
    fasePre = 0;
    if(kb.presses('escape')){
      menu = 0;
    }
  }
}

function sceneLoad(n){ //Carregar "Cena" diferente
  menu = n;
}

class Button { //Botão Instanciável
  constructor(bX, bY, img, imgO, txt, act, m, size, act2){
    let over = false;
    //definir imagem e texto do botão
    image(img, bX, bY, img.width*size, img.height*size)

    //detectar sobreposição do mouse
    if(mouseX > bX - img.width*size/2 &&
       mouseX < bX + img.width*size/2 &&
       mouseY > bY - img.height*size/2 &&
       mouseY < bY + img.height*size/2)
    {
      over = true;
      image(imgO, bX, bY, img.width*size, img.height*size)
    }
    else{
      over = false;
    } 
    new TextGen(txt, bX, bY, 24*size, CENTER, CENTER, BOLD, 0)
    //agir quando mouse sobre o botão
    if(over && mouseIsPressed){
      act(m);
      if(act2 != null){
        act2();
      }
    }
  }
}

class TextGen{//texto instanciável
  constructor(txt, pX, pY, size, alX, alY, style, color){
    //em ordem, definir cor, tamanho, estilo, escrita e alinhamento
    fill(color);
    textSize(size);
    textStyle(style);
    text(txt, pX, pY);
    textAlign(alX, alY);
  }
}