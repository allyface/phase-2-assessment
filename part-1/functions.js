export default class Functions {

  static month(date) {
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    if (isNaN(date.getMonth())) {
      throw new Error('invalid input')
    } else {
      for (let i = 0; i < monthName.length; i++) {
        if(date.getMonth() == i) {
          return monthName[i]
        }
      }
    }
  }
}
