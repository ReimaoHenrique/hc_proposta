---
title: Ecossistema HC Guardian
description: "Componentes do ecossistema: HC Guardian Edge, HC Guardian Cloud e RHINOS."
sidebar_position: 2
---

## O ecossistema

O **HC Guardian** é um ecossistema composto por hardware, software, inteligência artificial e infraestrutura cloud. Cada gerador se torna um nó inteligente conectado, com todos os dados enviados para a nuvem e processados continuamente. O sistema registra toda a vida útil do equipamento desde a primeira partida — cada evento operacional faz parte do histórico permanente daquele ativo.

## Componentes

### RHINOS

Rust Hybrid Engine for Intelligent Network and OBD2 Systems.

Software desktop de diagnóstico.

**Tecnologias:**
- Rust
- Tauri

**Funções:**
- Diagnóstico avançado
- Configuração
- Calibração
- Atualização
- Monitoramento local

### ARGUS e SENTRY

IA preditiva integrada ao ecossistema HC Guardian:

- **ARGUS**: IA de colmeia — observa a frota inteira, identificando padrões e anomalias em múltiplos geradores.
- **SENTRY**: IA unitária — observa cada gerador individualmente, monitorando condições operacionais em tempo real.

**Conectividade:** Ambos se comunicam com o HC Guardian Edge e a HC Guardian Cloud, integrando-se ao histórico permanente de cada equipamento.

### HC Guardian Edge

Hardware embarcado instalado dentro do gerador.

**Tecnologias:**

- STM32H7
- Rust
- RTIC
- CAN Bus
- Ethernet
- Wi-Fi
- Bluetooth
- GNSS opcional
- Sensores industriais

**Funções:**

- Aquisição de dados
- Diagnóstico local
- Controle
- Telemetria
- Operação offline

### HC Guardian Cloud

Infraestrutura cloud.

**Tecnologias desejadas:**

- Rust
- Burn
- ClickHouse
- PostgreSQL
- NATS
- Kubernetes
- Object Storage
- MQTT

**Funções:**

- Armazenamento histórico
- Processamento distribuído
- IA preditiva
- Dashboard
- Gestão de frota

### RHINOS

Rust Hybrid Engine for Intelligent Network and OBD2 Systems.

Software desktop de diagnóstico.

**Tecnologias:**

- Rust
- Tauri

**Funções:**

- Diagnóstico avançado
- Configuração
- Calibração
- Atualização
- Monitoramento local

**Conectividade:**

- USB
- Serial
- CAN
- Ethernet
- OBD2

O nome soa forte como um rinoceronte — transmitindo robustez para geradores — e amarra o Rust com o OBD2.