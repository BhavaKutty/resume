function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      } else{
        reject(new Error('error'));
      }
    })
  })
}

var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achievement(data.achievement);
})

var child0=document.querySelector("#child0");
// career
function career(car){
  var heading=document.createElement("h2");
  heading.textContent="Career Objective";
  child0.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
var p=document.createElement("p");
p.textContent=car.info;
child0.appendChild(p);
}

// education
function education(edu) {
  var heading=document.createElement("h2");
  heading.textContent="Education Qualification";
  child0.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);

  var table=document.createElement("table");
  var div=document.createElement("div");
  div.classList.add("table-responsive");
  child0.appendChild(div);
  div.appendChild(table);
  var tr="<tr> <td> S.No </td> <td> Degree </td> <td> Institute </td> <td> Data </td> </tr>";
  //table.innerHTML=tr;
  table.border="1";
  var tr1="";
  for(var i=0;i<edu.length;i++){
  tr1+="<tr> <td>"+(i+1)+"</td> <td>"+edu[i].degree+" </td> <td>"+edu[i].institute+"</td> <td>"+edu[i].data+"</td></tr>";
  }
  table.innerHTML=tr+tr1;
}

//skills
function skills(skill){
  var heading=document.createElement("h2");
  heading.textContent="Technical Skills";
  child0.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  for(var i=0;i<skill.length;i++){
  var title=document.createElement("h4");
  title.textContent=skill[i].title;
  child0.appendChild(title);
  var list=document.createElement("ul");
  child0.appendChild(list);
  console.log(skill[i].set.length)
  for(var j=0;j<skill[i].set.length;j++){
    var listItem=document.createElement("li");
    listItem.textContent=skill[i].set[j];
    list.appendChild(listItem);
  }
}
}

  //achievements
  function achievement(achievement){
    var heading=document.createElement("h2");
    heading.textContent="Achievements";
    child0.appendChild(heading);
    var hLine=document.createElement("hr");
    heading.appendChild(hLine);
    var list=document.createElement("ul");
    child0.appendChild(list);
    var listItem="";
    for(var i=0;i<achievement.length;i++){
    // var listItem=document.createElement("li");
      //listItem.textContent=achievement[i].achievedData;
      //list.appendChild(listItem);
    listItem+="<li>"+achievement[i].achievedData+"</li>";
    }
    list.innerHTML=listItem;
  }
