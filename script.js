const questions=[
{text:"하루 일정을 마치고 기숙사에 돌아왔다. 가장 먼저 하고 싶은 행동은?",answers:[["오늘 해야 할 일을 확인하고 내일 일정을 정리한다.","self"],["친구에게 연락해서 저녁을 같이 먹을지 물어본다.","social"],["가방과 옷을 정리하고 흐트러진 공간부터 정돈한다.","clean"],["침대에 편하게 누워 음악이나 영상을 보며 쉰다.","heal"]]},
{text:"주말 아침, 특별한 일정이 없다면?",answers:[["늦잠을 자고 느긋하게 나만의 시간을 보낸다.","heal"],["밀린 빨래나 청소를 하면서 방을 정리한다.","clean"],["친구들과 약속을 잡고 밖에 나갈 계획을 세운다.","social"],["다음 주 일정과 해야 할 일을 미리 정리해둔다.","self"]]},
{text:"시험기간에 기숙사 방에서 공부하려고 한다. 가장 먼저 하는 일은?",answers:[["친구에게 같이 공부할지 물어보고 함께할 방법을 찾는다.","social"],["책상 위를 정리하고 공부하기 좋은 환경을 만든다.","clean"],["오늘 공부할 분량과 시간을 정해서 계획을 세운다.","self"],["잠깐 쉬면서 컨디션을 먼저 회복한 뒤 시작한다.","heal"]]},
{text:"공용공간을 이용하고 방으로 돌아가기 전, 나는?",answers:[["다음에 사용할 사람을 생각해 사용한 물건을 제자리에 둔다.","clean"],["같이 있던 사람들과 조금 더 이야기를 나눈다.","social"],["오늘 남은 일정이 무엇인지 확인하고 움직인다.","self"],["더 머물러도 괜찮다면 잠깐 쉬면서 여유를 즐긴다.","heal"]]},
{text:"하루 종일 바쁘게 움직인 날, 기숙사에 돌아왔을 때 가장 행복한 순간은?",answers:[["오늘 할 일을 모두 끝내고 계획대로 하루를 마무리했을 때","self"],["편안한 침대에 누워 아무 생각 없이 쉴 때","heal"],["친구들과 오늘 있었던 일을 이야기하며 웃을 때","social"],["깨끗하게 정돈된 방에서 편안하게 쉴 때","clean"]]},
{text:"기숙사 방에서 물건을 하나 새로 들여놓는다면?",answers:[["공부나 생활을 더 효율적으로 만들어주는 물건","self"],["방을 더 아늑하고 편안하게 만들어주는 물건","heal"],["친구와 함께 사용할 수 있거나 이야깃거리가 되는 물건","social"],["물건을 깔끔하게 정리하고 보관할 수 있는 물건","clean"]]},
{text:"갑자기 하루 동안 자유시간이 생겼다면?",answers:[["미뤄둔 공부나 자기계발을 하면서 알차게 보낸다.","self"],["방을 정리하고 필요한 물건들을 정돈한다.","clean"],["친구들과 만나서 맛있는 것을 먹거나 함께 놀러 간다.","social"],["침대에서 푹 쉬거나 좋아하는 콘텐츠를 보며 충전한다.","heal"]]},
{text:"행복기숙사에서 나에게 가장 중요한 생활환경은?",answers:[["깔끔하고 정돈된 공간에서 생활할 수 있는 것","clean"],["편하게 쉬면서 나만의 시간을 보낼 수 있는 것","heal"],["공부와 개인 일정을 체계적으로 관리할 수 있는 것","self"],["친구들과 자연스럽게 어울리고 다양한 활동을 할 수 있는 것","social"]]}
];
const results={
clean:{image:"dreambye-clean.png",icon:"🧹",title:"깔끔한 정돈러",tagline:"“내 공간은 내가 지킨다!”",desc:"정돈된 공간에서 안정감을 느끼는 당신! 주변이 깔끔하게 정리되어 있을 때 생활도 공부도 한결 편안해져요.",points:["물건을 제자리에 두는 편이에요.","쾌적하고 정돈된 환경을 중요하게 생각해요.","공용공간도 다음 사람을 배려하며 사용하는 편이에요."]},
heal:{image:"dreambye-heal.png",icon:"🌿",title:"느긋한 힐링러",tagline:"“기숙사는 나의 충전소!”",desc:"바쁜 하루 뒤에는 나만의 속도로 쉬어가는 당신! 편안하고 아늑한 공간에서 충분히 충전하는 시간을 중요하게 생각해요.",points:["혼자만의 편안한 시간을 좋아해요.","무리하지 않고 내 페이스대로 생활하는 편이에요.","아늑하고 편안한 분위기를 선호해요."]},
self:{image:"dreambye-self.png",icon:"📚",title:"알찬 자기관리러",tagline:"“기숙사에서도 나의 루틴은 계속된다!”",desc:"해야 할 일과 쉬는 시간을 알차게 관리하는 당신! 계획을 세우고 하나씩 실천하면서 뿌듯함을 느껴요.",points:["일정과 해야 할 일을 미리 정리하는 편이에요.","공부와 개인 시간을 효율적으로 관리해요.","규칙적인 생활과 나만의 루틴을 중요하게 생각해요."]},
social:{image:"dreambye-social.png",icon:"👫",title:"활발한 소통러",tagline:"“같이하면 기숙사 생활도 두 배로 즐겁다!”",desc:"사람들과 함께할 때 에너지가 생기는 당신! 친구들과 밥을 먹고 이야기를 나누는 등 함께하는 시간을 즐겨요.",points:["친구들과 함께하는 시간을 좋아해요.","새로운 사람과 자연스럽게 어울리는 편이에요.","혼자보다 함께할 때 더 즐거움을 느껴요."]}
};
const $=id=>document.getElementById(id);const screens={home:$('home'),quiz:$('quiz'),loading:$('loading'),result:$('result')};let current=0,selected=[];let scores={clean:0,heal:0,self:0,social:0};
function show(name){Object.values(screens).forEach(s=>s.classList.add('hidden'));screens[name].classList.remove('hidden');window.scrollTo(0,0)}
function reset(){current=0;selected=[];scores={clean:0,heal:0,self:0,social:0}}
function render(){
  const q=questions[current];
  document.getElementById("questionText").textContent=q.text;
  document.getElementById("questionNum").textContent=String(current+1).padStart(2,"0");
  document.getElementById("currentNum").textContent=current+1;
  document.getElementById("backBtn").style.visibility=current===0?"hidden":"visible";
  const dots=document.getElementById("progressDots");
  dots.innerHTML="";
  questions.forEach((_,i)=>{const dot=document.createElement("span");if(i<=current)dot.className="on";dots.appendChild(dot);});
  const buttons=document.querySelectorAll("#answers .answer-btn");
  buttons.forEach((button,i)=>{
    const text=button.querySelector(".answer-text");
    text.textContent=q.answers[i][0];
    button.onclick=()=>choose(i);
  });
}

function choose(i){selected[current]=i;scores={clean:0,heal:0,self:0,social:0};selected.forEach((a,qi)=>{if(a!==undefined)scores[questions[qi].answers[a][1]]++});if(current<questions.length-1){current++;render()}else{show('loading');setTimeout(showResult,900)}}
function resultKey(){const keys=Object.keys(scores),max=Math.max(...keys.map(k=>scores[k])),tied=keys.filter(k=>scores[k]===max);if(tied.length===1)return tied[0];const core=[1,2,4,7],coreScores={clean:0,heal:0,self:0,social:0};core.forEach(i=>{const a=selected[i];if(a!==undefined)coreScores[questions[i].answers[a][1]]++});return tied.reduce((best,k)=>coreScores[k]>coreScores[best]?k:best,tied[0])}
function showResult(){const r=results[resultKey()];$('resultIcon').innerHTML=`<img class="result-dreambye" src="${r.image}" alt="${r.title} 꿈별이" onerror="this.remove(); $('resultIcon').textContent=r.icon;">`;$('resultTitle').textContent=r.title;$('resultTagline').textContent=r.tagline;$('resultDescription').textContent=r.desc;$('resultPoints').innerHTML=r.points.map(p=>`<li>${p}</li>`).join('');show('result')}
$('startBtn').onclick=()=>{reset();show('quiz');render()};$('retryBtn').onclick=()=>{reset();show('quiz');render()};$('backBtn').onclick=()=>{if(current>0){current--;render()}};
