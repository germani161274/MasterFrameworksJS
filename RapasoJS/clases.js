class coche{
    constructor(velocidad){
        this.velocidad= velocidad;
    }
    aumentarvelocidad(){

       this.velocidad += 1;
    }
}       

class autobus extends coche{
    constructor(velocidad, altura){
        super(velocidad);
        this.altura = altura;
    }

    reducirvelocidad(){

       this.velocidad -= 1;
    }
}       

var autobus1 = new autobus(180, 4);

document.write("<h1>"+ autobus1.velocidad +"</h1>");

autobus1.reducirvelocidad();
autobus1.reducirvelocidad();

document.write("<h1>"+ autobus1.velocidad +"</h1>" + "Altura:   " + autobus1.altura);


var coche1 = new coche(260);

document.write("<h1>"+ coche1.velocidad +"</h1>");

coche1.aumentarvelocidad();
coche1.aumentarvelocidad();

document.write("<h1>"+ this.coche1.velocidad +"</h1>");

