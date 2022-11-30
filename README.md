# WidgetNeon
[![Интерфейс конструктора](https://i.ibb.co/4KD071B/Img-For-Github-Repo-1.png)](https://dungeonmir.github.io/WidgetNeon/)
Простой плагин, для создания шаблона неоновой вывески.

## Зависимости
Для сохранения полученной картинки была использована [библиотека html2canvas](https://github.com/niklasvh/html2canvas)


Специально для [neones.ru](https://neones.ru/)

## Как использовать
1. Сделать форк репозитория
![Сделать форк репозитория](https://i.ibb.co/DW5XnCz/fork.png)
2. В ветке main изменить код, после сохранения изменений, очистить файл build/neonScript.js, скопировать содержимое файла script.js в очищенный build/neonScript.js , на 8 строчку вставить содержимое styles.css и fonts.css
![Вставить css сюда](https://i.ibb.co/6NGPb8c/pastehere.png)
Запушить на гитхаб.
3. Скопировать build/neonScript.js в любое место на компьютере, открыть ветку new-empty-branch и заменить файл, после пуша, перейти в релизы (Releases) и добавить новый тег - 1.0.3 или следующий за ним, обязательно на ветке **new-empty-branch**, создать релиз с новым тегом
4. Сделать ссылку по шаблону
https://cdn.jsdelivr.net/gh/{GITHUB_USERNAME}/{ИмяРепозитория}@{Версия}/{NeonScipt.js}
Пример: https://cdn.jsdelivr.net/gh/Dungeonmir/WidgetNeon@1.0.2/neonScript.js
5. Полученную ссылку вставить в тег скрипта и следующий код скопировать в тильду
```html
<div id="neonContructorId">
<script scr="ПолученнаяСсылка.js"></script>
```

## Известные проблемы
* Так как в файле fonts.css содержаться очень длинные строки, возможно стоит перезагрузить редактор кода после работы с данными из этого файла
* Плохой код
