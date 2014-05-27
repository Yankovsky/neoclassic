angular.module('neoclassicApp')
.factory 'seo', ($http) ->
    path = null
    seoData = {}
    defaultSeoData =
      title: 'Проект Дмитрия Янковского "NeoClassic" - cover в стиле classical crossover.'
      description: 'Официальный сайт проекта Дмитрия Янковского "NeoClassic". Cover версии в стиле classical crossover - соединение поп, рок хитов, с шедеврами классической музыки. Исполняет оперный певец Дмитрий Янковский в сопровождении струнного квинтета "Corelli".'
      keywords: 'Проект Дмитрия Янковского "NeoClassic", NeoClassic, NeoClassic.pro, Дмитрий Янковский, Dmitriy Yankovskiy, Noviegolosa.ru, Проект, Новые голоса, cover, кавер, opera, опера, оперный, singer, певец, солист, вокалист, артист, Геликон, Мюзикл, Красавица и Чудовище, MAMMA MIA!, crossover, кроссовер, classical crossover, классический, живой звук, Live, Sound, новая классика, синтез, совмещение, "Beauty and the Beast", Стейдж Энтертейнмент, Beast, Stage Entertainment, баритон, baritone, квинтет, квинтет Corelli, обработка, аранжировка, музыка'
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