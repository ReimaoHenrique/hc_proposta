---
title: Inteligências Artificiais — ARGUS e SENTRY
description: IA de colmeia (frota) e IA unitária (equipamento individual).
sidebar_position: 3
---

O ecossistema conta com duas inteligências artificiais complementares: uma que observa a **colmeia** (toda a frota) e outra que observa a **unidade** (cada gerador individual).

## IA de Colmeia: ARGUS

**Significado:** na mitologia, Argus era o gigante de **cem olhos** que via tudo ao mesmo tempo — perfeito para a IA que monitora toda a rede de geradores simultaneamente.

**Responsabilidades:**

- Observar simultaneamente toda a frota
- Detectar padrões globais
- Comparar unidades
- Detectar falhas emergentes
- Identificar comportamentos anômalos
- Descobrir tendências

**ARGUS enxerga a rede inteira.**

## IA Unitária: SENTRY

**Significado:** o soldado de guarda em um posto específico — é a IA que fica "plantada" dentro daquele gerador via Rust/OBD2, garantindo que ele não falhe.

**Responsabilidades:**

- Aprender o comportamento individual do equipamento
- Detectar desvios
- Estimar vida útil restante (RUL)
- Gerar alertas
- Sugerir manutenção

**SENTRY enxerga apenas um equipamento.**

## Trabalho em conjunto

- **SENTRY** atua como um engenheiro especialista dedicado exclusivamente a um único ativo.
- **ARGUS** atua como a inteligência coletiva da plataforma, aprendendo com toda a frota.
- Juntas, elas transformam dados brutos em **previsibilidade operacional**.