window.onload=time;

function time(){
    var content = document.getElementById('time_maker');
    console.log("id tego to :"+content.id);
    var day  = new Date();
    time_maker.innerHTML="Dzisiaj jest "+day.getDay()+" "+day.toLocaleString('default', { month: 'long' })+" "+day.getFullYear()+","+("0" + day.getHours("HH")).slice(-2)+":"+("0" + day.getMinutes("MM")).slice(-2);





}