// Точка монтирования
const pluginBase = document.getElementById("neonContructorId");

// Стили
const styles = createTag('', 'style', pluginBase)
styles.innerHTML = `



`; // скопировать стили сюда
pluginBase.classList.add('flexCenter')

//Данные виджета
const pluginData={
    images: [
        'https://i.ibb.co/W3W4hD2/00108-3283353711-centered-wall-1.png',
        'https://i.ibb.co/bXFBCKD/00100-670826520-wall-backgroun-1.png', 
        'https://i.ibb.co/f1Ys3rN/00103-623051736-wall-backgroun-1.png',
        'https://i.ibb.co/svSwVjN/00102-623051735-wall-backgroun-1.png', 
        'https://i.ibb.co/VwzXDB7/00098-763098539-wall-backgroun-1.png',
    ],
    textColors: [
        'rgba(3,231,71,255)', 
        'rgba(6,205,248,255)', 
        'rgba(4,1,255,255)', 
        'rgba(253,51,53,255)', 
        'rgba(248,1,186,255)', 
        'rgba(204,216,230,255)', 
        'rgba(255,159,28,255)', 
        'rgba(248,5,46,255)', 
        'rgba(253,212,131,255)'],
    textFonts: [
        `'Bad Script', cursive`,
        `'Amatic SC', cursive`,
        `'Caveat', cursive`,
        `'El Messiri', sans-serif`,
        `'Marck Script', cursive`,
        `'Poiret One', cursive`,
    ],
    textSizes:{
        min: 12,
        max: 70,
        step: 1,
    },
    startText: "Введите ваш текст"
}

//Создание блоков для изображения
const imageTag = createTag('imgTag', 'div', pluginBase)
const imgg = createTag('img', 'img', imageTag)
const textImage = createTag('imgText', 'h3', imageTag)
textImage.innerText = pluginData.startText
imgg.src = pluginData.images[1]

//Создание блоков для настроек
const settingsTag = createTag(['settingsTag','flexCenter'], 'div', pluginBase)
const inputText = createTag('inputStyle', 'input', settingsTag)
inputText.type='text'
inputText.placeholder = pluginData.startText

//Выбор шрифта
const selectFont = createTag(['selectBtnStyle', 'flexCenter'], 'div', settingsTag)
pluginData.textFonts.map((value, index)=>{
    const fontOption = createTag(['selectBtnStyleBtn', 'flexCenter'], 'btn', selectFont)
    fontOption.innerText = index+1
    fontOption.value = value
    fontOption.style.fontFamily = pluginData.textFonts[5]
    fontOption.style.fontWeight = 'bold'
    fontOption.style.backgroundColor = 'darkblue'
    fontOption.style.color = 'white'
})
selectFont.addEventListener('click', (e)=>{
    const value = e.target.value
    if(value){
        textImage.style.fontFamily = value
   }
   
    
})

//Выбор размера
const selectSizeDiv = createTag(['selectBtnStyle', 'flexCenter'], 'div', settingsTag)
const selectSize = createTag('sliderCustom', 'input', selectSizeDiv)
selectSize.type = 'range'
selectSize.min = pluginData.textSizes.min
selectSize.max = pluginData.textSizes.max
selectSize.step = pluginData.textSizes.step
selectSize.value = 40
textImage.style.fontSize = 40+'px'
selectSize.addEventListener('input', (e)=>{
    const value = e.target.value
    textImage.style.fontSize = value+'px'
})

//Выбор цвета
const selectColorDiv = createTag(['selectBtnStyle', 'flexCenter'], 'div', settingsTag)
pluginData.textColors.map((value)=>{
const btn = createTag('selectBtnStyleBtn', 'button', selectColorDiv)
    btn.value = value
    btn.style.backgroundColor = value
    btn.addEventListener('click', (e)=>{
        const value = e.target.value
        textImage.style.color =value
        let rgb = value.replace(/[^\d,]/g, '').split(',').map((int)=>{
            return parseInt(int);
        })
        console.log(rgb)
        function ligther(n, i){
            let color = rgb[n]
            if(color-(10*i)<=255-10*i){
                    return color+(10*i)
            }
            else return color
           
        }
        textImage.style.textShadow = (`
        0px 0px 4px rgb(${ligther(0, 1)}, ${ligther(1, 1)}, ${ligther(2, 1)}), 
        0px 0px 20px rgb(${ligther(0, 2)}, ${ligther(1, 2)}, ${ligther(2, 2)}),
        0px 0px 40px rgb(${ligther(0, 3)}, ${ligther(1, 3)}, ${ligther(2, 3)})
        `).toString()
        
        console.log(textImage.style.textShadow)
    })
})

//Выбор изображения
const selectImg = createTag(['selectBtnStyle', 'flexCenter'], 'div', settingsTag)
pluginData.images.map((value)=>{ 
    const preview = createTag('selectBtnStyleBtn', 'img', selectImg)
    preview.value = value
    preview.src = value

    preview.addEventListener('click', ((e)=>{
        imgg.src = e.target.value
    }))
})


//Обновление введенного текста
inputText.addEventListener('input', (e)=>{
    let value = e.target.value
    
    textImage.innerText =value
})



function createTag(tagName,tagType="div", parentTag){
    const tag = document.createElement(tagType)
    if(tagName!=""){
        if(Array.isArray(tagName)){
            tagName.map((tagName)=>{
                tag.classList.add(tagName)
            })
        }
        else tag.classList.add(tagName)
    }
    parentTag.appendChild(tag)
    return tag
}

