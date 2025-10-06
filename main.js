document.addEventListener("DOMContentLoaded", () => {
  const totalRoomsInput = document.getElementById("totalRooms");
  const roomsSoldInput = document.getElementById("roomsSold");
  const totalRevenueInput = document.getElementById("totalRevenue");
  const occupancyEl = document.getElementById("occupancy");
  const adrEl = document.getElementById("adr");
  const revparEl = document.getElementById("revpar");

  if (
    !totalRoomsInput ||
    !roomsSoldInput ||
    !totalRevenueInput ||
    !occupancyEl ||
    !adrEl ||
    !revparEl
  ) {
    console.warn("KPI elements not found — check IDs in HTML");
    return;
  }

  const fmtCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  const calculateKPIs = () => {
    const totalRooms = Number(totalRoomsInput.value) || 0;
    const roomsSold = Number(roomsSoldInput.value) || 0;
    const totalRevenue = Number(totalRevenueInput.value) || 0;

    let occupancy = null;
    let adr = null;
    let revpar = null;

    if (totalRooms > 0) {
      occupancy = (roomsSold / totalRooms) * 100;
      revpar = totalRevenue / totalRooms;
    }

    if (roomsSold > 0) {
      adr = totalRevenue / roomsSold;
    }

    updateDisplay(occupancy, adr, revpar);
  };

  function updateDisplay(occupancy, adr, revpar) {
    occupancyEl.textContent =
      occupancy === null ? "N/A" : `${occupancy.toFixed(2)}%`;
    adrEl.textContent = adr === null ? "N/A" : fmtCurrency.format(adr);
    revparEl.textContent = revpar === null ? "N/A" : fmtCurrency.format(revpar);
  }

  totalRoomsInput.addEventListener("input", calculateKPIs);
  roomsSoldInput.addEventListener("input", calculateKPIs);
  totalRevenueInput.addEventListener("input", calculateKPIs);

  calculateKPIs();
});
