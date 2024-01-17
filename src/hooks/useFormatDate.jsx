function useFormatDate(inputDateString) {
  // Tạo đối tượng Date từ chuỗi thời gian đầu vào
  var date = new Date(inputDateString);

  // Mảng các tên tháng (để có thể sử dụng index trực tiếp)
  var monthNames = [
    "Thg 1", "Thg 2", "Thg 3",
    "Thg 4", "Thg 5", "Thg 6",
    "Thg 7", "Thg 8", "Thg 9",
    "Thg 10", "Thg 11", "Thg 12"
  ];

  // Lấy ngày, tháng và năm từ đối tượng Date
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  // Định dạng lại chuỗi theo định dạng mong muốn
  var formattedDate = day + ' ' + monthNames[monthIndex] + ', ' + year;

  return formattedDate;
}

export default useFormatDate