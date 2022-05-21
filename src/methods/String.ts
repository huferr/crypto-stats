String.prototype.formatToSearch = function(string): boolean {
  return this
  .replace(/\s|_|\(|\)/g, "-")
  .normalize("NFD").replace(/\p{Diacritic}/gu, "")
  .toLowerCase()
  .startsWith(string.replace(/\s|_|\(|\)/g, "-")
  .normalize("NFD").replace(/\p{Diacritic}/gu, "")
  .toLowerCase())
}

export {}