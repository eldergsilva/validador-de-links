 # Validador de Links

Este é um validador de links simples escrito em JavaScript para extrair e validar links em arquivos de texto.

## Funcionalidades

- Extrai links de arquivos de texto.
- Valida os links verificando o status HTTP de cada um.
- Fornece um relatório com o status de cada link.

## Pré-requisitos

- Node.js instalado no seu sistema.

## Instalação

1. Clone o repositório:

bash
git clone https://github.com/seu-usuario/seu-repositorio.git

npm install

## Uso
Você pode usar este validador de links através da linha de comando, fornecendo o caminho para o arquivo ou diretório que deseja analisar.
node index.js <caminho-do-arquivo-ou-diretorio> [--valida]

<caminho-do-arquivo-ou-diretorio>: O caminho para o arquivo de texto ou diretório que contém os arquivos que você deseja analisar.
--valida: Opcional. Se fornecido, o validador verificará o status HTTP de cada link.

##  Exemplos
Para extrair e listar os links de um arquivo:
node index.js arquivo.txt

Para extrair, validar e listar os links de um arquivo:
node index.js arquivo.txt --valida


