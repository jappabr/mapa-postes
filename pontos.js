/*!
 * mapa-postes - carregador dos pontos de iluminacao publica.
 * Arquivo gerado automaticamente pelo publicar_mapas.py; nao edite no GitHub.
 *
 *   <script src="https://jappabr.github.io/mapa-postes/pontos.js"></script>
 *   MapaPostes.carregar("cotia").then(function (r) {
 *     window.MAPA_POSTES = r.postes;   // mesmo formato que os mapas dos sites ja usam
 *   });
 */
(function (global) {
  "use strict";

  var URL_PAGES = "https://jappabr.github.io/mapa-postes/";
  var URL_CDN = "https://cdn.jsdelivr.net/gh/jappabr/mapa-postes@main/";

  function baixar(url, opcoes) {
    return fetch(url, opcoes).then(function (resposta) {
      if (!resposta.ok) throw new Error("HTTP " + resposta.status + " em " + url);
      return resposta.json();
    });
  }

  // GitHub Pages sempre revalidado (no-cache = 304 rapido quando nada mudou).
  // Se o Pages falhar, tenta o jsDelivr.
  function buscarJSON(caminho) {
    return baixar(URL_PAGES + caminho, { cache: "no-cache" }).catch(function (erroPages) {
      return baixar(URL_CDN + caminho).catch(function () { throw erroPages; });
    });
  }

  function expandir(dados) {
    var tipos = (dados && dados.tipos) || [];
    var pontos = (dados && dados.pontos) || [];
    var postes = new Array(pontos.length);
    for (var i = 0; i < pontos.length; i++) {
      var p = pontos[i];
      var tipo = tipos[p[3]] || ["Não informado", 0];
      postes[i] = {
        lng: p[0],
        lat: p[1],
        coordenadas: [p[0], p[1]],
        plaqueta: String(p[2]),
        lampada: tipo[0],
        modernizado: tipo[1] === 1,
        quantidade: p[4] || 1
      };
    }
    return postes;
  }

  global.MapaPostes = {
    urlBase: URL_PAGES,
    indice: function () {
      return buscarJSON("index.json");
    },
    carregar: function (cidade) {
      return buscarJSON("cidades/" + encodeURIComponent(cidade) + ".json").then(function (dados) {
        return { info: dados, postes: expandir(dados) };
      });
    },
    expandir: expandir
  };
})(typeof window !== "undefined" ? window : this);
