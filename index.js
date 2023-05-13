const container = document.getElementsByClassName('map__container')[0]
for (let id = 0; id < container.children.length; id++) {
  let child = container.children[0]
  console.log(child)

  let wrap = document.createElement('div')
  wrap.style.position = 'absolute'
  wrap.style.cursor = 'pointer'
  wrap.style.top = child.style.top
  wrap.style.left = child.style.left

  let tooltip = document.createElement('div')
  tooltip.classList.add('shaman-tooltip')
  tooltip.textContent = `Предприятие №${id}`
  tooltip.style.position = 'absolute'
  wrap.appendChild(child)
  wrap.appendChild(tooltip)
  container.appendChild(wrap)
}


