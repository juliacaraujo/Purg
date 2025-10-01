# Guia Rápido — Abrir o app com Expo Go

Este guia explica **duas formas** de abrir o app:
- **A)** Você roda o projeto e envia o **QR Code** para a outra pessoa abrir no celular.
- **B)** A outra pessoa clona o repositório e roda localmente na máquina dela.

---

## A) Você roda, a outra pessoa só escaneia o QR

**Pré-requisitos (você):**
- Node 18+ (`node -v`)
- Dependências instaladas (`npm install` na raiz do projeto)

**Passos**
```bash
# iniciar com túnel (funciona mesmo em redes diferentes)
npx expo start --tunnel
# (se estiverem no mesmo Wi‑Fi, pode usar: npx expo start --lan)
```
- O terminal/DevTools vai mostrar um **QR Code**.
- Peça para a pessoa instalar o **Expo Go** no celular:
  - Android: Google Play → *Expo Go*
  - iOS: App Store → *Expo Go* (ou use a **Câmera** para ler o QR)
- Ela abre o **Expo Go** → *Scan QR Code* e aponta para o QR.

> Dica: se não conectar, use `--tunnel` e/ou limpe o cache com `npx expo start --clear`.

---

## B) A outra pessoa vai rodar localmente (a partir do Git)

**Pré-requisitos**
- Node 18+ (`node -v`)
- Git instalado
- (Opcional) Expo Go no celular para testar no device

**Passos**
```bash
git clone <URL-DO-REPO>
cd <PASTA-DO-PROJETO>
npm install

# (opcional) criar .env se o projeto usar API pública
# EXPO_PUBLIC_API_BASE_URL=http://3.148.127.87:3000

# iniciar
npx expo start --lan      # mesmo Wi‑Fi (mais rápido)
# ou
npx expo start --tunnel   # redes diferentes (internet)
```
- Para abrir em **emulador**:
  - Android: pressione `a`
  - iOS (apenas macOS): pressione `i`
- Para abrir no **celular**: ler o QR no **Expo Go**.

---

## Comandos úteis
```bash
npx expo start --lan      # servidor na LAN
npx expo start --tunnel   # via túnel, funciona entre redes
npx expo start --clear    # limpa cache do Metro
```

## Problemas comuns
- **QR não conecta** → use `--tunnel`.
- **Erro estranho ao iniciar** → `npx expo start --clear`.
- **Sem Node** → instale a versão LTS (18+).

Pronto! Envie este arquivo junto do repositório para quem for testar. 🚀
