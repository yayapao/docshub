const genSiderItem = (prefix, names) => {
  return names.map((item) => {
    return `${prefix}/${item}`
  })
}

module.exports = { genSiderItem }
