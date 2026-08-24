# Morato Custódio

Landing page pessoal de **Morato Custódio**, empreendedor angolano focado em inclusão financeira e digital. O site apresenta uma introdução, uma seção "quem sou", uma frase de destaque em animação de scroll — _"O maior recurso natural que Angola tem, é o próprio angolano."_ —, conteúdos em vídeo/áudio ("minha voz") e um formulário de contato.

## Tecnologias

- **React 19** + **TypeScript**
- **Vite** (build e dev server)
- **Tailwind CSS 4**
- **Framer Motion** (animações)
- **React Scroll** (navegação suave entre seções)
- **React Icons** (ícones)

## Estrutura

```
src/
├── components/
│   ├── ui/            # Componentes reutilizáveis (Button, Input, TextReveal, ...)
│   ├── NavBar.tsx
│   ├── Hero.tsx
│   ├── AboutMe.tsx
│   ├── PhraseReveal.tsx
│   ├── HearMyVoice.tsx
│   ├── Contacts.tsx
│   └── Footer.tsx
├── constants.ts       # Todo o conteúdo textual do site
├── App.tsx
└── main.tsx
```

Todo o conteúdo textual (títulos, links, parágrafos e frases) fica centralizado em [`src/constants.ts`](src/constants.ts), facilitando a edição sem mexer nos componentes.

## Como rodar

```bash
# instalar dependências
npm install

# variáveis de ambiente (chave da YouTube Data API)
cp .env.example .env   # e preencha VITE_YOUTUBE_API_TOKEN

# ambiente de desenvolvimento
npm run dev

# build de produção (verifica tipos e depois compila)
npm run build

# apenas verificação de tipos
npm run typecheck

# pré-visualizar o build
npm run preview

# lint
npm run lint
```

O servidor de desenvolvimento fica disponível em `http://localhost:5173` por padrão.

### Variáveis de ambiente

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `VITE_YOUTUBE_API_TOKEN` | Não | Chave da YouTube Data API v3, usada para buscar o vídeo mais recente. Sem ela o site mostra um vídeo de reserva. |

O `.env` não vai para o repositório. Como todas as variáveis `VITE_*` ficam
embutidas no JavaScript publicado, restrinja a chave por **referenciador HTTP**
(`https://morato.ao/*`) na Google Cloud Console.

## Deploy (Apache / hospedagem partilhada)

```bash
npm ci
npm run build
```

O build gera a pasta `dist/`. Envie **todo o conteúdo de `dist/`** — incluindo o
ficheiro oculto `.htaccess` — para a raiz pública do servidor (`public_html/`,
`www/` ou equivalente).

> Muitos clientes de FTP escondem ficheiros que começam por ponto. Confirme que
> o `.htaccess` foi mesmo enviado, caso contrário perde os redireccionamentos,
> a compressão e as regras de cache.

O [`public/.htaccess`](public/.htaccess) é copiado automaticamente para `dist/`
em cada build e trata de:

- redireccionamento para **HTTPS** e de `www.morato.ao` para `morato.ao`;
- **fallback da SPA** (rotas inexistentes devolvem `index.html` em vez de 404);
- **compressão** gzip/brotli para HTML, CSS, JS, SVG e XML;
- **cache**: ficheiros com hash em `/assets/` marcados como `immutable` por um
  ano, `index.html` sempre revalidado (evita servir um build antigo após deploy);
- **MIME types** de `.webp`, `.avif` e `.woff2`, que faltam em alguns hosts;
- **cabeçalhos de segurança** (`X-Content-Type-Options`, `Referrer-Policy`,
  `X-Frame-Options`, `Permissions-Policy`, HSTS).

Há ainda uma **Content-Security-Policy** pronta, comentada no fim do ficheiro:
active-a e confirme na consola do browser que o embed do YouTube continua a
funcionar antes de a deixar ligada.

Se o site for publicado numa subpasta em vez da raiz do domínio, ajuste `base`
em [`vite.config.ts`](vite.config.ts) e `RewriteBase` no `.htaccess`.

## SEO

O site inclui otimizações de SEO técnico:

- **Meta tags** completas em [`index.html`](index.html): `title`, `description`, `keywords`, `author`, `robots`, `theme-color` e `canonical`, com `lang="pt-BR"`.
- **Open Graph** e **Twitter Cards** para pré-visualização em redes sociais e apps de mensagem (imagem em `public/og-cover.png`).
- **Dados estruturados** JSON-LD (schema.org `Person`) com nome, cargo, áreas de conhecimento e redes sociais.
- **[`robots.txt`](public/robots.txt)** e **[`sitemap.xml`](public/sitemap.xml)** em `public/`.
- **Performance**: imagem principal (LCP) com `fetchPriority="high"` e imagens abaixo da dobra com `loading="lazy"`.
- **HTML semântico**: `<main>`, `<section>` e hierarquia de headings (`h1`/`h2`).

O domínio canónico é `https://morato.ao` e está definido em
[`index.html`](index.html), [`public/robots.txt`](public/robots.txt) e
[`public/sitemap.xml`](public/sitemap.xml). Se mudar, actualize os três
ficheiros e também a regra de `www` no [`public/.htaccess`](public/.htaccess).

> ⚠️ O formulário de contacto ainda usa `action="/"`, ou seja, não envia nada:
> submeter apenas recarrega a página. É preciso ligá-lo a um serviço de
> formulários ou a um endpoint próprio antes do lançamento.
