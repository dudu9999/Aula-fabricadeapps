var data  = new Date();
console.log(data);
console.log("-------------------");
console.log(data);
console.log("-------------------");
console.log('Hora: '+data.getHours());
console.log("-------------------");
console.log('Minuto: '+data.getMinutes());
console.log("-------------------");
console.log('Segundo: '+data.getSeconds());
console.log("-------------------");
var data2  = new Date(Date.parse("March 10, 2018"));
console.log(data2);
console.log("-------------------");
//domingo == 0
//segunda == 1
//terça == 2
//quarta == 3
//quinta == 4
//sexta == 5
//sabado == 7
console.log('Dia(da semana): '+data.getDay());
console.log("-------------------");
console.log('Dia(Numero): '+data2.getDate());
console.log("-------------------");
console.log('Mes: '+data2.getMonth());
console.log("-------------------");
console.log('Ano: '+data2.getYear());
console.log("-------------------");
console.log('Ano: '+data2.getFullYear());
console.log("-------------------");
console.log('Data(Brasileiro): '+data.getDate()+'/'+(data2.getMonth()+1)+'/'+data2.getFullYear());
console.log("-------------------");
var dias = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
console.log('Dia da semana(Texto): '+dias[data2.getDay()]);
console.log("-------------------");
console.log(data2);
console.log(data2.getDate());
console.log("-- Somou mais 60 dias ---");
console.log(data2.setDate(data2.getDate() + 60));
console.log(data2);
