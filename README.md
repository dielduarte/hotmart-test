## Buid do teste
Para rodar o teste atente-se as intalações corretas:


```
  gem install compass
  gem install sass-globbing
  npm install
  gulp
```

O processo acima gerará uma pasta chamada `build` aonde se encontra o projeto final para produção e subirá com o `browsersync` um server na porta `8080`.


##Considerações importantes
JADE - Template html

SASS  - pre processador

BEM   - nomenclarura

ITCSS - arquitetura css

GULP - task runner

NPM - packages managers

GIT FLOW

###gulp nocache
A task `gulp nocache` é utilizada em alguns projetos com processo de CI (continuos integration) para burlar o cache quando novas features entram em produção.

A task encherga os scripts e css importados na index da nossa aplicação, gera um novo arquivo renomeandos com uma hash e substitui a chamada na index, burlando qualquer tipo de cache feito pelo browser do client.

### Arquitetura baseada em components
Adotei no teste uma arquiterura front end baseada em components, não foi usado no mesmo nenhum framework/lib javascript mas com essa arquitetura nosso template está preparado para ser integrado a qualquer lib/framework, react, angular 1.5+, vue.js entre outros...

Abaixo envio uma imagem do processo de criação dos components baseados no layout enviado para o teste:

* Arquitetura baseada em components

![](README_IMAGES/components.png)

[abrir imagem](https://raw.githubusercontent.com/dielduarte/hotmart-test/develop/README_IMAGES/components.png?token=AFaqN-fdDn3lSjQu1Ud9Em1iFF-ofh1Gks5XETYgwA%3D%3D)

Atualmente trabalho com angular 1.5 aonde foi adotado um novo tipo de directiva chamada components e também um novo modulo de routes baseado em components, dessa forma atualizar nosso app para a versão 2 não será problema. Também estudo react mas não cheguei a trabalhar com ele no dia a dia.

Seguem dois exemplos recentes de apps simples feitos por mim, com angular e react respectivamente:

[http://dielduarte.github.io/angular-foursquare-integration-example/#/](http://dielduarte.github.io/angular-foursquare-integration-example/#/)

[http://dielduarte.github.io/react-netflixroulette/](http://dielduarte.github.io/react-netflixroulette/)




####contato
magdiel.kesller@gmail.com
(31) 99226-3265
github.com/dielduarte
