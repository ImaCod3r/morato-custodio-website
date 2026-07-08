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

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# pré-visualizar o build
npm run preview

# lint
npm run lint
```

O servidor de desenvolvimento fica disponível em `http://localhost:5173` por padrão.
