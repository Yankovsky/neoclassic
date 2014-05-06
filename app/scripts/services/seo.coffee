angular.module('neoclassicApp')
.factory 'seo', ($http) ->
    path = null
    seoData = {}
    defaultSeoData =
      title: 'Проект NeoClassic'
      description: 'Официальный сайт проекта Дмитрия Янковского "NeoClassic" - NeoClassic.pro'
      keywords: 'Проект Дмитрия Янковского "NeoClassic", NeoClassic, NeoClassic.pro, Дмитрий Янковский, Dmitriy Yankovskiy, Noviegolosa.ru, Проект, Новые голоса, cover, кавер, opera, опера, singer, певец, солист, вокалист, артист, Геликон, Мюзикл,Красавица и Чудовище, MAMMA MIA!, crossover, кроссовер, classicalcrossover, классический, живой звук, Live, Sound, новая классика, синтез, совмещение, "Beauty and the Beast", Стейдж Энтертейнмент, Beast, Stage Entertainment, баритон, baritone, квинтет, квинтет Corelli, обработка, аранжировка, музыка, опера'
    get: ->
      if _.isEmpty seoData then defaultSeoData else seoData
    set: (newPath) ->
      newPath = newPath.substr(1) || 'homepage'
      if path != newPath
        path = newPath
        $http.get('/api/seo/' + path)
        .success (newSeoData) ->
          seoData = newSeoData
        .error (data, status) ->
          if status is 404
            seoData = {}
    save: (newSeoData) ->
      $http.put('/api/seo/' + path, newSeoData)