const inputState = {
  id: "input",
  value: "name",
}

const input = document.getElementById('input')
const text = document.getElementById('text')
const button = document.getElementById('button')

input.oninput = (e)=> {
    p.value = e.target.value
}

button.onclick= () => {
    p.value = '1222'
}


let p = new Proxy(inputState, {
  set(target, key,value) {
    if(key==='value'){
        text.innerText = value
        input.value = value
    }
    return Reflect.set(...arguments)
  },
  get(target,key) {
    return key in target ? target[key] : undefined
  },
})
