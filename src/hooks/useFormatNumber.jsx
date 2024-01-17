
function useFormatNumber(inputString) {
  return inputString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}


export default useFormatNumber