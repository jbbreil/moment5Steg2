# Webbutveckling III

### av Gianluca Incandela giin1900@student.miun.se

## Moment 5 - REST api PHP - Steg 1

Den här wbbtjänsten är skapad med PHP och hanterar information om de kurser jag läst tidigare i programmet.
Den läser in data från en databas och hämtas ut i JSON-format som hanterar via REST-webbtjänst med full CRUD-funktionalitet. 
Webbtjänsten är skapad med objektorienterad PHP-programmering med anslutning mot MySQL-databasserver.

Webbsidan ska listar kurserna i ett tabell genom att konsumera REST-webbtjänst via Fetch-anrop för att hämta (GET), skicka (POST) och radera data (DELETE) från och till webbtjänsten. Uppdatera (PUT) ligger med i CRUD-funktionalitet med det är inte klart kodat.
HTML och SASS används till webbsidas layout.


### 1.1 Sätt upp databasen:
   CREATE TABLE IF NOT EXISTS `courses` (
   `id` int(11) NOT NULL,
   `code` text NOT NULL,
   `name` text NOT NULL,
   `progression` text NOT NULL,
   `syllabus` text NOT NULL,
   PRIMARY KEY (id)
   ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

### 1.2 Skapa databas användernamn:
   HOST: localhost
   USER: dbtest
   PAASWORD: password
   DATABASE: dbtest

### 2. Klona projekt:

git clone https://github.com/jbbreil/moment5Steg2.git

### 3. Initialisering konsol kommando:

1. npm install --save --dev

2. gulp
