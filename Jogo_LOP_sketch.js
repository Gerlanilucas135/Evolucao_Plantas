var textInst = ("- O objetivo do jogo é que por meio do quiz os usuários consigam compreender de forma interativa quais as principais características de cada fase na evolução das plantas." + "\n" + "- O jogo conterá 5 níveis" + "\n" + "- Será necessário apenas o uso do mouse para que o usuário consiga jogar"  + "\n" + " - Para voltar à tela inicial poderá apenas apertar o botão “Esc”  do teclado.") 
var font;
var imgeduc,imgpro, imgmenu2, imgfase1, imgvidas, imgfase2, imgfase3, imgfase4, imgover, imgwin, imgintro;
var musinicio, muserro, muscerto, musplay, musvitoria;

var xMinBot1 = 25;
var largurabot = 220;
var xMaxBot1 = xMinBot1 + largurabot
var yMinBot = 340;
var alturabot = 50;
var yMaxBot = yMinBot + alturabot;

var xMinBot2 = 270;
var xMaxBot2 = xMinBot2 + largurabot;

var xMinBot3 = 505;
var xMaxBot3 = xMinBot3 + largurabot;

var xMinBotVol = 500;
var xMaxBotVol = xMinBotVol + largurabot;
var yMinBotVol = 349;
var yMaxBotVol = yMinBotVol + alturabot;
var alturabotVol = 35;

var xMinBotesc = 55;
var larguraBotesc = 178;
var xMaxBotesc = xMinBotesc + larguraBotesc;
var yMinBotesc = 290;
var alturabotesc = 98;
var yMaxBotesc = yMinBotesc + alturabotesc;

var tela = 0; 

var pontos = 0, vidas = 3, nivel = 1;

var clicked = false;

function preload(){
  //fonte
font = loadFont("Audiowide-Regular.ttf")
// imagens créditos
imgeduc = loadImage("Malu_jogo1.png")
imgpro = loadImage("gerlani_jogo.png")
// imagens de background
imgmenu2 = loadImage("Background_Menu2.png")
imgfase1 = loadImage("Background_fase1.png")
imgfase2 = loadImage("Background_fase2.png")
imgfase3 = loadImage("Background_fase3.png")
imgfase4 = loadImage("Background_fase4.png")
imgover = loadImage("Background_over.png")
imgwin = loadImage("Background_win.png")
imgintro = loadImage("Background_intro.png")
// imagens do painel 
imgvidas = loadImage("vidas.png")
// músicas do jogo
soundFormats('mp3', 'ogg');
musinicio = createAudio("mus_espera.mp3")
musplay = createAudio("musc_jogar.mp3")
muserro = createAudio("mus_erro.mp3")
muscerto = createAudio("mus_correto.mp3")
musvitoria = createAudio("mus_vitoria.mp3")
}


function setup(){
  createCanvas(736, 414); 
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    tela = 0;
  }
}

function mouseClicked(){
  clicked = true; 
 }
 
function menuBotao(size, texto, xMin, xMax, opcao){
    //Botão1 - Instruções
    if(mouseX >xMin && mouseX < xMax && mouseY > yMinBot && mouseY < yMaxBot){
      fill(7,45,13, 80);
      if(clicked){
        tela = opcao;
      }
    }
    else {
      fill(177,217,186)
    }
    rect(xMin, yMinBot, largurabot, alturabot, 10);
    textSize(size);
    textFont(font);
    fill(0)
    text(texto, xMin+5, yMinBot+5, largurabot, alturabot);
}

function botaoVoltar(texto, size, xMin, xMax, yMin, yMax){

  if(mouseX >xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){
    noFill();
    if(clicked){
      tela = 0;
    }
  }
  else {
    fill(102,42,37)
  }
  rect(xMin, yMin, largurabot - 100, alturabotVol, 10);
  textSize(size);
  textFont(font);
  fill(238,241,241)
  text(texto, xMin+5, yMin, largurabot - 100, alturabotVol);
}

function botaoescolha(cor,texto,x1,x2, xMin,xMax, yMin, yMax, opcao){
  if(mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){
    fill("rgba(238, 241, 241, 0.42)")
    if(clicked){
      escolha = opcao;
      trocafase();
  }
     
  }
  else{
    fill(cor)
  }
  
  rect(xMin, yMin, larguraBotesc, alturabotesc, 10)
  textSize(14);
  fill(0);
  textFont(font);
  text(texto,x1, 312, x2);
}

function trocafase(){
  //fase1n1
  if(tela == 3 && nivel == 1){
    if(escolha == 2 || escolha == 3){
      vidas = vidas - 1;
      pontos = pontos - 10;
      muserro.play();
      alert("Resposta errada");
      if(vidas == 0){
        tela = 4;
      }
    }
    if(escolha == 1){
    pontos = pontos + 50;
    nivel = 2;
    muscerto.play();
    alert("Resposta certa");
    }
  }
  //fase1n2
  else{
    if(tela == 3 && nivel == 2){
      if(escolha == 2 || escolha == 3){
        vidas = vidas - 1;
        pontos = pontos - 10;
        muserro.play();
        alert("Resposta errada");
        if(vidas == 0){
        tela = 4;
        }
      }
      if(escolha == 1){
      nivel = 3;
      pontos = pontos + 50;
      muscerto.play();
      alert("Resposta certa");
      }
    }
  
  //fase2n1
  else{
  if(tela == 3 && nivel == 3){
    if(escolha == 2 || escolha == 3){
      vidas = vidas - 1;
      pontos = pontos - 10;
      muserro.play();
      alert("Resposta errada");
        if(vidas == 0){
        tela = 4;
        }
    }
    if(escolha == 1){
    nivel = 4;
    pontos = pontos + 50;
    muscerto.play();
    alert("Resposta certa");
    }
  }

   //fase2n2
  else{
    if(tela == 3 && nivel == 4){
      if(escolha == 2 || escolha == 3){
        vidas = vidas - 1;
        pontos = pontos - 10;
        muserro.play();
        alert("Resposta errada");
        if(vidas == 0){
        tela = 4;
        }
      } 
      if(escolha == 1){
      nivel = 5;
      pontos = pontos + 50;
      muscerto.play();
      alert("Resposta certa");
      }
    }
  else{
  //fase3n1
    if(tela == 3 && nivel == 5){
      if(escolha == 2 || escolha == 3){
        vidas = vidas - 1;
        pontos = pontos - 10;
        muserro.play();
        alert("Resposta errada");
        if(vidas == 0){
        tela = 4;
        }
      }
      if(escolha == 1){
      nivel = 6;
      pontos = pontos + 50;
      muscerto.play();
      alert("Resposta certa");
      }
    }
  else{
  //fase3n2
    if(tela == 3 && nivel == 6){
      if(escolha == 2 || escolha == 3){
      vidas = vidas - 1;
      pontos = pontos - 10;
      muserro.play();
      alert("Resposta errada");
        if(vidas == 0){
        tela = 4;
        }
      }
      if(escolha == 1){
      nivel = 7;
      pontos = pontos + 50;
      muscerto.play();
      alert("Resposta certa");
      }
    }
  else{
  //fase4n1
    if(tela == 3 && nivel == 7){
      if(escolha == 2 || escolha == 3){
      vidas = vidas - 1;
      pontos = pontos - 10;
      muserro.play();
      alert("Resposta errada");
        if(vidas == 0){
        tela = 4;
        }
      }
    if(escolha == 1){
    nivel = 8;
    pontos = pontos + 50;
    muscerto.play();
    alert("Resposta certa");
    }
  }
  //fase4n2
  else{
    if(tela == 3 && nivel == 8){
      if(escolha == 2 || escolha == 3){
        vidas = vidas - 1;
        pontos = pontos - 10;
        muserro.play();
        alert("Resposta errada");
        if(vidas == 0){
          tela = 4;
        }
      }
      if(escolha == 1){
        pontos = pontos + 50
        tela = 5;
        muscerto.play();
        alert("Resposta certa");
      }
    }
  }
  }
  }
  }
  }
  }
  }
  

  }
  

function telamenu(){
  background(imgmenu2);
  textSize(48);
  fill(66, 37, 34);
  textFont(font);
  text("Evolução das plantas", 190, 60, 380);
  textAlign(CENTER);
  musinicio.play();
  musvitoria.stop();
  
  menuBotao(36,"Instrução", xMinBot1, xMaxBot1, 1);
  menuBotao(36, "Céditos", xMinBot2, xMaxBot2, 2);
  menuBotao(36, "Iniciar", xMinBot3, xMaxBot3, 6);

  clicked = false;
}

function telainst() {
  background(77, 189, 95);
  textSize(48);
  fill(66, 37, 34);
  textFont(font);
  text("INSTRUÇÕES", 360, 78);
  textSize(18);
  fill(66, 37, 34);
  textFont(font);
  textLeading(30);
  text(textInst, 40, 130, 647);
  textAlign(CENTER);
  musinicio.play();


  botaoVoltar("Voltar", 28, xMinBotVol, xMaxBotVol, yMinBotVol, yMaxBotVol)
  
  clicked = false;
}

function telacred(){
  background(77, 189, 95);
  textSize(48);
  fill(66, 37, 34);
  textFont(font);
  text("CRÉDITOS", 420, 78);
  textStyle(BOLD)
  textSize(24);
  fill(66, 37, 34);
  textFont(font);
  text("Marialuysa de Araújo Soares", 420, 125);
  textSize(13);
  fill(255, 255, 255);
  textFont(font);
  text("FUNÇÃO: Educadora", 420, 150);
  textSize(12);
  fill(255, 255, 255);
  textFont(font);
  text("Está cursando sua licenciatura em Ciências Biólogicas na Universidade Federal do Rio  Grande do Norte, já fez parte do Programa de Bolsa de Iniciação à Docência (PIBID Biologia). Além disso, a sua formação  profissional para a área da botânica, biologia marinha e biologia forence.  É   apaixonada pela docência e possui isso como sua prioridade.", 180, 165, 470);
  image(imgeduc, 10, 95,);
  textSize(24);
  fill(66, 37, 34);
  textFont(font);
  text("Gerlani da Silva Lucas", 420, 290);
  textSize(13);
  fill(255, 255, 255);
  textFont(font);
  text("FUNÇÃO: Progamadora", 420, 315);
  textSize(12);
  fill(255, 255, 255);
  textFont(font);
  text("Está cursando sua o Bacharelado Interdisciplinar em ciências  e  Tecnologia na Universidade Federal do Rio grande do Norte.", 180, 330, 470);
  image(imgpro, 10, 250)
  textSize(13);
  fill(0);
  textFont(font);
  text("Tiago Luciano", 370, 380);
  textSize(13);
  fill(0);
  textFont(font);
  text("FUNÇÃO: desing", 370, 395);
  musinicio.play();


  botaoVoltar("Voltar", 28, xMinBotVol, xMaxBotVol, yMinBotVol+10, yMaxBotVol);
  
  clicked = false;
}

function telaintro(){
  background(imgintro);
  menuBotao(36, "Jogar", xMinBot3-40, xMaxBot3, 3);
  clicked = false;
}

function f1n1() {
  pontos = 0;
  background(imgfase1);
  textSize(24)
  fill(66, 37, 34)
  text(vidas, 180, 85, 35)
  image(imgvidas,210, 60);
  image(imgvidas,230, 60);
  textSize(24)
  fill(66, 37, 34)
  text(pontos, 420, 80, 100)
  fill("rgba(66, 37, 34, 0.7)")
  rect(45, 141, 656, 123, 20);
  textLeading(50);
  textSize(22);
  fill(238,241,241);
  textFont(font);
  text("Nesta fase, vamos olhar para suas características  morfológicas. Você é conhecida por fazer parte de uma classificação de vegetais mais simples" + "\n" + "Por quê?", 56, 170, 630);
  textAlign(CENTER); 

  botaoVoltar("Encerrar", 21, 20,240, 2.5, 15)

  botaoescolha(("rgb(177,217,186)"),"por possuir apenas um tipo de vaso" + "\n" + "condutor", 65, 158, xMinBotesc, xMaxBotesc, yMinBotesc, yMaxBotesc, 2);
  botaoescolha(("rgb(177,217,186)"),"por ser avascular e de pequeno porte,  com pequenos" + "\n" + "cloroplastos", 290, 158, 280, 458, 290, 388, 1);
  botaoescolha(("rgb(177,217,186)"),"por somente" + "\n"+ "produzir" + "\n" + "sementes para se  reproduzir", 525, 150, 505, 683, 290, 388, 3);

  clicked = false;
  musvitoria.stop();
}
function f1n2(){
  background(imgfase1);
  textSize(24)
  fill(66, 37, 34)
  text(vidas, 180, 85, 35)
  image(imgvidas,210, 60);
  image(imgvidas,230, 60);
  textSize(24)
  fill(66, 37, 34)
  text(pontos, 450, 80, 60)
  fill("rgba(66, 37, 34, 0.7)")
  rect(45, 141, 656, 123, 20);
  textLeading(50);
  textSize(22);
  fill(238,241,241);
  textFont(font);
  text("Muito bem! Agora precisamos descobrir mais uma coisa. Dê uma olhada nas alternativas abaixo e     responda: qual delas não se refere a você?", 67, 170, 610);
  textAlign(CENTER); 
  
  botaoVoltar("Encerrar",21, 20,240, 2.5, 15)

  botaoescolha(("rgb(177,217,186)"),"O grupo dos musgos " + "\né um dos grupos" +"\n que mais representa as briófitas, até o    momento", 65, 163, xMinBotesc, xMaxBotesc, yMinBotesc, yMaxBotesc, 2);
  botaoescolha(("rgb(177,217,186)"),"Seu transporte de   nutrientes é" + "\natravés da difusão", 290, 160, 280, 458, 290, 388, 3);
  botaoescolha(("rgb(177,217,186)"),"Possuem raízes     profundas no solo", 525, 150, 505, 683, 290, 388, 1);

  clicked = false;

}

function f2n1(){
  background(imgfase2);
  textSize(24)
  fill(66, 37, 34)
  text(vidas, 180, 85, 35)
  image(imgvidas,210, 60);
  image(imgvidas,230, 60);
  textSize(24)
  fill(66, 37, 34)
  text(pontos, 435, 80, 95)
  fill("rgba(238, 241, 241, 0.42)")
  rect(45, 141, 656, 123, 20);
  textLeading(50);
  textSize(22);
  fill(0);
  textFont(font);
  text("Nossa, como você mudou! Olhe para suas novas" + "\ncaracterísticas, você se tornou uma Pteridófita." + "\nConsegue me falar quais características diferentes você possui agora?", 56, 170, 630);
  textAlign(CENTER); 
  
  botaoVoltar("Encerrar",21,20,240, 2.5, 15)

  botaoescolha(("rgba(66, 37, 34, 1)"),"Aparecimento de" + "\nfolhas, raízes e" + "\ncaule", 65, 158, xMinBotesc, xMaxBotesc, yMinBotesc, yMaxBotesc, 1);
  botaoescolha(("rgba(66, 37, 34, 1)"), "Você é uma planta" + "\nde grande porte      agora, muito maior   do que a briófita da fase anterior",290, 158, 280, 458, 290, 388, 3);
  botaoescolha(("rgba(66, 37, 34, 1)"), "Agora você possui flores para se" + "\nreproduzir",525, 150, 505, 683, 290, 388, 2);

  clicked = false;

}

function f2n2(){
  background(imgfase2);
  textSize(24)
  fill(66, 37, 34)
  text(vidas, 180, 85, 35)
  image(imgvidas,210, 60);
  image(imgvidas,230, 60);
  textSize(24)
  fill(66, 37, 34)
  text(pontos, 435, 80, 95)
  fill("rgba(238, 241, 241, 0.42)")
  rect(45, 141, 656, 123, 20);
  textLeading(50);
  textSize(22);
  fill(0);
  textFont(font);
  text("Isso mesmo, mas você, também, precisa saber um" + "\npouco mais sobre o seu melhor ambiente para viver. Qual desses ambientes abaixo é melhor?", 56, 170, 630);
  textAlign(CENTER); 
  
  botaoVoltar("Encerrar",21,20,240, 2.5, 15)

  botaoescolha(("rgba(66, 37, 34, 1)"),"Locais úmidos e com sombra", 65, 158, xMinBotesc, xMaxBotesc, yMinBotesc, yMaxBotesc, 1);
  botaoescolha(("rgba(66, 37, 34, 1)"), "Litoral e muito" + "\nensolarado",290, 158, 280, 458, 290, 388, 3);
  botaoescolha(("rgba(66, 37, 34, 1)"), "Um pouco" + "\ndesértico, mais seco e quente",523, 155, 505, 683, 290, 388, 2);

  clicked = false;

}

function f3n1(){
  background(imgfase3);
  textSize(24)
  fill(66, 37, 34)
  text(vidas, 180, 85, 35)
  image(imgvidas,210, 60);
  image(imgvidas,230, 60);
  textSize(24)
  fill(66, 37, 34)
  text(pontos, 430, 80, 105)
  fill("rgba(238, 241, 241, 0.50)")
  rect(48, 143, 660, 123, 20);
  textLeading(50);
  textSize(22);
  fill(0);
  textFont(font);
  text("Uau! Você está enorme e se tornou uma" + "\nGimnosperma. Mas, nem sempre você terá essa" + "\naparência, então quais os outros exemplos de" + "\nplantas podemos encontrar na mesma fase que você?", 45, 170, 670);
  textAlign(CENTER); 
  
  botaoVoltar("Encerrar",21,20,240, 2.5, 15)

  botaoescolha(("rgba(21, 171, 45, 0.8)"),"Mangueiras", 65, 158, xMinBotesc, xMaxBotesc, yMinBotesc, yMaxBotesc, 3);
  botaoescolha(("rgba(21, 171, 45, 0.8)"), "Arbustos",290, 158, 280, 458, 290, 388, 1);
  botaoescolha(("rgba(21, 171, 45, 0.8)"), "Gramíneas",525, 150, 505, 683, 290, 388, 2);

  clicked = false;

}

function f3n2(){
  background(imgfase3);
  textSize(24)
  fill(66, 37, 34)
  text(vidas, 180, 85, 35)
  image(imgvidas,210, 60);
  image(imgvidas,230, 60);
  textSize(24)
  fill(66, 37, 34)
  text(pontos, 430, 80, 105)
  fill("rgba(238, 241, 241, 0.42)")
  rect(45, 141, 656, 123, 20);
  textLeading(50);
  textSize(22);
  fill(0);
  textFont(font);
  text(" Exatamente. Agora, para você ter sua última" + "\ntransformação, me responda: qual característica" + "\nque é mais associada a você quando se trata da" + "\ndiferenciação com os outros grupos?", 56, 170, 630);
  textAlign(CENTER); 
  
  botaoVoltar("Encerrar",21,20,240, 2.5, 15)

  botaoescolha(("rgba(21, 171, 45, 0.8)"),"Folhas espeças", 65, 158, xMinBotesc, xMaxBotesc, yMinBotesc, yMaxBotesc, 3);
  botaoescolha(("rgba(21, 171, 45, 0.8)"), "Caules grossos e" + "\nrígidos",290, 158, 280, 458, 290, 388, 2);
  botaoescolha(("rgba(21, 171, 45, 0.8)"), "produção de" + "\nsementes e flores secas",525, 150, 505, 683, 290, 388, 1);

  clicked = false;

}

function f4n1(){
  background(imgfase4);
  textSize(24)
  fill(255,255,255)
  text(vidas, 180, 85, 35)
  image(imgvidas,210, 60);
  image(imgvidas,230, 60);
  textSize(24)
  fill(255,255,255)
  text(pontos, 430, 85, 105)
  fill("rgba(238, 241, 241, 0.42)")
  rect(45, 141, 656, 123, 20);
  textLeading(50);
  textSize(22);
  fill(0);
  textFont(font);
  text("Finalmente chegamos na nossa fase final, parabéns! Para concluirmos toda a sua autoanálise, quero que me diga: qual a diferença mais notória que você" + "\nencontrou na morfologia da sua evolução atual?", 56, 170, 630);
  textAlign(CENTER); 
  
  botaoVoltar("Encerrar",21,20,240, 2.5, 15)

  botaoescolha(("rgba(238, 241, 241, 1)"), "Surgimento de" + "\nfrutos", 65, 158, xMinBotesc, xMaxBotesc, yMinBotesc, yMaxBotesc, 1);
  botaoescolha(("rgba(238, 241, 241, 1)"), "Produção de pólen a partir das folhas",290, 158, 280, 458, 290, 388, 3);
  botaoescolha(("rgba(238, 241, 241, 1)"), "Raízes firmes e" + "\nlongas",525, 150, 505, 683, 290, 388, 2);

  clicked = false;

}

function f4n2(){
  background(imgfase4);
  textSize(24)
  fill(255,255,255)
  text(vidas, 180, 85, 35)
  image(imgvidas,210, 60);
  image(imgvidas,230, 60);
  textSize(24)
  fill(255,255,255)
  text(pontos, 430, 85, 105)
  fill("rgba(238, 241, 241, 0.42)")
  rect(45, 141, 656, 123, 20);
  textLeading(50);
  textSize(22);
  fill(0);
  textFont(font);
  text("Isso mesmo! Agora me diga qual a vantagem desses frutos para você?", 56, 170, 630);
  textAlign(CENTER); 
  
  botaoVoltar("Encerrar",21,20,240, 2.5, 15)

  botaoescolha(("rgba(238, 241, 241, 1)"),"Nutrição orgânica", 65, 158, xMinBotesc, xMaxBotesc, yMinBotesc, yMaxBotesc, 3);
  botaoescolha(("rgba(238, 241, 241, 1)"), "Reprodução," + "\nsuporte e proteção das sementes",290, 158, 280, 458, 290, 388, 1);
  botaoescolha(("rgba(238, 241, 241, 1)"), "Alimentação dos" + "\nanimais",525, 150, 505, 683, 290, 388, 2);

  clicked = false;

}

function telaWin(){
  musplay.stop();
  musvitoria.play();
  background(imgwin);
  textSize(28);
  fill(255,255,255);
  textFont(font);
  text(pontos, 300, 315, 300)
  menuBotao(24,"Ir para o menu", xMinBot1, xMaxBot1, 0);
  menuBotao(20, "Jogar novamente", 470, xMaxBot2+190, 3);

    nivel = 1;
    vidas = 3;
    

  clicked = false;
  
}

function telaOver(){
  musinicio.play();
  background(imgover);
  menuBotao(24,"Ir para o menu", xMinBot1, xMaxBot1, 0);
  menuBotao(20, "Jogar novamente", 470, xMaxBot2+190, 3);
  vidas = 3;
  pontos = 0;
  clicked = false;
  musplay.stop();
  
}

function draw() {
  if(tela == 0){
   telamenu()
  }
 if(tela == 1){
    telainst();
  }
  if(tela == 2){
    telacred();
  }
  if(tela == 6){
    telaintro();
  }
  if(tela == 3){
    
    musinicio.stop();
    musplay.play();
    if(nivel == 1){
      f1n1();
      
    }
    if(nivel == 2){
      f1n2();
    }
    if(nivel == 3){
      f2n1();
    }
    if(nivel == 4){
      f2n2();
    }
    if(nivel == 5){
      f3n1();
    }
    if(nivel == 6){
      f3n2();
    }
    if(nivel == 7){
      f4n1();
    }
    if(nivel == 8){
      f4n2();
    }
  }
  if (tela == 5){
    telaWin();
  }
  if(tela == 4){
    telaOver();
    }
 
}