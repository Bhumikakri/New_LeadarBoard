// let createMenu = (Name) => {
//     let liElement = document.createElement("li");
//     console.log("liElement");
//     liElement.innerText = Name;
//     return liElement;
// }

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",
"Sep","Oct","Nov","Dec"];


let allDatas = document.querySelectorAll(".data1");
const Arrays = [];

let msg = document.querySelector("#few_text");
    msg.style.display = "none";

let submiteButton = document.querySelector(".mainbutton");
let inputs = document.querySelector("form");

submiteButton.addEventListener("click",(e) => {
    e.preventDefault();
    // console.log("click");
    let fill1 = document.getElementById("input1").value;
    let fill2 = document.getElementById("input2").value;
    let fill3 = document.getElementById("input3").value;
    let fill4 = document.getElementById("input4").value;
// console.log("click");

    if(fill1 =='' || fill2 == '' || fill3 == '' || fill4 == ''){
        msg.style.display = "block";
        
    }
    else{
        let allData = document.querySelector(".main_container");
    // allData.innerHTML = document.createElement('div');
    let datas = document.createElement('div');
    datas.classList.add("data1");
    datas.innerHTML = `<div class ="names">
    <span class="name">${fill1} ${fill2}</span>
    <span class="time">${months[new Date().getMonth()]}/ 
    ${new Date().getFullYear()}/ 
    /${new Date().getDate()} /${new Date().getHours()}/
     ${new Date().getMinutes()} 
     ${new Date().getSeconds()}</span>
    </div>
    <span class="country">${fill3}</span>
    <span class="playerscore">${fill4}</span>
    <div class="buttons">
        <button>🗑</button>
        <button>+5</button>
        <button>-5</button>
    </div>`;

    allData.appendChild(datas);
    Arrays.push(datas);
    }
    buttonsEvents();
    sortTable(Arrays);

})


function buttonsEvents(){
    let containersBtn = document.querySelectorAll(".buttons");
    containersBtn.forEach((elements)=>{
        // console.log(elements);
        elements.addEventListener("click",(e)=>{
            let contents = e.target.textContent;
            // console.log(contents.length);
            let playerScores = e.target.parentElement.parentElement.children[2];
            // console.log(playerScores.innerText);

            if(contents.length > 2) return;

            if(contents === '🗑')
            return e.target.parentElement.parentElement.remove();

            // else if(contents == '+5'){
            //     playerScores.innerText = parseInt(playerScores.innerText) + 5;

            // }else{
            //     playerScores.innerText = parseInt(playerScores.innerText) - 5;

            // }

            playerScores.textContent = parseInt(playerScores.textContent) + parseInt(contents);
            sortTable(Arrays);

        })

    })
}

for(let i=0; i < allDatas.length;i++){
    // allData[i]=Arrays[i];
   Arrays.push(allDatas[i]);
}
// console.log(Arrays);
function sortTable(e){

    e.sort((a,b)=>{
        // console.log(a.children[2].textContent);

        if(parseInt(a.children[2].innerText)>parseInt(b.children[2].innerText)){

            return -1;
        }else if(parseInt(a.children[2].innerText) < parseInt(b.children[2].innerText)){
            return 1;
        }
        else{
            return 0;
        }
        
    })
    // console.log(e);
    document.querySelector(".main_container").replaceChildren(...e);
    
}

sortTable(Arrays);


buttonsEvents();



