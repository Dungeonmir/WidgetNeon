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
    textColors: ['rgb(250, 250, 250)','rgb(194, 30, 86)', 'rgb(0, 0, 255)', 'rgb(0, 0, 139)', 'rgb(255, 195,0)'],
    currentText: 'Твой текст',
    textFonts: [
        `'Bad Script', cursive`,
        `'Amatic SC', cursive`,
        `'Caveat', cursive`,
        `'El Messiri', sans-serif`,
        `'Marck Script', cursive`,
        `'Poiret One', cursive`,
    ],
    textSizes:[
        `xx-small`,
        `x-small`,
        `small`,
        `medium`,
        `large`,
        `x-large`,
        `xx-large`,
        `xxx-large`,
    ],
    startText: "Твой текст"
}

//Создание блоков для изображения
const imageTag = createTag('imgTag', 'div', pluginBase)
const imgg = createTag('img', 'img', imageTag)
const textImage = createTag('imgText', 'h3', imageTag)
const startText = 
textImage.innerText = pluginData.startText
imgg.src = pluginData.images[1]

//Создание блоков для настроек
const settingsTag = createTag(['settingsTag','flexCenter'], 'div', pluginBase)
const inputText = createTag('inputStyle', 'input', settingsTag)
inputText.type='text'
inputText.placeholder = pluginData.currentText

//Выбор шрифта
const selectFont = createTag('selectStyle', 'select', settingsTag)
pluginData.textFonts.map((value)=>{
    const fontOption = createTag('', 'option', selectFont)
    fontOption.innerText = value.split(`'`)[1]
    fontOption.value = value
    fontOption.style.fontFamily = value
})
selectFont.addEventListener('change', (e)=>{
    const value = e.target.value
    textImage.style.fontFamily = value
    
})

//Выбор размера
const selectSize = createTag('selectStyle', 'select', settingsTag)
pluginData.textSizes.map((value)=>{
    const fontOption = createTag('', 'option', selectSize)
    fontOption.innerText = value
    fontOption.value = value
    fontOption.style.fontSize = value
})
selectSize.addEventListener('change', (e)=>{
    const value = e.target.value
    textImage.style.fontSize = value
    
})

//Выбор цвета
const selectColor = createTag(['selectColorStyle', 'flexCenter'], 'div', settingsTag)
pluginData.textColors.map((value)=>{
    const btn = createTag('selectColorStyleBtn', 'button', selectColor)
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
const selectImg = createTag(['selectColorStyle', 'flexCenter'], 'div', settingsTag)
pluginData.images.map((value)=>{ 
    const preview = createTag('selectColorStyleBtn', 'img', selectImg)
    preview.value = value
    preview.src = value

    preview.addEventListener('click', ((e)=>{
        imgg.src = e.target.value
    }))
})


//Обновление введенного текста
inputText.addEventListener('input', (e)=>{
    let value = e.target.value
    
    if(value.trim()==''){
        textImage.innerText = pluginData.startText
    }
    else textImage.innerText =value
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

