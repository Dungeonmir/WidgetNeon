// Точка монтирования
const pluginBase = document.getElementById("neonContructorId");

// Стили
const styles = createTag("", "style", pluginBase);
styles.innerHTML = `



`; // скопировать стили сюда

//<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js" defer></script>
const scriptHTML2Canvas = createTag('', 'script', pluginBase)
scriptHTML2Canvas.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js'


pluginBase.classList.add("flexCenter");
pluginBase.classList.add("pluginBase");

//Данные виджета
const pluginData = {
  textColors: [
    "rgba(234,236,230,255)",
    "rgba(253,212,131,255)",
    "rgba(255,159,28,255)",
    "rgba(248,5,46,255)",
    "rgba(138,43,226, 255)",
    "rgba(248,1,186,255)",
    "rgba(6,205,248,255)",
    "rgba(4,1,255,255)",
    "rgba(3,231,71,255)",
  ],
  textFonts: [
    `Rosa Marena`,
    `LD Slender`,
    `Citrica Cyrillic`,
    `Veles Regular`,
    `'Nickainley', sans-serif`,
    `'Blogger Sans', sans-serif`,
    `American Retro`,
    `Love Birch`,
    `'Comfortaa', cursive`,
  ],
  textSizes: {
    min: 12,
    max: 80,
    step: 1,
  },
  textScale: {
    min: 1,
    max: 6,
    step: 0.5,
  },
  paragraphSettings: {
    lineHeight: {
      icon: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><path class="cls-1" d="M6,10V5M6,5,4,7M6,5,8,7M6,14v5m0,0,2-2M6,19,4,17M12,7h8m0,5H12m0,5h8" transform="translate(-3 -4)"/></svg>`,
      min: 100,
      max: 170,
      step: 5,
    },
    lineSymbolSpacing: {
      icon: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17.53"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><path class="cls-1" d="M10,17.76H5m0,0,2,2m-2-2,2-2m7,2h5m0,0-2-2m2,2-2,2M6,4.24H18m0,3.6H6m0,3.6H18" transform="translate(-4 -3.24)"/></svg>`,
      min: -2,
      max: 120,
      step: 0.5,
    },
    textAlign: [
      {
        icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>text-align-left</title>
                <desc>Created with sketchtool.</desc>
                <g id="text-edit" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="text-align-left" fill="#000000">
                        <path d="M19,7 L5,7 C4.44771525,7 4,6.55228475 4,6 C4,5.44771525 4.44771525,5 5,5 L19,5 C19.5522847,5 20,5.44771525 20,6 C20,6.55228475 19.5522847,7 19,7 Z M15,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 L15,9 C15.5522847,9 16,9.44771525 16,10 C16,10.5522847 15.5522847,11 15,11 Z M19,15 L5,15 C4.44771525,15 4,14.5522847 4,14 C4,13.4477153 4.44771525,13 5,13 L19,13 C19.5522847,13 20,13.4477153 20,14 C20,14.5522847 19.5522847,15 19,15 Z M15,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 L15,17 C15.5522847,17 16,17.4477153 16,18 C16,18.5522847 15.5522847,19 15,19 Z" id="Shape"></path>
                    </g>
                </g>
                </svg>`,
        cssStyle: "start",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g id="surface1">
                <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 3 6.375 C 3 5.960938 3.335938 5.625 3.75 5.625 L 20.25 5.625 C 20.664062 5.625 21 5.960938 21 6.375 C 21 6.789062 20.664062 7.125 20.25 7.125 L 3.75 7.125 C 3.335938 7.125 3 6.789062 3 6.375 Z M 6 9.375 C 5.585938 9.375 5.25 9.710938 5.25 10.125 C 5.25 10.539062 5.585938 10.875 6 10.875 L 18 10.875 C 18.414062 10.875 18.75 10.539062 18.75 10.125 C 18.75 9.710938 18.414062 9.375 18 9.375 Z M 20.25 13.125 L 3.75 13.125 C 3.335938 13.125 3 13.460938 3 13.875 C 3 14.289062 3.335938 14.625 3.75 14.625 L 20.25 14.625 C 20.664062 14.625 21 14.289062 21 13.875 C 21 13.460938 20.664062 13.125 20.25 13.125 Z M 18 16.875 L 6 16.875 C 5.585938 16.875 5.25 17.210938 5.25 17.625 C 5.25 18.039062 5.585938 18.375 6 18.375 L 18 18.375 C 18.414062 18.375 18.75 18.039062 18.75 17.625 C 18.75 17.210938 18.414062 16.875 18 16.875 Z M 18 16.875 "/>
                </g>
                </svg>`,
        cssStyle: "center",
      },
      {
        icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
                <title>text-align-right</title>
                <desc>Created with sketchtool.</desc>
                <g id="text-edit" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="text-align-right" fill="#000000">
                        <path d="M19,7 L5,7 C4.44771525,7 4,6.55228475 4,6 C4,5.44771525 4.44771525,5 5,5 L19,5 C19.5522847,5 20,5.44771525 20,6 C20,6.55228475 19.5522847,7 19,7 Z M19,11 L9,11 C8.44771525,11 8,10.5522847 8,10 C8,9.44771525 8.44771525,9 9,9 L19,9 C19.5522847,9 20,9.44771525 20,10 C20,10.5522847 19.5522847,11 19,11 Z M19,15 L5,15 C4.44771525,15 4,14.5522847 4,14 C4,13.4477153 4.44771525,13 5,13 L19,13 C19.5522847,13 20,13.4477153 20,14 C20,14.5522847 19.5522847,15 19,15 Z M19,19 L9,19 C8.44771525,19 8,18.5522847 8,18 C8,17.4477153 8.44771525,17 9,17 L19,17 C19.5522847,17 20,17.4477153 20,18 C20,18.5522847 19.5522847,19 19,19 Z" id="Shape"></path>
                    </g>
                </g>
                </svg>`,
        cssStyle: "end",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g id="surface1">
                <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 3 6.375 C 3 5.960938 3.335938 5.625 3.75 5.625 L 20.25 5.625 C 20.664062 5.625 21 5.960938 21 6.375 C 21 6.789062 20.664062 7.125 20.25 7.125 L 3.75 7.125 C 3.335938 7.125 3 6.789062 3 6.375 Z M 20.25 9.375 L 3.75 9.375 C 3.335938 9.375 3 9.710938 3 10.125 C 3 10.539062 3.335938 10.875 3.75 10.875 L 20.25 10.875 C 20.664062 10.875 21 10.539062 21 10.125 C 21 9.710938 20.664062 9.375 20.25 9.375 Z M 20.25 13.125 L 3.75 13.125 C 3.335938 13.125 3 13.460938 3 13.875 C 3 14.289062 3.335938 14.625 3.75 14.625 L 20.25 14.625 C 20.664062 14.625 21 14.289062 21 13.875 C 21 13.460938 20.664062 13.125 20.25 13.125 Z M 20.25 16.875 L 3.75 16.875 C 3.335938 16.875 3 17.210938 3 17.625 C 3 18.039062 3.335938 18.375 3.75 18.375 L 20.25 18.375 C 20.664062 18.375 21 18.039062 21 17.625 C 21 17.210938 20.664062 16.875 20.25 16.875 Z M 20.25 16.875 "/>
                </g>
                </svg>
                `,
        cssStyle: "justify",
      },
    ],
    textDirection: [
      {
        icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>ic_fluent_text_direction_horizontal_ltr_24_regular</title>
                <desc>Created with Sketch.</desc>
                <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="ic_fluent_text_direction_horizontal_ltr_24_regular" fill="#212121" fill-rule="nonzero">
                        <path d="M18.6961816,14.6470802 L18.7803,14.7197 L20.7803,16.7197 C21.0465727,16.9859727 21.0707793,17.402576 20.8529198,17.6961816 L20.7803,17.7803 L18.7803,19.7803 C18.4874,20.0732 18.0126,20.0732 17.7197,19.7803 C17.4534273,19.5140273 17.4292207,19.097424 17.6470802,18.8038184 L17.7197,18.7197 L18.4393,18 L3.75,18 C3.33579,18 3,17.6642 3,17.25 C3,16.8703167 3.28215687,16.5565111 3.64823019,16.5068469 L3.75,16.5 L18.4393,16.5 L17.7197,15.7803 C17.4268,15.4874 17.4268,15.0126 17.7197,14.7197 C17.9859727,14.4534273 18.402576,14.4292207 18.6961816,14.6470802 Z M8.15104,3.36975 L8.20152,3.47487 L11.9479,12.9754 C12.0999,13.3607 11.9107,13.7962 11.5253,13.9482 C11.1721,14.0875 10.7767,13.9401 10.5962,13.6178 L10.5525,13.5256 L9.5562,10.9999996 L5.4432,10.9999996 L4.44768,13.5209 C4.30809,13.874 3.93033,14.0621 3.57164,13.9737 L3.47447,13.9426 C3.12137,13.803 2.93328,13.4253 3.02168,13.0666 L3.05272,12.9694 L6.80633,3.47427 C7.04172,2.87883 7.84884,2.84415 8.15104,3.36975 Z M18.6961816,5.14705264 L18.7803,5.21967 L20.7803,7.21967 C21.0465727,7.48593364 21.0707793,7.90260223 20.8529198,8.19621222 L20.7803,8.28033 L18.7803,10.2803 C18.4874,10.5732 18.0126,10.5732 17.7197,10.2803 C17.4534273,10.0140636 17.4292207,9.59739752 17.6470802,9.30378775 L17.7197,9.21967 L18.4393,8.5000025 L12.75,8.5000025 C12.3358,8.5000025 12,8.16421 12,7.75 C12,7.3703075 12.2821653,7.05651168 12.6482323,7.00684913 L12.75,7.0000025 L18.4393,7.0000025 L17.7197,6.28033 C17.4268,5.98744 17.4268,5.51256 17.7197,5.21967 C17.9859727,4.95340636 18.402576,4.92920058 18.6961816,5.14705264 Z M7.50294,5.79226 L6.0362,9.5 L8.9642,9.5 L7.50294,5.79226 Z" id="🎨-Color"></path>
                    </g>
                </g>
                </svg>
                `,
        horizontal: true,
      },
      {
        icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>ic_fluent_text_direction_vertical_24_regular</title>
                        <desc>Created with Sketch.</desc>
                        <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="ic_fluent_text_direction_vertical_24_regular" fill="#212121" fill-rule="nonzero">
                                <path d="M16.25,14 C16.6296833,14 16.9434889,14.2821653 16.9931531,14.6482323 L17,14.75 L17,18.4393 L17.7197,17.7197 C18.0126,17.4268 18.4874,17.4268 18.7803,17.7197 C19.0465727,17.9859727 19.0707793,18.402576 18.8529198,18.6961816 L18.7803,18.7803 L16.7803,20.7803 C16.5140273,21.0465727 16.097424,21.0707793 15.8038184,20.8529198 L15.7197,20.7803 L13.7197,18.7803 C13.4268,18.4874 13.4268,18.0126 13.7197,17.7197 C13.9859727,17.4534273 14.402576,17.4292207 14.6961816,17.6470802 L14.7803,17.7197 L15.5,18.4393 L15.5,14.75 C15.5,14.3358 15.8358,14 16.25,14 Z M6.75,3 C7.16421,3 7.5000025,3.33579 7.5000025,3.75 L7.5000025,18.4393 L8.21967,17.7197 C8.51256,17.4268 8.98744,17.4268 9.28033,17.7197 C9.57322,18.0126 9.57322,18.4874 9.28033,18.7803 L7.28033,20.7803 C6.98744,21.0732 6.51256,21.0732 6.21967,20.7803 L4.21967,18.7803 C3.92678,18.4874 3.92678,18.0126 4.21967,17.7197 C4.51256,17.4268 4.98744,17.4268 5.28033,17.7197 L6.0000025,18.4393 L6.0000025,3.75 C6.0000025,3.33579 6.33579,3 6.75,3 Z M16.651,3.36975 L16.7015,3.47487 L20.4479,12.9754 C20.5999,13.3607 20.4107,13.7962 20.0253,13.9482 C19.6721,14.0875 19.2767,13.9401 19.0962,13.6178 L19.0525,13.5256 L18.0562,10.9999996 L13.9432,10.9999996 L12.9477,13.5209 C12.8081,13.874 12.4303,14.0621 12.0716,13.9737 L11.9745,13.9426 C11.6214,13.803 11.4333,13.4253 11.5217,13.0666 L11.5527,12.9694 L15.3063,3.47427 C15.5417,2.87883 16.3488,2.84415 16.651,3.36975 Z M16.0029,5.79226 L14.5362,9.5 L17.4642,9.5 L16.0029,5.79226 Z" id="🎨-Color"></path>
                            </g>
                        </g>
                        </svg>`,
        horizontal: false,
      },
    ],
  },
  saveButton: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
		       <path d="M506.499,158.874L353.139,5.514c-6.226-6.227-13.039-5.487-18.226-5.487c-13.189,0-308.271,0-316.168,0    C8.4,0.027,0.014,8.414,0.014,18.758v474.511C0.014,503.613,8.4,512,18.744,512c4.503,0,464.273,0,474.511,0    c10.344,0,18.731-8.386,18.731-18.731v-321.15C511.986,167.151,510.012,162.386,506.499,158.874z M152.528,37.489h163.654v102.687    H152.528V37.489z M379.709,474.538H132.292v-73.985h247.416V474.538z M379.709,363.092h-0.001H132.292v-73.985h247.416V363.092z     M474.525,474.538h-57.356V270.376c0-10.344-8.386-18.731-18.731-18.731H113.562c-10.344,0-18.731,8.386-18.731,18.731v204.162    H37.475V37.489h77.591v121.417c0,10.344,8.386,18.731,18.731,18.731h201.115c10.344,0,18.731-8.386,18.731-18.731v-99.91    l120.882,120.882V474.538z" fill="#FFFFFF"/>
           </svg>`,
  },
  startText: "Ваш текст",
  currentData: {
    textColor: "rgba(234,236,230,255)",
    textFont: `'Bad Script', cursive`,
    textSize: 40,
    textSupport: [120, 50],
    realityScale: 2,
  },
};



//Создание и вставка html-тега
function createTag(tagName, tagType = "div", parentTag) {
  const tag = document.createElement(tagType);
  if (tagName != "") {
    if (Array.isArray(tagName)) {
      tagName.map((tagName) => {
        tag.classList.add(tagName);
      });
    } else tag.classList.add(tagName);
  }
  parentTag.appendChild(tag);
  return tag;
}

// Создание блока с описанием
function createSettingsBlock(description) {
  const tab = createTag(
    ["selectBtnStyle", "flexAround", "flexCol"],
    "div",
    settingsTag
  );
  const desc = createTag("descriptionTag", "p", tab);
  desc.innerText = description;
  return tab;
}

//Создание блоков для изображения
const imageTag = createTag(["imgTag"], "div", pluginBase);
imageTag.id = "imageTag";
const imgBackground = createTag("img", "div", imageTag);
const imgTextDiv = createTag(["imgText", "flexCenter"], "div", imageTag);
const imgText = createTag("", "p", imgTextDiv);
imgText.innerText = pluginData.startText;
imgText.style.color = pluginData.textColors[0];
imgText.style.textShadow = `
0px 0px 4px ${pluginData.textColors[0]},
0px 0px 20px ${pluginData.textColors[0]},
0px 0px 40px ${pluginData.textColors[0]}
`;

imgText.addEventListener("click", () => {
  inputText.focus();
});

//Создание блоков для настроек
const settingsTag = createTag(["settingsTag", "flexCenter"], "div", pluginBase);

// Создание кнопки сохранения скриншота текста
const imageSaveBtn = createTag(["saveBtn"], "button", imageTag);
//const canvasSave = createTag("", "canvas", pluginBase);
//canvasSave.width = 500;
//canvasSave.height = 500;
imageSaveBtn.innerHTML = pluginData.saveButton.icon;

imageSaveBtn.addEventListener("click", (e) => {
  imageSaveBtn.style.visibility = "hidden";
  btnToRect.style.visibility = 'hidden'
  let linkForSafety = document.createElement("a");
  linkForSafety.href = "#imageTag";
  linkForSafety.click();

  imgTextDiv.style.margin = '150px'
  imgTextDiv.classList.remove("imgTextBoxShadow");
  imgTextDiv.classList.add('imgTextBorder')

  //saving
  html2canvas(imageTag, { scale: 1, width: 700, height: 700, backgroundColor: "#141615", }).then(
    function (canvas) {
      imgTextDiv.style.margin = ''

      imgTextDiv.classList.remove("imgTextBorder");
      imgTextDiv.classList.add('imgTextBoxShadow')

      let link = document.createElement("a");
      link.download = `${imgText.innerText.substring(0, 20)}_${window
        .getComputedStyle(imgText)
        .fontFamily.substring(0, 20)}.jpg`;
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    });

  imageSaveBtn.style.visibility = "visible";
  btnToRect.style.visibility = 'visible'
});

//Ввод текста
const inputTextDiv = createSettingsBlock("Текст");
const inputText = createTag("inputStyle", "input", inputTextDiv);
inputText.type = "text";
inputText.placeholder = "Введите ваш текст";

//Обновление введенного текста
inputText.addEventListener("input", (e) => {
  let value = e.target.value;
  imgText.innerHTML = value;

  updateTextSupportDimensions();
});

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputText.value = inputText.value + "<br/>";
    imgText.value = inputText.value + "<br/>";
  }
});

//Выбор шрифта
const selectFontDiv = createSettingsBlock("Шрифт");
const selectFont = createTag(["flexAround"], "div", selectFontDiv);
pluginData.textFonts.map((value, index) => {
  const fontOption = createTag(
    ["selectBtnStyleBtn", "flexCenter", "darkBtn"],
    "btn",
    selectFont
  );
  fontOption.innerText = index + 1;
  fontOption.value = value;
});
selectFont.addEventListener("click", (e) => {
  const value = e.target.value;
  if (value) {
    imgText.style.fontFamily = value;
  }
  updateTextSupportDimensions();
});

//Выбор размера текста
const selectSizeDiv = createSettingsBlock("Размер текста");
const selectSize = createTag("sliderCustom", "input", selectSizeDiv);
selectSize.type = "range";
selectSize.min = pluginData.textSizes.min;
selectSize.max = pluginData.textSizes.max;
selectSize.step = pluginData.textSizes.step;
selectSize.value = 40;
imgText.style.fontSize = 40 + "px";
selectSize.addEventListener("input", (e) => {
  const value = e.target.value;
  imgText.style.fontSize = value + "px";
  resetDimensions();
  updateTextSupportDimensions();
});
//Выбор масштаба
const selectScaleDiv = createSettingsBlock("Масштаб");
const selectScale = createTag("sliderCustom", "input", selectScaleDiv);
selectScale.type = "range";
selectScale.min = pluginData.textScale.min;
selectScale.max = pluginData.textScale.max;
selectScale.step = pluginData.textScale.step;
selectScale.value = 2;
selectScale.addEventListener("input", (e) => {
  pluginData.currentData.realityScale = e.target.value;
  updateTextSupportDimensions();
});

//Выбор цвета
const selectColorDiv = createSettingsBlock("Цвет");
const selectColor = createTag(["flexAround"], "div", selectColorDiv);
pluginData.textColors.map((value) => {
  const btn = createTag("selectBtnStyleBtn", "button", selectColor);
  btn.value = value;
  btn.style.backgroundColor = value;
  btn.addEventListener("click", (e) => {
    updateTextSupportDimensions();

    const value = e.target.value;
    imgText.style.color = "white";
    let rgb = value
      .replace(/[^\d,]/g, "")
      .split(",")
      .map((int) => {
        return parseInt(int);
      });
    function ligther(n, i) {
      let color = rgb[n];
      if (color - 10 * i <= 255 - 10 * i) {
        return color + 10 * i;
      } else return color;
    }
    imgText.style.textShadow = `
        0px 0px 4px rgba(${ligther(0, 1)}, ${ligther(1, 1)}, ${ligther(2, 1)},255),
        0px 0px 20px rgba(${ligther(0, 2)}, ${ligther(1, 2)}, ${ligther(
      2,
      2
    )},255),
        0px 0px 40px rgba(${ligther(0, 3)}, ${ligther(1, 3)}, ${ligther(
      2,
      3
    )},255)
        `.toString();
  });
});

// Подложка
imgTextDiv.classList.add("imgTextBoxShadow");
const textSupportHeightBorder = createTag(
  ["supportStyleHeightBorder", "border1px"],
  "div",
  imgTextDiv
);
const textSupportWidthBorder = createTag(
  ["supportStyleWidthBorder", "border1px"],
  "div",
  imgTextDiv
);
const textSupportWidth = createTag("supportStyleHeight", "div", imgTextDiv);
const textSupportHeight = createTag("supportStyleWidth", "div", imgTextDiv);
const textSupportWidthInput = createTag(
  "supportStyleWidthInput",
  "input",
  imgTextDiv
);
textSupportWidthInput.type = "number";

const textSupportHeightInput = createTag(
  "supportStyleHeightInput",
  "input",
  imgTextDiv
);

const focusInHandler = (e) => {
  if (e.target.classList.contains("supportStyleHeight")) {
    textSupportHeightInput.style.visibility = "visible";
    textSupportHeightInput.focus();
    textSupportHeightInput.value = null;
  } else {
    textSupportWidthInput.style.visibility = "visible";
    textSupportWidthInput.focus();
    textSupportWidthInput.value = null;
  }
};
const focusOutHandler = (e) => {
  if (e.target.value !== "") {
    const realityScale = pluginData.currentData.realityScale;
    if (e.target.classList.contains("supportStyleHeightInput")) {
      imgTextDiv.style.width = e.target.value / realityScale + "px";
    } else {
      imgTextDiv.style.height = e.target.value / realityScale + "px";
    }
    updateTextSupportDimensions();
  }

  e.target.style.visibility = "hidden";
};

textSupportWidth.addEventListener("click", focusInHandler);
textSupportWidthInput.addEventListener("focusout", focusOutHandler);
textSupportHeight.addEventListener("click", focusInHandler);
textSupportHeightInput.addEventListener("focusout", focusOutHandler);
textSupportHeightInput.type = "number";

//Кнопка для смены вида подложки
const btnToRect = createTag(['btnToCircle', 'btnRectCircle'], 'div', imgTextDiv)
btnToRect.addEventListener('click', (() => {
  if (btnToRect.classList.contains('btnToRect')) {
    btnToRect.classList.remove('btnToRect')
    btnToRect.classList.add('btnToCircle')

    imgTextDiv.style.borderRadius = '0px'
    imgTextDiv.style.height = ''
    imgTextDiv.style.width = ''
    updateTextSupportDimensions()
  }
  else {
    btnToRect.classList.remove('btnToCircle')
    btnToRect.classList.add('btnToRect')

    imgTextDiv.style.borderRadius = '50%'
    imgTextDiv.style.height = window.getComputedStyle(imgTextDiv).width
    imgTextDiv.style.width = window.getComputedStyle(imgTextDiv).width
    updateTextSupportDimensions()
  }
}))
//Действия после загрузки DOM дерева
window.addEventListener("DOMContentLoaded", (event) => {
  updateTextSupportDimensions();
});

//Обновление размера подложки
function updateTextSupportDimensions() {
  const realityScale = pluginData.currentData.realityScale;
  let w, h;
  w = imgTextDiv.offsetWidth;
  h = imgTextDiv.offsetHeight;
  w *= realityScale;
  h *= realityScale;
  textSupportWidth.innerText = w + "мм";
  textSupportHeight.innerText = h + "мм";
}

//Сброс указанных размеров подложки на автоматические
function resetDimensions() {
  imgTextDiv.style.width = "";
  imgTextDiv.style.height = "";
}

// Настройки абзаца
const selectParaSettingsDiv = createSettingsBlock("Абзац");
const selectParaSettings = createTag(
  ["flexAround"],
  "div",
  selectParaSettingsDiv
);
selectParaSettingsDiv.style.gap = "5px";
selectParaSettings.style.gap = "5px";

//Высота линии
const rangeLineHeightDiv = createTag(
  ["flexInline", "svgIconInside"],
  "div",
  selectParaSettings
);
const rangeLineHeightSvgDiv = createTag(
  ["m-2", "flexCenter"],
  "div",
  rangeLineHeightDiv
);
rangeLineHeightSvgDiv.innerHTML = pluginData.paragraphSettings.lineHeight.icon;
const rangeLineHeight = createTag("sliderCustom", "input", rangeLineHeightDiv);
rangeLineHeight.type = "range";
imgText.style.lineHeight = "110%";
rangeLineHeight.min = pluginData.paragraphSettings.lineHeight.min;
rangeLineHeight.max = pluginData.paragraphSettings.lineHeight.max;
rangeLineHeight.step = pluginData.paragraphSettings.lineHeight.step;
rangeLineHeight.addEventListener("input", (e) => {
  const value = e.target.value;
  imgText.style.lineHeight = value + "%";
  resetDimensions();
  updateTextSupportDimensions();
});

//Расстояние между символами
const rangeSymbolWidthDiv = createTag(
  ["flexInline", "svgIconInside"],
  "div",
  selectParaSettings
);
const rangeSymbolWidthSvgDiv = createTag(
  ["m-2", "flexCenter"],
  "div",
  rangeSymbolWidthDiv
);
rangeSymbolWidthSvgDiv.innerHTML =
  pluginData.paragraphSettings.lineSymbolSpacing.icon;
const rangeSybmbolWidth = createTag(
  "sliderCustom",
  "input",
  rangeSymbolWidthDiv
);
rangeSybmbolWidth.type = "range";
rangeSybmbolWidth.min = pluginData.paragraphSettings.lineSymbolSpacing.min;
rangeSybmbolWidth.max = pluginData.paragraphSettings.lineSymbolSpacing.max;
rangeSybmbolWidth.step = pluginData.paragraphSettings.lineSymbolSpacing.step;
rangeSybmbolWidth.addEventListener("input", (e) => {
  const value = e.target.value;
  imgText.style.letterSpacing = value + "px";
  resetDimensions();
  updateTextSupportDimensions();
});

const textSettiingsBtns = createTag("flexAround", "div", selectParaSettings);
textSettiingsBtns.style.width = "100%";
//Выравнивание текста
const textAlignDiv = createTag(["flexInline", 'svgIconInside'], "div", textSettiingsBtns);
pluginData.paragraphSettings.textAlign.map((data) => {
  const btn = createTag(
    ["selectBtnStyleBtn", "flexCenter"],
    "div",
    textAlignDiv
  );
  btn.innerHTML = data.icon;
  btn.value = data.cssStyle;

  btn.addEventListener("click", (e) => {
    let value = e.target.value;
    imgText.style.textAlign = value;

    updateTextSupportDimensions();
  });
});

// Вертикальный текст
const textDirectionDiv = createTag(["flexInline"], "div", textSettiingsBtns);
pluginData.paragraphSettings.textDirection.map((data) => {
  const btn = createTag(
    ["selectBtnStyleBtn", "flexCenter"],
    "div",
    textDirectionDiv
  );
  btn.innerHTML = data.icon;
  btn.value = data.horizontal;
  btn.addEventListener("click", (e) => {
    let value = e.target.value;
    if (value === false) {
      imgText.classList.add("verticalText");
    } else {
      imgText.classList.remove("verticalText");
    }
    updateTextSupportDimensions();
  });
});
