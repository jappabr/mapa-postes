# mapa-postes

Pontos de iluminacao publica por municipio, prontos para mapas web (Leaflet etc.).
Atualizado automaticamente pelo `publicar_mapas.py` a partir das APIs Unidesk/SIIP.

## Como usar no site

```html
<script src="https://jappabr.github.io/mapa-postes/pontos.js"></script>
<script>
  MapaPostes.carregar("cotia").then(function (r) {
    // r.postes = [{ lat, lng, coordenadas, plaqueta, lampada, modernizado, quantidade }, ...]
    // r.info   = { cidade, total, led, pendentes, atualizado_em, ... }
  });
</script>
```

Os arquivos sao buscados sempre revalidando o cache (`no-cache`): quando nada mudou o
navegador recebe um 304 de poucos bytes; quando o script publica, o site ja ve a versao nova.
Se o GitHub Pages cair, o `pontos.js` usa o jsDelivr (`https://cdn.jsdelivr.net/gh/jappabr/mapa-postes@main/`).

## Arquivos

- `index.json` - lista de cidades, totais e data da ultima mudanca: https://jappabr.github.io/mapa-postes/index.json
- `cidades/<cidade>.json` - pontos da cidade (formato compacto abaixo)
- `pontos.js` - carregador para usar nos sites

Formato de `cidades/<cidade>.json`:

```text
tipos:  [[descricao, 1 se LED], ...]
pontos: [[lng, lat, plaqueta, indice_do_tipo, quantidade (so se > 1)], ...]
```

## Cidades

| Cidade | Pontos | LED | % LED | Atualizado em | Arquivo |
|---|---:|---:|---:|---|---|

Repositorio: https://github.com/jappabr/mapa-postes
