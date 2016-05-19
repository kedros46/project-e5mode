<?php

/**
 * Created by PhpStorm.
 * User: Seagull
 * Date: 5/17/2016
 * Time: 10:35 AM
 */
class Request
{

    var $GEBRUIKER;
    var $HERKOMST;
    var $ISEIDINGELEZEN;
    var $ISJUISTADRES;
    var $TAALCODE;

    var $KLANT;

    public function Request($GEBRUIKER, $HERKOMST, $ISEIDINGELEZEN, $ISJUISTADRES, $KLANT, $TAALCODE) {
        $this->GEBRUIKER = $GEBRUIKER;
        $this->HERKOMST = $HERKOMST;
        $this->ISEIDINGELEZEN = $ISEIDINGELEZEN;
        $this->ISJUISTADRES = $ISJUISTADRES;
        $this->KLANT = $KLANT;
        $this->TAALCODE = $TAALCODE;
    }
}