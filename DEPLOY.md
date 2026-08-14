# Deploy — Otávio DJ

Este projeto é feito em **TanStack Start** (React 19 + Nitro), o mesmo stack que o Lovable usa por baixo dos panos. Isso significa que a Vercel reconhece o projeto **automaticamente**, sem configuração manual — é a rota mais tranquila.

## ⚠️ Antes de tudo: as imagens

Os arquivos em `src/assets/*.asset.json` apontam para o CDN interno do Lovable (`/__l5e/assets-v1/...`). Se o seu projeto Lovable **já está conectado ao GitHub** (Settings → GitHub, dentro do Lovable), use o repositório sincronizado por lá — ele já resolve as imagens corretamente.

Se você está subindo a partir deste ZIP (sem sync ativo), existe risco real dessas imagens não carregarem fora do ambiente do Lovable. Depois do primeiro deploy, **abra o site e confira se a foto do hero, o retrato, a foto da pista e os logos do O'Set aparecem**. Se alguma quebrar, é só:
1. Baixar a imagem original (ex: clicar com o botão direito na prévia do Lovable → salvar imagem, ou pegar do seu rolo de fotos).
2. Colocar o arquivo em `src/assets/` (ex: `otavio-hero.jpg`).
3. Trocar a importação no componente, de:
   ```ts
   import hero from "@/assets/otavio-hero.jpg.asset.json";
   // uso: hero.url
   ```
   para:
   ```ts
   import hero from "@/assets/otavio-hero.jpg";
   // uso: hero
   ```
   (repita em `Hero.tsx`, `Nav.tsx` e `Sections.tsx` para cada imagem afetada)

## Passo 1 — Subir para o GitHub

Este ZIP já vem com um repositório git local pronto (1 commit: "Initial commit from Lovable export", branch `main`). No seu computador:

```bash
# 1. Descompacte o ZIP e entre na pasta
cd projeto_pronto

# 2. Crie um repositório vazio no GitHub (github.com/new) — NÃO marque
#    "Add a README", pra não conflitar com o commit que já existe aqui.

# 3. Conecte e envie
git remote add origin https://github.com/SEU_USUARIO/otavio-dj.git
git push -u origin main
```

Se preferir, você também pode simplesmente conectar o projeto ao GitHub direto pela interface do Lovable (Settings → GitHub) — aí o Lovable cria e mantém o repositório sincronizado automaticamente, sem precisar desses comandos.

## Passo 2 — Deploy na Vercel (recomendado)

1. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório do GitHub.
2. A Vercel detecta o TanStack Start automaticamente (o projeto já usa `@lovable.dev/vite-tanstack-config`, que tem suporte nativo). Não precisa mexer em build command nem output directory.
3. Clique em **Deploy**.
4. Toda vez que você (ou o Lovable) der push na branch `main`, a Vercel gera um novo deploy sozinha.
5. Domínio próprio: Project Settings → Domains → adicione seu domínio (ex: `otaviodj.com.br`) e aponte o DNS conforme as instruções da Vercel.

## Alternativa — Netlify

A Netlify é parceira oficial de hosting do TanStack Start e também tem deploy praticamente automático:

1. Acesse [app.netlify.com/start](https://app.netlify.com/start) e importe o repositório.
2. A Netlify detecta o framework e configura o build sozinha (usa o preset `netlify` do Nitro por baixo).
3. Deploy.

## Rodando localmente antes de subir (opcional, recomendado)

Com Node.js e Bun instalados:

```bash
bun install
bun run dev
```

Abre em `http://localhost:3000` (ou porta indicada no terminal). Assim você confere localmente se está tudo certo antes de publicar.

## Observação sobre o formulário de contato

O formulário na seção "Vamos falar?" (`Contact` em `Sections.tsx`) ainda não está conectado a nada — hoje ele não envia e-mail nem mensagem pra lugar nenhum ao clicar em "Enviar Solicitação". Pra funcionar de verdade, ele precisa de uma integração (ex: Formspree, Resend, ou uma server function do próprio TanStack Start). Posso te ajudar a implementar isso quando quiser — por enquanto, os contatos diretos (e-mail, WhatsApp, redes sociais) ao lado do formulário já funcionam normalmente.
