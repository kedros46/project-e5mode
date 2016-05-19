<?php

/**
 * Created by PhpStorm.
 * User: Seagull
 * Date: 5/17/2016
 * Time: 10:51 AM
 */
class Kaart
{
    var $ISPERSONEEL;
    var $KAARTNUMMER;
    var $KORTINGSPERCENTAGE;
    
    public function Kaart($ISPERSONEEL, $KAARTNUMMER, $KORTINGSPERCENTAGE)
    {
        $this->ISPERSONEEL = $ISPERSONEEL;
        $this->KAARTNUMMER = $KAARTNUMMER;
        $this->KORTINGSPERCENTAGE = $KORTINGSPERCENTAGE;
    }


}