// تعريف المتغيرات 

let name_client = document.getElementById('name_client');
let Nemiro_data = document.getElementById('Nemiro_data');
let J_data = document.getElementById('J_data');
let add_data = document.getElementById('add_data');
let D = document.getElementById('D_data');
let M = document.getElementById('M_data');
let L = document.getElementById('L_data');
let P = document.getElementById('P_data');
let C = document.getElementById('C_data');
let data_Add = document.getElementById('data_Add');
let name_client_show = document.getElementById('name_client_show');
let Nemiro_de_clint_show = document.getElementById('Nemiro_de_clint_show');

console.log(add_data)
// <button onclick="saveSelections()">حفظ القيم</button>
// check the localstorage and create elment 
let datasale;
if(localStorage.product != null){
     datasale = JSON.parse(localStorage.product);
}
else{
    datasale = [];
}

// document.getElementById('table_show_obj') = table;
function shwodataobj(){
    // let http = document.getElementById('table_show_obj'); 
    y = 1; 
    let table = ''; 
    for(let i = 0; i < datasale.length;i++)
{
    table += `
<tr>
    <td>${y}</td>
    <td>${datasale[i].name_client}</td>
    <td>${datasale[i].timestamp}</td>
    <td>${datasale[i].select1}</td>
    <td>${datasale[i].select2}</td>
    <td>${datasale[i].select3}</td>
    <td>${datasale[i].select4}</td>
    <td>${datasale[i].select5}</td>
    <td>${datasale[i].select6}</td>
    <td>${datasale[i].select7}</td>
    <td>${datasale[i].J_data}</td>
    <td>${datasale[i].Nemiro_data}</td>
    <td><a onclick="veiw_data(${i})" class="btn btn-sm btn-primary" >view</a></td>
    <td><a onclick="deleItem(${i})" class="btn btn-sm btn-primary" >Detail</a></td>
</tr>
`
y+=1;




}
document.getElementById('table_show_obj').innerHTML = table;


}
window.onload = shwodataobj();
// function dealet item 
function deleItem(i){
    console.log(i);
    datasale.splice(i,1);
    localStorage.product = JSON.stringify(datasale);
    shwodataobj();

}
   // دالة للحصول على الوقت الحالي بتنسيق YYYY-MM-DD HH:MM:SS
   function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
// heddin the massage
// إخفاء العنصر


// إظهار العنصر مرة أخرى

// creat object to sava the data and  
add_data.onclick = function()
{
    let newsale = {
        name_client:name_client.value,
        Nemiro_data:Nemiro_data.value,
        J_data:J_data.value,
        select1: document.getElementById('select1').value,
        select2: document.getElementById('select2').value,
        select3: document.getElementById('select3').value,
        select4: document.getElementById('select4').value,
        select5: document.getElementById('select5').value,
        select6: document.getElementById('select6').value,
        select7: document.getElementById('select7').value,
        timestamp: getCurrentTime() // إضافة الوقت الحالي
    }
  
        datasale.push(newsale);
        localStorage.setItem('product' , JSON.stringify(datasale));
        name_client.value = '';
    Nemiro_data.value = '';
    J_data.value = '';
    shwodataobj();
    // element.classList.remove('msg');
}


// showdata






let searchMood = 'name';
function searchdata(value){
    let table = '';
    for(let i = 0; i< datasale.length;i++){
        // Nemiro_data - name_client
        if(datasale[i].Nemiro_data.includes(value) ){
            console.log(value)
            console.log('yea');
            table += `
<tr>
    <td>${i}</td>
    <td>${datasale[i].name_client}</td>
    <td>${datasale[i].timestamp}</td>
    <td>${datasale[i].select1}</td>
    <td>${datasale[i].select2}</td>
    <td>${datasale[i].select3}</td>
    <td>${datasale[i].select4}</td>
    <td>${datasale[i].select5}</td>
    <td>${datasale[i].select6}</td>
    <td>${datasale[i].select7}</td>
    <td>${datasale[i].J_data}</td>
    <td>${datasale[i].Nemiro_data}</td>
    <td><a onclick="deleItem(${i})" class="btn btn-sm btn-primary" >Detail</a></td>
</tr>
`
        }
        
        else if(datasale[i].name_client.includes(value)){
            // Nemiro_data
            ;
            table += `
            <tr>
                <td>${i}</td>
                <td>${datasale[i].name_client}</td>
                <td>${datasale[i].timestamp}</td>
                <td>${datasale[i].select1}</td>
                <td>${datasale[i].select2}</td>
                <td>${datasale[i].select3}</td>
                <td>${datasale[i].select4}</td>
                <td>${datasale[i].select5}</td>
                <td>${datasale[i].select6}</td>
                <td>${datasale[i].select7}</td>
                <td>${datasale[i].J_data}</td>
                <td>${datasale[i].Nemiro_data}</td>
                <td><a onclick="deleItem(${i})" class="btn btn-sm btn-primary" >Del</a></td>
            </tr>
            `
            
        }
        else{
            console.log('erroe');
        }
    }
    document.getElementById('table_show_obj').innerHTML = table;

    
}




// دالة لإضافة الخيارات من 1 إلى 255 لجميع الـ select
function generateOptions() {
    for (let i = 1; i <= 7; i++) {
        let select = document.getElementById('select' + i);
        
        for (let j = 1; j <= 255; j++) {
            let option = document.createElement('option');
            option.value = j;
            option.text = j;
            select.appendChild(option);
        }
    }
}
function veiw_data(i){
    console.log(i);
    D.innerHTML = datasale[i].select1;
    M.innerHTML = datasale[i].select2;
    L.innerHTML = datasale[i].select3;
    P.innerHTML = datasale[i].select4;
    C.innerHTML = datasale[i].select5;
    data_Add.innerHTML = datasale[i].timestamp;
    name_client_show.innerHTML = datasale[i].name_client;
    Nemiro_de_clint_show.innerHTML = datasale[i].Nemiro_data;
}
window.onload = generateOptions();


