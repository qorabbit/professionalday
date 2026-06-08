const data = [
  ["곽명재","차세대","엔지니어","현대로템"],
  ["최연주","차세대","RN","Logan Hospital"],
  ["정의현","차세대","Private Tax","PwC"],
  ["김은총","차세대","Road Worker","Downer"],
  ["이현범","차세대","Client Project Manager","NewsCorp"],
  ["박차미","차세대","Field Engineer","Ventia"],
  ["김둘이","차세대","쉐프","카츠코"],
  ["조철환","차세대","Machine Operator","Holman"],
  ["이재일","차세대","Tiler",""],
  ["간혜지","차세대","Clinical Research Associate","Novotech"],
  ["배정훈","차세대","Investigator","Queensland Government"],
  ["조민욱","차세대","",""],
  ["최아현","차세대","",""],
  ["도혜원","차세대","Marketing Manager","Miseoul Marketing Group"],
  ["송하성","차세대","Accountant","Solomons"],
  ["변재현","차세대","학생","퀸즐랜드 대학교"],
  ["김서정","차세대","",""],
  ["조세현","회원","회계감사","ATO"],
  ["김량래","회원","Senior Associate","Clayton Utz"],
  ["김관순","회원","Business Owner / Therapist","Adore Beauty And Wellness"],
  ["최규원","회원","",""],
  ["이승준","회원","",""],
  ["오정훈","회원","",""],
  ["장기현","회원","",""],
  ["이경재","회원","",""],
  ["이우희","회원","",""],
  ["강민구","회원","",""],
  ["민선아","회원","",""],
  ["이동완","회원","",""],
  ["소피아","회원","매니져","소피아 메디스파"],
  ["오만웅","회원","",""],
  ["홍아람","회원","",""],
  ["최병국","회원","",""],
  ["김주석","회원","",""],
  ["쟈누스델리","회원","",""],
  ["이세형","비회원","Data & Business Analyst","Queensland Government"],
  ["김연준","비회원","Full Stack Developer","Healing Now / Pretty Of System"],
  ["이지은","비회원","Student Nurse","Southern Cross University"],
  ["김수경","비회원","간호학 대학원생","학생"],
  ["박유찬","비회원","대표","도깨비"],
  ["이향","비회원","Student",""],
  ["Vin Boyle","비회원","Electrical Engineer","Powerlink"],
  ["임주희","비회원","변호사","Littles Lawyers"],
  ["문현주","비회원","Business Owner","Milestone Cafe"],
  ["박성휘","비회원","Business Owner","Milestone Cafe"],
  ["최윤영","비회원","Doctor","Queensland Health"],
  ["엄지영","비회원","사장","카페체리빈 노스레이크"],
  ["박소엽","비회원","Mental Health Clinician","QCS"],
  ["위영재","비회원","Carpenter","Pergolar Brisbane"],
  ["Sue Kerr","비회원","HR","SHE3 Pty Ltd"],
  ["김에린","비회원","변호사","SHE3 Pty Ltd"],
  ["이은진","비회원","Accountant","Square Resources"],
  ["서기찬","비회원","타일러","Bas Reno"],
  ["그레이스장","비회원","Sales Consultant","Matrix Global Brisbane"],
  ["진수민","비회원","Court Support Practitioner","Court Network"],
  ["박승범","비회원","Managing Director","One on One Education"],
  ["안연수","비회원","Environmental Scientist","AARC"],
  ["도예린","비회원","Student Designer","Cox Architecture"],
  ["최슬지","비회원","Operator, Field Worker","Cleaning"],
  ["이다흰","비회원","International Relations","Brisbane City Council"],
  ["차민혁","비회원","학생",""],
  ["조윤서","비회원","대학생 / Retail Assistant","University of Canterbury / Uniqlo"],
  ["남윤권","비회원","Server","Maru Grill House"],
  ["강주원","비회원","학생","QUT"],
  ["강지윤","비회원","Pilates Instructor","Kirstie Wellness"],
  ["한자연","비회원","부동산","Belle Property"],
  ["차정빈","비회원","Beauty Advisor","THEFACESHOP"],
  ["이예림","비회원","뷰티테라피스트","Lumiere Aesthetic"],
  ["류환희","비회원","Office Project Manager","AK Innovation Building"],
  ["한경수","비회원","Software Engineer","Auto & General"],
  ["김유나","비회원","Master of Business Student","University of Queensland"],
  ["이종선","강연자","",""],
  ["서대화","강연자","",""],
  ["Justin","강연자","",""],
];

function render() {
  const q = document.getElementById('search').value.trim().toLowerCase();
  const cat = document.getElementById('catFilter').value;
  const tbody = document.getElementById('tbody');

  const filtered = data.filter(r => {
    if (q && !r[0].toLowerCase().includes(q)) return false;
    if (cat === '미입력') return !r[2] && !r[3];
    if (cat && r[1] !== cat) return false;
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="empty-state">검색 결과가 없습니다</td></tr>`;
    document.getElementById('countLabel').textContent = '0명';
    return;
  }

  tbody.innerHTML = filtered.map((r, i) => `
    <tr>
      <td class="num">${i + 1}</td>
      <td class="name">${r[0]}</td>
      <td><span class="badge badge-${r[1]}">${r[1]}</span></td>
      <td>${r[2] || '<span class="empty">미입력</span>'}</td>
      <td>${r[3] || '<span class="empty">미입력</span>'}</td>
    </tr>
  `).join('');

  document.getElementById('countLabel').textContent = `${filtered.length}명`;
}

render();
