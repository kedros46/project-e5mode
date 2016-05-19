<?php

/**
 * Created by PhpStorm.
 * User: Seagull
 * Date: 5/17/2016
 * Time: 10:53 AM
 */
class Titularis
{
    var $AANSPREEKCODE;
    var $AANSPREEKPRIORITEIT;
    var $ACHTERNAAM;
    var $EMAIL;
    var $GEBOORTEDATUM;
    var $GSMNUMMER;
    var $TITULARISNUMMER;
    var $VOORNAAM;

    public function Titularis($AANSPREEKCODE, $AANSPREEKPRIORITEIT, $ACHTERNAAM, $EMAIL, $GEBOORTEDATUM, $GSMNUMMER, $TITULARISNUMMER, $VOORNAAM)
    {
        $this->AANSPREEKCODE = $AANSPREEKCODE;
        $this->AANSPREEKPRIORITEIT = $AANSPREEKPRIORITEIT;
        $this->ACHTERNAAM = $ACHTERNAAM;
        $this->EMAIL = $EMAIL;
        $this->GEBOORTEDATUM = $GEBOORTEDATUM;
        $this->GSMNUMMER = $GSMNUMMER;
        $this->TITULARISNUMMER = $TITULARISNUMMER;
        $this->VOORNAAM = $VOORNAAM;
    }


}