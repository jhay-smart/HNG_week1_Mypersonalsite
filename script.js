setInterval(() => {
    const now = new Date();
    const day = now.toLocaleString("en-US", { weekday: "long", month: "short", day: "numeric", year: "numeric" });
    const time = now.toLocaleString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true, timeZoneName: "short" , timeZone:'UTC'});
    document.querySelector("[data-testid='currentDay']").innerText = day;
    document.querySelector("[data-testid='currentTimeUTC']").innerText = time;
  }, 1000); 