# Документация по развёртыванию и сборки проекта
## Сборка осуществляется после развёртывания проекта

###  Развёртывание
1. [Необходимо скачать и установить актуальную версию Node.js Long Term Support (LTS)](https://nodejs.org/en/)
2. [Клонировать проект с файлами из GitLab](http://gitlab.rosoperator.ru/small-projects/pona-ico)
3. Открыть склонированный проект, перейти на ветку dev и выполнить в консоли команду npm install
4. Выполнить в консоли команду bower install

### Сборка
#### После развёртывания проекта в консоли можно выполнить следующие команды:
* gulp build - создаст в проекте каталог build, выполнит сборку проекта
 и все файлы для публикации сайта будут находиться в build
* gulp serve - соберёт проект, создаст локальный хостинг и отобразит собранный проект (из каталога build)