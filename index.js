const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#D-day-Container");

//div는 존재하지만 css속성에 의해서 없는 속성으로 보이게 된다.
container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요</h3>";

const dateFormMaker = () => {
  const input_year = document.querySelector("#target_year").value;
  const input_month = document.querySelector("#target_month").value;
  const input_date = document.querySelector("#target_date").value;

  // const dateFormat = input_year + "_" + input_month + "_" + input_date
  const dateFormat = `${input_year}-${input_month}-${input_date}`; //탬플릿 리터럴
  return dateFormat;
  // console.log(input_year, input_date, input_month)
};

const countMaker = () => {
  const targetInputDate = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetInputDate).setHours(0, 0, 0, 0);
  const remain = (targetDate - nowDate) / 1000;
  //만약에 remain이 0이라면, 타이머가 종료되었습니다를 출력해라.
  if (remain <= 0) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다</h3>";
    messageContainer.style.display = "flex";
    return;
  } else if (isNaN(remain)) {
    //만약 잘못된 날짜가 들어있다면 유효한 시간대가 아닙니다. 출력
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다</h3>";
    messageContainer.style.display = "flex";
    return;
  }
  //   const remainDate = Math.floor(remain / 3600 / 24);
  //   const remainHour = Math.floor((remain / 3600) % 24);
  //   const remainMin = Math.floor((remain / 60) % 60);
  //   const remainSec = Math.floor(remain % 60);
  //console.log(remainDate, remainHour, remainMin, remainSec);

  const remainObj = {
    remainDate: Math.floor(remain / 3600 / 24),
    remainHour: Math.floor((remain / 3600) % 24),
    remainMin: Math.floor((remain / 60) % 60),
    remainSec: Math.floor(remain % 60),
  };

  const documentArr = ["days", "hours", "min", "sec"];
  //이렇게 반복적인 것들을 한 번에 해결할 수 있는 것이 바로 '반복문 for'
  const timeKeys = Object.keys(remainObj);
  // const docKeys = Object.keys(documentObj);

  // const documentObj = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   min: document.getElementById("min"),
  //   sec: document.getElementById("sec"),
  // };
  let i = 0;
  for (let tag of documentArr) {
    document.getElementById(tag).textContent = remainObj[timeKeys[i]];
  }

  // for (let i = 0; i < timeKeys.length; i = i + 1) {
  //   documentObj[docKeys[i]].textContent = remainObj[timeKeys[i]];
  // }

  // documentObj["days"].textContent = remainObj["remainDate"];
  // documentObj["hours"].textContent = remainObj["remainHour"];
  // documentObj["min"].textContent = remainObj["remainMin"];
  // documentObj["sec"].textContent = remainObj["remainSec"];

  // let i = 0;
  // for (let key in documentObj) {
  //   documentObj[key].textContent = remainObj[timeKeys[i]];
  //   i++;
  // }
};

const starter = function () {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  countMaker();
};
