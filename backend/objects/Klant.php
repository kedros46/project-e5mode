<?php

/**
 * Created by PhpStorm.
 * User: Seagull
 * Date: 5/17/2016
 * Time: 10:43 AM
 */
class Klant
{
    var $ADRES;
    var $KAART;
    var $TITULARIS;

    public function Klant($ADRES, $KAART, $TITULARIS) {
        $this->ADRES = $ADRES;
        $this->KAART = $KAART;
        $this->TITULARIS = $TITULARIS;
    }
}