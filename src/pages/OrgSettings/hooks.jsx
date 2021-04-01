import {useState} from 'react'

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value)
      },
    },
  }
}

export function transformDate(date, format) {
  let year = 0
  let month = 0
  let dom = 0
  if (format === 'string') {
    year = date.getFullYear()
    month = date.getMonth()
    dom = date.getDate()
    return `${year}-${month}-${dom}`
  } else {
    ;[year, month, dom] = date.split('-')
    let newDate = new Date()
    newDate.setMonth(parseInt(month) - 1)
    newDate.setFullYear(parseInt(year))
    newDate.setDate(parseInt(dom))
    return newDate
  }
}

export const useDate = (initialValue) => {
  const [date, setDate] = useState(initialValue)

  return {
    date,
    setDate,
    bind: {
      date,
      onChange: (date) => {
        console.log(date)
        setDate(date)
      },
    },
  }
}
