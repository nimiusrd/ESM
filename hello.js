const hello = (name) => {
  const box = document.getElementById('box')
  box.textContent = `Hello ${name}!`
}

export default hello