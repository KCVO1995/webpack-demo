import x from './x.js'
import './style.scss'
import './y.less'
import './k.styl'
import png from './assets/good.png'

const div = document.querySelectorAll('div')[0]

div.innerHTML = `
<img src = '${png}'>
`

const button = document.createElement('button')
button.innerText= `我的一个懒按钮`
document.body.appendChild(button)

button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        module.default()
    }, (error) => {
        throw error
    })
}