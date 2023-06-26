# O Cerebro

_Esse projeto visa a criação de uma pesquisa dos personagens da Marvel usando a [Marvel API](developer.marvel.com). A aplicação também está online na **[Vercel](marvel-cebro.vercel.app)**_ (sim, me perdoe - o nome está errado lá). Também se encontra disponível uma imagem no Docker **(kajiyamavk/marvel-cerebro:1.0)**

<div style='display:flex; align-items:center; justify-content:center; margin:40px'>
<img src='https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png' style='width:500px; ' alt='Styled Components'>
</div>
## Stacks utilizadas

<div>

#### Stacks root

<img src='/public/Stacks/html.png' style='width:80px' alt='html'>
<img src='/public/Stacks/javascript.jpg' style='width:80px' alt='javascript'>
<img src='/public/Stacks/css.png' style='width:80px' alt='css'>
<img src='/public/Stacks/typescript.jpg' style='width:80px' alt='css'>
</div>

#### Frameworks e Bibliotecas

<div>
<img src='/public/Stacks/react.jpg' style='width:80px' alt='ReactJS'>
<img src='/public/Stacks/nextjs.jpg' style='width:80px' alt='Styled Components'>
<img src='/public/Stacks/styledComponents.jpg' style='width:80px' alt='Styled Components'>

</div>

#### Techs e ferramentas

<div>
<img src='/public/Stacks/docker.png' style='width:80px' alt='Docker'>
<img src='/public/Stacks/github.jpg' style='width:80px' alt='Github'>

</div>

## Arquitetura e pontos relevantes

- Utilizada a arquitetura **em camadas** onde as responsabilidades da interface, contextos e funções ficam separados da programação do UI
- Normalmente utilizo CSS Modules ou Tailwind, mas como foi utilizado **Styled Components**, a estilização ficou no mesmo arquivo do componente.
- A responsividade está desenvolvida.
- Utilizado a Contextos para os controles de estados.
- Aplicação se encontra online na **[Vercel](marvel-cebro.vercel.app)**.
- Imagem disponível no **Docker** - kajiyamavk/marvel-cerebro:1.0
- Seguindo as boas práticas dos nomes e comentários serem em inglês.
- No enunciado diziam para serem criadas 3 telas, porém, pela simplicidade do projeto, foram criados 3 componentes, porém, isso é uma mudança que eu questionaria ao designer antes de fazer.
- Pelo não uso de ISR/SSG/SSR ou Routing, eu poderia ter deixado o NextJS e ter aplicado o ReactJS apenas. Mas o framework foi aplicado por não aumentar a complexidade, e pelo uso da tag &lt;Image&gt;.
- **A maioria dos registros não possuem descrição, portanto, foi colocada animação de access denied**
