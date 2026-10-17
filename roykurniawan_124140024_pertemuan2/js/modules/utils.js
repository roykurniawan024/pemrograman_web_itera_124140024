export const formatTanggal = (dateString = "") => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};

export const getWeatherLabel = (code = 0) => {
  if (code === 0) return "Cerah";
  if (code >= 1 && code <= 3) return "Berawan";
  if (code >= 45 && code <= 48) return "Berkabut";
  if (code >= 51 && code <= 67) return "Hujan Ringan";
  if (code >= 80 && code <= 82) return "Hujan Deras";
  if (code >= 95) return "Hujan Petir";
  return "Normal";
};