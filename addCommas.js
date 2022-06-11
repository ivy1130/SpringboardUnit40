function addCommas(num) {
  const str = String(num)
  const res = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return res
}

module.exports = addCommas;