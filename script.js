const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const profileDiv = document.getElementById("profile-div");
const buttons = document.querySelectorAll("btn-1");

fetch("./data.json").then((res) =>
  res.json().then((data) => {
    console.log(data);
    data.forEach((title) => {
      profileDiv.insertAdjacentHTML(
        "afterend",
        `<div class="activity-container ${title.title
          .toLowerCase()
          .replaceAll(" ", "-")}">
          <div class="activity-content">
            <div class="activity-title">
              <p class="text-5-medium">${title.title}</p>
              <img src="./images/icon-ellipsis.svg" alt="" class="more-icon" />
            </div>
            <div class="activity-time">
              <p class="text-1">${title.timeframes.weekly.current}hrs</p>
              <p class="text-6">Last week - ${
                title.timeframes.weekly.previous
              }hrs</p>
            </div>
          </div>
        </div>`
      );
    });
  })
);

const clearActivities = () => {
  //Clear all activities from html
  const activities = document.querySelectorAll(".activity-container");
  activities.forEach((a) => a.remove());
};

dailyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dailyBtn.classList.add("btn-1-active");
  weeklyBtn.classList.remove("btn-1-active");
  monthlyBtn.classList.remove("btn-1-active");
  clearActivities();
  fetch("./data.json").then((res) =>
    res.json().then((data) => {
      data.forEach((title) => {
        profileDiv.insertAdjacentHTML(
          "afterend",
          `<div class="activity-container ${title.title
            .toLowerCase()
            .replaceAll(" ", "-")}">
          <div class="activity-content">
            <div class="activity-title">
              <p class="text-5-medium">${title.title}</p>
              <img src="./images/icon-ellipsis.svg" alt="" class="more-icon" />
            </div>
            <div class="activity-time">
              <p class="text-1">${title.timeframes.daily.current}hrs</p>
              <p class="text-6">Last week - ${
                title.timeframes.daily.previous
              }hrs</p>
            </div>
          </div>
        </div>`
        );
      });
    })
  );
});
weeklyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dailyBtn.classList.remove("btn-1-active");
  weeklyBtn.classList.add("btn-1-active");
  monthlyBtn.classList.remove("btn-1-active");
  clearActivities();
  fetch("./data.json").then((res) =>
    res.json().then((data) => {
      data.forEach((title) => {
        profileDiv.insertAdjacentHTML(
          "afterend",
          `<div class="activity-container ${title.title
            .toLowerCase()
            .replaceAll(" ", "-")}">
          <div class="activity-content">
            <div class="activity-title">
              <p class="text-5-medium">${title.title}</p>
              <img src="./images/icon-ellipsis.svg" alt="" class="more-icon" />
            </div>
            <div class="activity-time">
              <p class="text-1">${title.timeframes.weekly.current}hrs</p>
              <p class="text-6">Last week - ${
                title.timeframes.weekly.previous
              }hrs</p>
            </div>
          </div>
        </div>`
        );
      });
    })
  );
});
monthlyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dailyBtn.classList.remove("btn-1-active");
  weeklyBtn.classList.remove("btn-1-active");
  monthlyBtn.classList.add("btn-1-active");
  clearActivities();
  fetch("./data.json").then((res) =>
    res.json().then((data) => {
      data.forEach((title) => {
        profileDiv.insertAdjacentHTML(
          "afterend",
          `<div class="activity-container ${title.title
            .toLowerCase()
            .replaceAll(" ", "-")}">
          <div class="activity-content">
            <div class="activity-title">
              <p class="text-5-medium">${title.title}</p>
              <img src="./images/icon-ellipsis.svg" alt="" class="more-icon" />
            </div>
            <div class="activity-time">
              <p class="text-1">${title.timeframes.monthly.current}hrs</p>
              <p class="text-6">Last week - ${
                title.timeframes.monthly.previous
              }hrs</p>
            </div>
          </div>
        </div>`
        );
      });
    })
  );
});
