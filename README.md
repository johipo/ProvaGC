# Prova 01 de Gerência de Configuração

### Questão 1:

1. No Docker, qual a diferença entre container e imagens?
   Resposta: A imagem é uma aplicação estatica na qual ela possui diversas camadas enquanto o container ja é a aplicação sendo executando e possuindo uma camda a mais de read on write

2. Quais são as vantagens de se utilizar o Docker ao invés de rodar a aplicação diretamente na máquina de cada desenvolvedor e na máquina de produção?
   Resposta: Utilizar varias maquinas se torna bem custoso e utilizar maquinas virtuais gasta bastante do processador, além de que ao utilizar containers eles irão ser tratados como se fossem processos no SO, dividindo assim o mesmo Kernel

---

### Questão 2:

1. Quais são as vantagens do Docker Compose, em relação à opção de iniciar os containers de uma aplicação usando o comando docker run?
   Resposta: Ao utilizar o Docker Compose podemos ja estar definindo diversas coisas dos nosso container, tais como a versão, as portas, o volume e ate o sistema, enquanto ao utilizar o docker run teremos que estar definindo toda vez ao invés de ja estar pré-definido
---

### Questão 3:

1. Quais as diferenças entre sistemas de controle de versão (SCV) centralizados e distribuídos? O Git é um SCV centralizado ou distribuído?
   Resposta: O centralizado possui apenas um repositório para a equipe toda utilizar, enquanto o distribuido possui mais de um repositorio para ir desenvolvendo e então junta-los no final. o Git é SCV distribuído

---

### Questão 4:

1. Qual a diferença entre git merge e git rebase?
   Resposta:O git merge é mais seguro pois preserva o historico de versões, ele junta e faz uma junção em comum, enquanto o rebase cria um historico linear movendo assim as ramificações para a ramificação principal no final

---
