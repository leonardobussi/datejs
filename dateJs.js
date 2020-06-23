var data = new Date()
var dia =  data.getDate()
var me = data.getMonth()
var mes = me + 1
var ano = data.getFullYear()
var hora = data.getHours()
var min = data.getMinutes()
var sec = data.getSeconds()

if (mes <= 9){
mes = '0'+mes
}
if(dia <= 9){
  dia = '0'+dia
}
if (hora <= 9){
  hora = '0'+hora
}
if (min <= 9){
  min = '0'+min
}
if (sec <= 9){
  sec = '0'+sec
}
var minhaData = {
  dia: dia,
  mes: mes,
  ano: ano,
  hora: hora,
  min: min,
  sec: sec
 }
var now = (minhaData.dia+"/"+minhaData.mes+"/"+minhaData.ano+" - "+minhaData.hora+":"+minhaData.min+":"+minhaData.sec)
console.log(now)
