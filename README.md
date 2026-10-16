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
| Antonina | 3.201 | 2.302 | 71,9% | 2026-10-15 15:00:34 | [antonina.json](https://jappabr.github.io/mapa-postes/cidades/antonina.json) |
| Arapoti | 3.290 | 3.234 | 98,3% | 2026-10-15 15:07:46 | [arapoti.json](https://jappabr.github.io/mapa-postes/cidades/arapoti.json) |
| Assaí | 2.609 | 1.988 | 76,2% | 2026-10-15 15:00:30 | [assai.json](https://jappabr.github.io/mapa-postes/cidades/assai.json) |
| Embu-Guaçu | 12.152 | 781 | 6,4% | 2026-10-15 15:35:50 | [embu-guacu.json](https://jappabr.github.io/mapa-postes/cidades/embu-guacu.json) |
| Fernandes Pinheiro | 746 | 685 | 91,8% | 2026-10-15 14:59:51 | [fernandes-pinheiro.json](https://jappabr.github.io/mapa-postes/cidades/fernandes-pinheiro.json) |
| Francisco Beltrão | 13.838 | 8.930 | 64,5% | 2026-10-15 15:28:31 | [francisco-beltrao.json](https://jappabr.github.io/mapa-postes/cidades/francisco-beltrao.json) |
| Guararema | 9.608 | 4.321 | 45,0% | 2026-10-15 15:39:17 | [guararema.json](https://jappabr.github.io/mapa-postes/cidades/guararema.json) |
| Inácio Martins | 965 | 883 | 91,5% | 2026-10-15 15:29:06 | [inacio-martins.json](https://jappabr.github.io/mapa-postes/cidades/inacio-martins.json) |
| Irati | 10.663 | 9.618 | 90,2% | 2026-10-15 15:32:08 | [irati.json](https://jappabr.github.io/mapa-postes/cidades/irati.json) |
| Itapecerica da Serra | 20.552 | 19.718 | 95,9% | 2026-10-16 12:20:39 | [itapecerica-da-serra.json](https://jappabr.github.io/mapa-postes/cidades/itapecerica-da-serra.json) |
| Jandira | 8.326 | 3.097 | 37,2% | 2026-10-15 16:06:05 | [jandira.json](https://jappabr.github.io/mapa-postes/cidades/jandira.json) |
| Laranjeiras | 2.715 | 2.583 | 95,1% | 2026-10-15 16:13:50 | [laranjeiras.json](https://jappabr.github.io/mapa-postes/cidades/laranjeiras.json) |
| Mallet | 2.177 | 1.665 | 76,5% | 2026-10-15 16:15:13 | [mallet.json](https://jappabr.github.io/mapa-postes/cidades/mallet.json) |
| Nova Odessa | 11.408 | 11.059 | 96,9% | 2026-10-16 12:59:33 | [nova-odessa.json](https://jappabr.github.io/mapa-postes/cidades/nova-odessa.json) |
| Palotina | 6.959 | 6.557 | 94,2% | 2026-10-15 16:22:31 | [palotina.json](https://jappabr.github.io/mapa-postes/cidades/palotina.json) |
| Piraquara | 13.085 | 12.594 | 96,2% | 2026-10-16 11:55:08 | [piraquara.json](https://jappabr.github.io/mapa-postes/cidades/piraquara.json) |
| Rebouças | 1.666 | 1.615 | 96,9% | 2026-10-15 16:22:51 | [reboucas.json](https://jappabr.github.io/mapa-postes/cidades/reboucas.json) |
| Registro | 8.965 | 8.331 | 92,9% | 2026-10-15 16:09:35 | [registro.json](https://jappabr.github.io/mapa-postes/cidades/registro.json) |
| Sapucaia do Sul | 12.786 | 11.907 | 93,1% | 2026-10-15 16:26:17 | [sapucaia-do-sul.json](https://jappabr.github.io/mapa-postes/cidades/sapucaia-do-sul.json) |
| Siqueira Campos | 4.000 | 3.885 | 97,1% | 2026-10-15 16:11:31 | [siqueira-campos.json](https://jappabr.github.io/mapa-postes/cidades/siqueira-campos.json) |
| Socorro | 7.225 | 5.834 | 80,7% | 2026-10-15 16:29:41 | [socorro.json](https://jappabr.github.io/mapa-postes/cidades/socorro.json) |
| Teixeira Soares | 1.355 | 1.126 | 83,1% | 2026-10-15 16:38:43 | [teixeira-soares.json](https://jappabr.github.io/mapa-postes/cidades/teixeira-soares.json) |
| Wenceslau Braz | 2.864 | 2.775 | 96,9% | 2026-10-15 16:15:00 | [wenceslau-braz.json](https://jappabr.github.io/mapa-postes/cidades/wenceslau-braz.json) |

Repositorio: https://github.com/jappabr/mapa-postes
