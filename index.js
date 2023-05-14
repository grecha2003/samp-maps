async function start() {
  let base = await fetch('/base.json')
  let base_json = await base.json()
  
  console.log(base_json)
  
  const container = document.getElementsByClassName('map__container')[0]
  for (let id = 0; id < container.children.length; id++) {
    let child = container.children[0]
    console.log(child)
  
    if (id >= base_json.rows.length) {
      container.removeChild(child)
      continue;
    }
    let details = base_json.rows[id]
  
    let wrap = document.createElement('div')
    wrap.style.position = 'absolute'
    wrap.style.cursor = 'pointer'
    wrap.style.top = child.style.top
    wrap.style.left = child.style.left
  
    let tooltip = document.createElement('div')
    tooltip.classList.add('shaman-tooltip')
    tooltip.innerHTML = `${details.name}<br>Тип: ${details.type}<br>ID: ${details.id}<br>Владелец: ${details.owner}`
    tooltip.style.position = 'absolute'
    wrap.appendChild(child)
    wrap.appendChild(tooltip)
    container.appendChild(wrap)
    console.log(`sum= ${id}`)
  }
}

start()