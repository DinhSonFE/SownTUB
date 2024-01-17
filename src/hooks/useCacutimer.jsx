function useCacutimer(dateString) {
  const specifiedDate = new Date(dateString);
  const currentDate = new Date();

  const timeDiffInSeconds = Math.floor((currentDate - specifiedDate) / 1000);

  if (timeDiffInSeconds < 60) {
    // Dưới 1 phút, hiển thị số giây
    return `${timeDiffInSeconds} giây trước`;
  } else if (timeDiffInSeconds < 3600) {
    // Dưới 1 giờ, hiển thị số phút
    const minutesDiff = Math.floor(timeDiffInSeconds / 60);
    return `${minutesDiff} phút trước`;
  } else if (timeDiffInSeconds < 86400) {
    // Dưới 1 ngày, hiển thị số giờ
    const hoursDiff = Math.floor(timeDiffInSeconds / 3600);
    return `${hoursDiff} giờ trước`;
  } else if (timeDiffInSeconds < 2592000) {
    // Dưới 30 ngày, hiển thị số ngày
    const daysDiff = Math.floor(timeDiffInSeconds / 86400);
    return `${daysDiff} ngày trước`;
  } else if (timeDiffInSeconds < 31536000) {
    // Dưới 1 năm, hiển thị số tháng
    const monthsDiff = Math.floor(timeDiffInSeconds / 2592000);
    return `${monthsDiff} tháng trước`;
  } else {
    // Trên 1 năm, hiển thị số năm
    const yearsDiff = Math.floor(timeDiffInSeconds / 31536000);
    return `${yearsDiff} năm trước`;
  }
}

export default useCacutimer;
