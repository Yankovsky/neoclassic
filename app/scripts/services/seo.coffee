angular.module('neoclassicApp')
.factory 'seo', () ->
    seoData = {}
    title: ->
      seoData.title || 'Проект NeoClassic'
    description: ->
      seoData.description || 'Официальный сайт проекта Дмитрия Янковского "NeoClassic" - NeoClassic.pro'
    keywords: ->
      seoData.keywords || 'Проект Дмитрия Янковского "NeoClassic", NeoClassic, NeoClassic.pro, Дмитрий Янковский, Dmitriy Yankovskiy, Noviegolosa.ru, Проект, Новые голоса, cover, кавер, opera, опера, singer, певец, солист, вокалист, артист, Геликон, Мюзикл,Красавица и Чудовище, MAMMA MIA!, crossover, кроссовер, classicalcrossover, классический, живой звук, Live, Sound, новая классика, синтез, совмещение, "Beauty and the Beast", Стейдж Энтертейнмент, Beast, Stage Entertainment, баритон, baritone, квинтет, квинтет Corelli, обработка, аранжировка, музыка, опера'
    set: (newSeoData) ->
      seoData = newSeoData