alert("Hola gente de Infoch@n");

var i = 1, j = 0;

var hola = [];


document.write("Ciclo while <br />");

while(i <= 20) {
	document.write("Hola mundo");
	i++;
}

document.write(" <br /> Ciclo for <br />");

for (var i = 0; i <= 20; i++) 
{
	document.write("Hola mundo");
}

document.write(" <br /> Ciclo do while <br />");

do{
     document.write("Hola mundo");
     j++;
}while(j < 20);

document.write("<br /> " + "<br /> ")

for (var j = 0; j <= 10; j++) {
	hola[j] = j;
	if(hola[j] < 5)
	{
		document.write("Soy menor a 5 :c " + hola[j] +"<br />");
	}
	else if(hola[j] > 5)
	{
		document.write("hey!! soy mayor a 5 >:v/ " + hola[j] + "<br />");
	}
}