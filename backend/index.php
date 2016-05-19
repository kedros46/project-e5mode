<?php
/**
 * Created by PhpStorm.
 * User: seagull
 * Date: 12/05/16
 * Time: 14:16
 */

require_once 'objects/Data.php';
require_once 'objects/arg0.php';
require_once 'objects/Adres.php';
require_once 'objects/Kaart.php';
require_once 'objects/Klant.php';
require_once 'objects/Request.php';
require_once 'objects/Titularis.php';

$gebruiker = resolveParameter("gebruiker");
$taalcode = resolveParameter("taalcode");
$isjuistadres = resolveParameter("isjuistadres");
$herkomst = resolveParameter("herkomst");
$iseidingelezen = resolveParameter("iseidingelezen");

//titularis
$titularisnummer = resolveParameter("titularisnummer");
$achternaam = resolveParameter("achternaam");
$voornaam = resolveParameter("voornaam");
$geboortedatum = resolveParameter("geboortedatum");
$aanspreekcode = resolveParameter("aanspreekcode");
$aanspreekprioriteit = resolveParameter("aanspreekprioriteit");
$email = resolveParameter("email");
$gsmnummer = resolveParameter("gsmnummer");

//adres
$adresnummer = resolveParameter("adresnummer");
$hoofdtitularisnummer = resolveParameter("hoofdtitularisnummer");
$straatcode = resolveParameter("straatcode");
$straat = resolveParameter("straat");
$huisnummer = resolveParameter("huisnummer");
$busnummer = resolveParameter("busnummer");
$postcode = resolveParameter("postcode");
$gemeente = resolveParameter("gemeente");
$postlandcode = resolveParameter("postlandcode");
$taalcode = resolveParameter("taalcode");
$terattentievan = resolveParameter("terattentievan");
$telefoonnummer = resolveParameter("telefoonnummer");
$gegevensnietaanderden = resolveParameter("gegevensnietaanderden");
$optout = resolveParameter("optout");
$aantalretouren = resolveParameter("aantalretouren");

//kaart
$kaartnummer = resolveParameter("kaartnummer");
$kortingspercentage = resolveParameter("kortingspercentage");
$ispersoneel = resolveParameter("ispersoneel");


//$client = new SoapClient('http://192.168.112.100:10025/web/services/AdresGUIService/AdresGUI?WSDL');
$client = new SoapClient('http://192.168.112.100:10057/web/services/AdresGUIService/AdresGUI?WSDL');

$adres = new Adres($aantalretouren, $adresnummer, $busnummer, $gegevensnietaanderden,
    		$gemeente, $hoofdtitularisnummer, $huisnummer, $optout, $postcode, $postlandcode,
    		$straat, $straatcode, $taalcode, $telefoonnummer, $terattentievan);

$kaart = new Kaart($ispersoneel, $kaartnummer, $kortingspercentage);
$titularis = new Titularis($aanspreekcode, $aanspreekprioriteit, $achternaam, $email, $geboortedatum, $gsmnummer, $titularisnummer, $voornaam);
$klant = new Klant($adres, $kaart, $titularis);
$request = new Request($gebruiker, $herkomst, $iseidingelezen, $isjuistadres, $klant, $taalcode);
$arg0 = new arg0($request);

echo json_encode($client->toevoegenklant(new Data($arg0))->return);


function resolveParameter($data) {
	if(isset($_GET[$data])) {
		return $_GET[$data];
	} else {
		return "";
	}
}
?>