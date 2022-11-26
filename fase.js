var fase = [
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1
  ];

let tS, b;
var group;

function CarregarFase(){
  tS = width/12;
    for(let i = 0; i < fase.length; i++){
      let x = i%12;
      let y = parseInt(i/12);
      if(fase[i] == 1){
        group.add(new Sprite(tS *(x+0.5), tS *(y+0.5), tS, tS, 'static'))
      }
    }
}