# Webbutveckling III

### av Gianluca Incandela giin1900@student.miun.se

## Moment 5 - klient-applikation:

Webbapplikationen läser ut befintliga kurser och ha möjlighet att lägga till nya via ett formulär. Kursena listar i ett tabell genom att konsumera REST-webbtjänsten via Fetch API anrop för att hämta (GET), skicka (POST) och radera data (DELETE) från och till webbtjänsten. Uppdatera (PUT) ligger med i CRUD-funktionalitet med det är inte klart kodat.

Webbsidas layout består av en enkel tabel och ett förmulär som har skapat med HTML och SASS.

### 1.1 Sätt upp databasen via SQL-fråga:

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `code` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `progression` varchar(64) NOT NULL,
  `syllabus` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `courses` (`id`, `code`, `name`, `progression`, `syllabus`) VALUES
(1, 'DT057G', 'Webbutveckling I', 'A', 'https://www.miun.se//utbildning//kursplaner-och-utbildningsplaner//Sok-kursplan//kursplan//?kursplanid=17948'),
(3, 'DT084G', 'Introduktion till programmering med JavaScript', 'A', 'https://www.miun.se\\/utbildning\\/kursplaner-och-utbildningsplaner\\/Sok-kursplan\\/kursplan\\/?kursplanid=21877'),
(4, 'DT163G', 'Digital bildbehandling webb', 'A', 'https://www.miun.se\\/utbildning\\/kursplaner-och-utbildningsplaner\\/Sok-kursplan\\/kursplan\\/?kursplanid=21898'),
(5, 'DT003G', 'Databaser', 'A', 'https://www.miun.se\\/utbildning\\/kursplaner-och-utbildningsplaner\\/Sok-kursplan\\/kursplan\\/?kursplanid=21595'),
(6, 'GD008G', 'Typografi och form', 'A', 'https://www.miun.se\\/utbildning\\/kursplaner-och-utbildningsplaner\\/Sok-kursplan\\/kursplan\\/?kursplanid=21669'),
(7, 'DT093G', 'Webbutveckling II', 'B', 'https://www.miun.se\\/utbildning\\/kursplaner-och-utbildningsplaner\\/Sok-kursplan\\/kursplan\\/?kursplanid=21874'),
(8, 'DT068G', 'Webbanvandbarhet', 'B', 'https://www.miun.se\\/utbildning\\/kursplaner-och-utbildningsplaner\\/Sok-kursplan\\/kursplan\\/?kursplanid=19699'),
(9, 'DT152G', 'Webbdesign CMS', 'B', 'https://www.miun.se\\/utbildning\\/kursplaner-och-utbildningsplaner\\/Sok-kursplan\\/kursplan\\/?kursplanid=21872'),
(10, 'DT173G', 'Webbutveckling III', 'B', 'https://www.miun.se\\/utbildning\\/kursplaner-och-utbildningsplaner\\/Sok-kursplan\\/kursplan\\/?kursplanid=21873'),
(11, 'IK060G', 'Projektledning', 'A', 'https://www.miun.se\\/utbildning\\/kursplaner-och-utbildningsplaner\\/Sok-kursplan\\/kursplan\\/?kursplanid=18594');

### 1.2 Skapa databas användernamn:
   HOST: localhost
   USER: dbtest
   PAASWORD: password
   DATABASE: dbtest

### 2. Klona projekt:

git clone https://github.com/jbbreil/moment5Steg2.git

### 3. XAMPP installation:

Installera xampp-application för att hämta JSON-datakälla ur databasen i lokalt.

### 4. Initialisering konsol kommando:

1. npm install --save --dev

2. gulp
