
let search1 = document.querySelector('.search');
let button1 = document.querySelector('.button');
let img1 = document.querySelector('.img');
let model_conteiner1 = document.querySelector('.model_conteiner');
let model1 = document.querySelector('.model');
let close1 = document.querySelector('.close');

button1.addEventListener('click', function () {
    serthImg(search1.value)
})

search1.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        serthImg(search1.value)
    }
})

function serthImg(text) {
    const resp = fetch('https://api.unsplash.com/search/photos?query=' + text + '&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
    resp.then(data => data.json()).then(game => addImages(game))
}

function addImages(game) {
    img1.innerHTML = "";
    for (let i = 0; i < game.results.length; i++) {
        let el = document.createElement('img')
        let src = el.setAttribute('src', game.results[i].urls.small)
        img1.append(el)
    }
    let img_all= document.getElementsByTagName('img')
        
        for(let i =0; i<img_all.length; i++){
            img_all[i].addEventListener('dblclick', function (e){
                model_conteiner1.classList.add('open')
                model_conteiner1.style.backgroundImage=`url(${e.target.getAttribute('src')})`
               
                

            })
        }

}

// model1.addEventListener('dblclick', function () {
//     model_conteiner1.classList.add('open')
//     console.log(model1.classList[0])
// })

close1.addEventListener('click', function () {
    model_conteiner1.classList.remove('open')
    console.log(close1.classList[0])
})


