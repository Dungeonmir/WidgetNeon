// Точка монтирования
const pluginBase = document.getElementById("neonContructorId");

// Стили
const styles = createTag('', 'style', pluginBase)
styles.innerHTML = `



`; // скопировать стили сюда
pluginBase.classList.add('flexCenter')
pluginBase.classList.add('pluginBase')

//Данные виджета
const pluginData={
    images: [
        'https://i.ibb.co/bXFBCKD/00100-670826520-wall-backgroun-1.png', 
        'https://i.ibb.co/f1Ys3rN/00103-623051736-wall-backgroun-1.png',
        'https://i.ibb.co/svSwVjN/00102-623051735-wall-backgroun-1.png', 
        'https://i.ibb.co/W3W4hD2/00108-3283353711-centered-wall-1.png',
        'https://i.ibb.co/f8Z709r/00133-2472695541-photo-of-an.png',
        'https://i.ibb.co/XxVP7BL/00134-2506587442-photo-of-an.png',
        'https://i.ibb.co/VtHD1vx/00143-1998025693-photo-of-an.png',
        'https://i.ibb.co/Qd5HJvw/00137-548817707-photo-of-an-e.png',
        'https://i.ibb.co/hmGkdbv/00136-548817709-photo-of-an-e.png',
        
    ],
    textColors: [
        'rgba(234,236,230,255)', 
        'rgba(253,212,131,255)',
        'rgba(255,159,28,255)', 
        'rgba(253,51,53,255)', 
        'rgba(248,5,46,255)', 
        'rgba(248,1,186,255)', 
        'rgba(6,205,248,255)', 
        'rgba(4,1,255,255)', 
        'rgba(3,231,71,255)', 
    ],
    textFonts: [
        `'Bad Script', cursive`,
        `'Amatic SC', cursive`,
        `'Caveat', cursive`,
        `'Comfortaa', cursive`,
        `'Comforter Brush', cursive`,
        `'Marck Script', cursive`,
        `'Poiret One', cursive`,
        `'Ruslan Display', cursive`,
        `'Seymour One', sans-serif`,
    ],
    textSizes:{
        min: 12,
        max: 70,
        step: 1,
    },
    startText: "Ваш текст",
    currentData:{
        image:'https://i.ibb.co/bXFBCKD/00100-670826520-wall-backgroun-1.png',
        textColor: 'rgba(234,236,230,255)',
        textFont: `'Bad Script', cursive`,
        textSize: 40,
    }
}

//Создание и вставка html-тега
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

// Создание блока с описанием
function createSettingsBlock( description){
    const tab = createTag(['selectBtnStyle', 'flexAround', 'flexCol'], 'div', settingsTag)
    const desc = createTag('descriptionTag', 'p', tab)
    desc.innerText = description
    return tab
}

//Создание блоков для изображения
const imageTag = createTag('imgTag', 'div', pluginBase)
const imgg = createTag('img', 'img', imageTag)
const imgText = createTag('imgText', 'h3', imageTag)
imgText.innerText = pluginData.startText
imgText.style.color = pluginData.textColors[0]
imgText.style.textShadow = 
`
0px 0px 4px ${pluginData.textColors[0]},
0px 0px 20px ${pluginData.textColors[0]},
0px 0px 40px ${pluginData.textColors[0]}
`
imgg.src = pluginData.images[1]

//Создание блоков для настроек
const settingsTag = createTag(['settingsTag','flexCenter'], 'div', pluginBase)

//Ввод текста
const inputTextDiv = createSettingsBlock('Текст')
const inputText = createTag('inputStyle', 'input', inputTextDiv)
inputText.type='text'
inputText.placeholder = 'Введите ваш текст'

//Выбор шрифта
const selectFontDiv = createSettingsBlock('Шрифт')
const selectFont = createTag([ 'flexAround'], 'div', selectFontDiv)
pluginData.textFonts.map((value, index)=>{
    const fontOption = createTag(['selectBtnStyleBtn', 'flexCenter', 'darkBtn'], 'btn', selectFont)
    fontOption.innerText = index+1
    fontOption.value = value
})
selectFont.addEventListener('click', (e)=>{
    const value = e.target.value
    if(value){
        imgText.style.fontFamily = value
   }
   
    
})

//Выбор размера
const selectSizeDiv = createSettingsBlock('Размер текста')
const selectSize = createTag('sliderCustom', 'input', selectSizeDiv)
selectSize.type = 'range'
selectSize.min = pluginData.textSizes.min
selectSize.max = pluginData.textSizes.max
selectSize.step = pluginData.textSizes.step
selectSize.value = 40
imgText.style.fontSize = 40+'px'
selectSize.addEventListener('input', (e)=>{
    const value = e.target.value
    imgText.style.fontSize = value+'px'
})

//Выбор цвета
const selectColorDiv = createSettingsBlock('Цвет')
const selectColor = createTag(['flexAround'], 'div', selectColorDiv)
pluginData.textColors.map((value)=>{
const btn = createTag('selectBtnStyleBtn', 'button', selectColor)
    btn.value = value
    btn.style.backgroundColor = value
    btn.addEventListener('click', (e)=>{
        const value = e.target.value
        imgText.style.color =value
        let rgb = value.replace(/[^\d,]/g, '').split(',').map((int)=>{
            return parseInt(int);
        })
        function ligther(n, i){
            let color = rgb[n]
            if(color-(10*i)<=255-10*i){
                    return color+(10*i)
            }
            else return color
           
        }
        imgText.style.textShadow = (`
        0px 0px 4px rgba(${ligther(0, 1)}, ${ligther(1, 1)}, ${ligther(2, 1)},0.7), 
        0px 0px 20px rgba(${ligther(0, 2)}, ${ligther(1, 2)}, ${ligther(2, 2)},0.7),
        0px 0px 40px rgba(${ligther(0, 3)}, ${ligther(1, 3)}, ${ligther(2, 3)},0.7)
        `).toString()
        
    })
})

//Выбор изображения
const selectImgDiv = createSettingsBlock('Фон')
const selectImg = createTag(['flexAround'], 'div', selectImgDiv)
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
    
    imgText.innerText =value
})




