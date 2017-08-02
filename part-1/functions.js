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

  static reverseSentence(string) {

    if (typeof string != 'string') {
      throw new Error('invalid input')
    }

    let stringArray = string.split(' ')
    let reverseArray = []

    for (let i = 0; i < stringArray.length; i++) {
      reverseArray.unshift(stringArray[i])
    }

    return reverseArray.join(' ')
  }

  static nameProps(obj) {

    if (typeof obj != 'object') {
      throw new Error('invalid input')
    }

    let objProps = Object.keys(obj)
    return objProps.sort()
  }

  static filterBetween(arr, min, max) {

    let filteredArr = []

    if (typeof arr != 'object' || typeof min != 'string' || typeof max != 'string') {
      throw new Error('invalid input')
    }

    arr.forEach(function (string) {
      if(string.toLowerCase() > min.toLowerCase() && string.toLowerCase() < max.toLowerCase()) {
        filteredArr.push(string)
      }
    })

    return filteredArr
  }
}
