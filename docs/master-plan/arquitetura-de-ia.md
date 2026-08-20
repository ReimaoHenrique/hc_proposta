---
title: Arquitetura de IA
description: "Burn + Rust + ClickHouse: treinamento, inferência e aprendizado contínuo."
sidebar_position: 9
---

## Stack de IA

A arquitetura completa de IA utiliza:

- **Burn** — framework de deep learning em Rust
- **Rust** — linguagem principal de todo o ecossistema
- **ClickHouse** — armazenamento e consulta de séries temporais de alta velocidade

## Fluxo de dados

1. **HC Guardian Edge** coleta dados dos sensores (CAN Bus) e envia para a nuvem.
2. **NATS** faz a ingestão e o roteamento distribuído dos eventos.
3. **ClickHouse** armazena o histórico completo de cada ativo.
4. **PostgreSQL** mantém dados relacionais (clientes, ativos, configurações).
5. **ARGUS e SENTRY** consomem os dados para inferência e aprendizado.

## Treinamento

- Modelos treinados em Rust com **Burn**, executados em infraestrutura Kubernetes
- Treinamento inicial com dados históricos da frota
- Aprendizado contínuo com os novos dados de cada gerador

## Inferência

- **SENTRY**: inferência por unidade — comportamento individual de cada gerador
- **ARGUS**: inferência em lote sobre a frota — comparações entre equipamentos semelhantes

## Capacidades do modelo

- Detecção de anomalias
- Previsão de falhas
- RUL (Remaining Useful Life / vida útil restante)
- Health Score do ativo
- Recomendação de manutenção preventiva

## Aprendizado contínuo

Cada novo gerador conectado melhora os modelos globais. O ciclo:

**Dados → Treinamento → Inferência → Alertas → Manutenção → Validação → Retreinamento**

Quanto mais dados a frota gera, maior a precisão das previsões e maior o valor da plataforma — criando uma barreira tecnológica difícil de copiar.