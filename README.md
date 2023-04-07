<h1 align="center">Sticky Navbar</h1>
<h6 align="center">Project <a href="https://sticky-nav-bar-nine.vercel.app/">Link</a></h6>
<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="html5" width="60" height="40"/>
<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="html5" width="60" height="40"/>
</div>

<details>

<summary  align="center" style="background-color: #ffff00; padding: 10px;">English</summary>

<h3>Description</h3>
In this project, a fixed navbar was built at the top of the page, which receives different effects as soon as the scroll is performed, making it decrease in height and changing the background color.

<hr>
<h3>New things learned</h3>
The programming logic of this project involves knowing the vertical scroll position (scroll Y), the height (height) of the navbar, and a check for when the scroll Y position is greater than the height of the navbar, so that it receives the class that changes its properties.

```JavaScript
function fixNav(){
  if (window.scrollY > this.nav.offsetHeight + 150) {
                nav.classList.add(`active`)
            } else {
                nav.classList.remove(`active`)
            }  
}
```
To get such properties in real-time, the scroll event is added to the window object, and to prevent bugs, a load event can also be added to the window object in case the page is reloaded.
```JavaScript
window.addEventListener(`scroll`, fixNav)
window.addEventListener('load', fixNav)
```

<img src="https://i.imgur.com/7VWbnw1.png" alt="html5" width="100%"/>
<img src="https://i.imgur.com/jpqfFPV.png" alt="html5" width="100%"/>
<hr>
<h3>License</h3>
This project was inspired by project number 25 from the public repository 50 projects 50 days (https://github.com/bradtraversy/50projects50days)
<hr>
</details>
<br>
<h3>Descrição</h3>

Neste projeto foi construida uma navbar fixa ao topo da página e recebe efeitos diferentes assim que o scroll é realizado fazendo ela diminuir de altura e mudar a cor do background


<hr>
<h3>Novidades aprendidas</h3>

A lógica de programação desse projeto envolve saber a posição do scroll vertical (scroll Y), a altura (height) da navbar e uma verificação para quando a posição do scroll Y for ***maior*** que a altura da navbar ela receber a classe que muda as propriedades dela

```JavaScript
function fixNav(){
  if (window.scrollY > this.nav.offsetHeight + 150) {
                nav.classList.add(`active`)
            } else {
                nav.classList.remove(`active`)
            }  
}
```

para pegar tais propriedades em tempo real evento scroll no objeto window e para evitar bugs também pode adicionar um evento de load no objeto window para caso a página seja recarregada

```JavaScript
window.addEventListener(`scroll`, fixNav)
window.addEventListener('load', fixNav)
```

<img src="https://i.imgur.com/7VWbnw1.png" alt="html5" width="100%"/>
<img src="https://i.imgur.com/jpqfFPV.png" alt="html5" width="100%"/>

<hr>
<h3>Licença</h3>

Este projeto foi inspirado no projeto número 25 do repositório público 50 projects 50 days (https://github.com/bradtraversy/50projects50days)


---
