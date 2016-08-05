-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2016 at 07:00 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `corect`
--

-- --------------------------------------------------------

--
-- Table structure for table `cuvinte`
--

CREATE TABLE `cuvinte` (
  `id` int(11) NOT NULL,
  `cuvant` text NOT NULL,
  `explicatie` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cuvinte`
--

INSERT INTO `cuvinte` (`id`, `cuvant`, `explicatie`) VALUES
(1, 'copac', 'Planta cu trunchiul lemnos si inalt, ale carei crengi se ramifica, formand o coroana'),
(2, 'profesor', 'Persoana calificata care preda o materie de invatamant (in scoala)'),
(3, 'penar', 'Cutioara paralelipipedica in care scolarii isi tin creioanele, penitele, gumele'),
(4, 'suvenir', 'Obiect, dar, semn care reprezinta sau evoca o amintire');

-- --------------------------------------------------------

--
-- Table structure for table `lectii`
--

CREATE TABLE `lectii` (
  `id` int(11) NOT NULL,
  `titlu` text NOT NULL,
  `rank` text NOT NULL,
  `mentor` text NOT NULL,
  `image` text NOT NULL,
  `dialog` text NOT NULL,
  `teorie` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lectii`
--

INSERT INTO `lectii` (`id`, `titlu`, `rank`, `mentor`, `image`, `dialog`, `teorie`) VALUES
(1, 'Ortograme', 'Maestru in ORTOGRAME', 'Mickey Mouse', 'mouse', 'Hei,hei. Sunt eu, Mikey Mouse. Profesorul mi-a lasat locul lui pentru a-ti prezenta aceasta lectie, si anume despartirea in silabe.', '<p>Despartirea in silabe reprezinta unul dintre cele mai importante aspecte ale gramaticii limbii romane. Trebuie sa amintim urmatoarele reguli:</p>\r\n			<ul>\r\n				<li>o consoana intre doua vocale trece in silaba urmatoare\r\n	  			Exemple: ma-sa; pa-du-re; u-ti-li-za-re</li>\r\n				<li>doua consoane intre doua vocale: la despartirea in silabe se despart si ele, prima consoana trece in silaba dinainte, iar a doua consoana la silaba urmatoare\r\n				Exemple: ar-ta; ac-tiv; tic-sit; mun-te; un-ghi-e</li>\r\n				<li>trei sau mai multe consoane intre doua vocale: la despartirea in silabe prima consoana se duce la silaba  dinainte, iar celelalte doua trec la silaba urmatoare\r\n	  			Exemple: as-tru; mon-stru; con-struc-tor</li>\r\n				<li>doua vocale in hiat se despart intre ele, facand parte din silabe diferite: \r\n	  			Exemple: a-er; a-le-e; po-e-zi-e</li>\r\n			</ul>'),
(2, 'Semne de punctuatie', 'Maestru in PUNCTUATIE', 'Elsa', 'elsa', 'Buna! Eu sunt Elsa. In continuare, am placerea de a-ti prezenta folosira semnelor de punctuatie.', '<p><b>PUNCTUL(.)</b> este semnul grafic de punctuatie care marcheaza pauza ce se face intre propozitii/\r\nfraze independente ca sens. Se pune la sfarsitul propozitiilor enuntiative (afirmative sau negative).</p>\r\n<p>Exemple: Maria citeste. Maria nu citeste.<p>\r\n<p><b>SEMNUL INTREBARII(?)</b> este semnul grafic de punctuatie care marcheaza intonatia propozitiilor/\r\nfrazelor interogative (afirmative sau negative).</p>\r\n<p>Exemple: Unde mergi? Nu ai invatat?<p>\r\n<p><b>SEMNUL EXCLAMARII(!)</b> este semnul grafic de punctuatie care marcheaza intonatia\r\npropozitiilor/ frazelor exclamative sau imperativ e(afirmative sau negative). Se foloseste si dupa\r\ninterjectii sau vocative care exprima stari afective.</p>\r\n<p>Exemple: Ce frumoasa esti! Vino, baiatule!<p>\r\n<p><b>VIRGULA(,)</b> este semnul grafic de punctuatie care marcheaza o pauza mai mica decat punctul. Ea\r\ndelimiteaza propozitii in cadrul frazei si parti de propozitie in cadrul propozitiei, pe baza raporturilor\r\nsintactice dintre ele. Virgula reda grafic ritmul vorbirii si al intonatiei.</p>\r\n<p>Exemple: Am cumparat cirese, mere, pere si banane. A venit Maria, vecina, in vizita. Vino, baiatule!<p>');

-- --------------------------------------------------------

--
-- Table structure for table `teste`
--

CREATE TABLE `teste` (
  `id` int(11) NOT NULL,
  `titlu` text NOT NULL,
  `rank` text NOT NULL,
  `mentor` text NOT NULL,
  `image` text NOT NULL,
  `dialog` text NOT NULL,
  `intrebare_1` text NOT NULL,
  `intrebare_2` text NOT NULL,
  `intrebare_3` text NOT NULL,
  `intrebare_4` text NOT NULL,
  `intrebare_5` text NOT NULL,
  `intrebare_6` text NOT NULL,
  `intrebare_7` text NOT NULL,
  `intrebare_8` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teste`
--

INSERT INTO `teste` (`id`, `titlu`, `rank`, `mentor`, `image`, `dialog`, `intrebare_1`, `intrebare_2`, `intrebare_3`, `intrebare_4`, `intrebare_5`, `intrebare_6`, `intrebare_7`, `intrebare_8`) VALUES
(1, 'Ortografie', 'General in ORTOGRAFIE', 'Dexter', 'dexter', 'Salut! Numele meu este Dexter si o sa iti testez cunostiintele in ortografie printr-un set de 8 intrebari.', '{\r\nquestion: "Maria are o pisica. Pisica sa e roscata.",\r\nchoices: ["Corect","Incorect"],\r\ncorrectAnswer: 0\r\n}', '{\r\nquestion: "Pisica s-a urcat in copac.",\r\nchoices: ["Corect","Incorect"],\r\ncorrectAnswer: 0\r\n}', '{\r\nquestion: "Copii sau intalnit in parc.",\r\nchoices: ["Corect","Incorect"],\r\ncorrectAnswer: 1\r\n}', '{\r\nquestion: "O sa ii cumpar mamei mele trandafiri sau irisi.",\r\nchoices: ["Corect","Incorect"],\r\ncorrectAnswer: 0\r\n}', '{\r\nquestion: "Diana ia cartea de la biblioteca scolii.",\r\nchoices: ["Corect","Incorect"],\r\ncorrectAnswer: 0\r\n}', '{\r\nquestion: "Ion i-a imprumutat o carte lui Niculae.",\r\nchoices: ["Corect","Incorect"],\r\ncorrectAnswer: 0\r\n}', '{\r\nquestion: "In vacanta, voi merge la bunici si la mare.",\r\nchoices: ["Corect","Incorect"],\r\ncorrectAnswer: 0\r\n}', '{\r\nquestion: "Ea la vazut pe Richard la magazin.",\r\nchoices: ["Corect","Incorect"],\r\ncorrectAnswer: 1\r\n}');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
