setInterval(() => {
  const now = new Date();

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true, // 12-hour format
    timeZone: "UTC",
  };
  const currentUTCTime = now.toLocaleTimeString("en-US", timeOptions) + " UTC";

  const dayOptions = {
    weekday: "long",
    timeZone: "UTC",
  };
  const currentUTCDate = now.toLocaleDateString("en-US", dayOptions);

  // Update the elements in the DOM
  document.querySelector("[data-testid='currentDay']").innerText =
    currentUTCDate;
  document.querySelector("[data-testid='currentTimeUTC']").innerText =
    currentUTCTime;
}, 1000);
