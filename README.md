# Hardware Simulator

Repositório utilizado para criação do script de simulação do hardware

# Uso

Para utilizar o script, basta executar o docker-compose na pasta raiz do projeto com o comando:

```
$sudo docker-compose up --build
```

# Resultado 

O resultado deve ser um arquivo `.txt` criado na pasta scripts.

A simulação está programada com os seguintes parâmetros:
```
var missionDuration = 8;
var dataAmount = 60 * 2 * missionDuration;
```

Onde a duração da missão(`missionDuration`) é dada em minutos.
A quantidade de dados (`dataAmount`) é definida a partir da duração do voo e considerando a geração de 2 dados por segundo (60*2).
