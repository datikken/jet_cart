<?php
/**
 * Created by IntelliJ IDEA.
 * User: datikken
 * Date: 05.12.2020
 * Time: 03:30
 */

namespace App\Helpers;


class Converter
{

    function translit($s)
    {
        $s = (string)$s;
        $s = trim($s);
        $s = function_exists('mb_strtolower') ? mb_strtolower($s) : strtolower($s); // переводим строку в нижний регистр (иногда надо задать локаль)
        $s = strtr($s, array('а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'e', 'ж' => 'j', 'з' => 'z', 'и' => 'i', 'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'c', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'shch', 'ы' => 'y', 'э' => 'e', 'ю' => 'yu', 'я' => 'ya', 'ъ' => '', 'ь' => ''));
        $s = str_replace(' ', '_', $s);

        return $s;
    }

    function arrayObjKeyPairs($arr, $translit = true)
    {
        $oldArr = (array) $arr;
        $res = array();

        foreach ($oldArr as $obj) {
            foreach ($obj as $k => $v) {

                if ($translit === true) {
                    $string = $this->translit($k);
                } else {
                    $string = $k;
                }

                $newK = $string;
                $res[$newK] = trim($v);
            }
        }

        return strval(json_encode($res));
    }

    function arrObjToStr($arr)
    {
        $res = (array) $arr;
        $str = strval(json_encode($res));

        return $str;
    }

    function uniqueObjectKeysCvsValues($oldCape)
    {
        $result = array();

        if($oldCape) {
            foreach (json_decode($oldCape) as $item) {
                $br = $item->brand;
                $md = $item->model;

                if(!array_key_exists($br, $result)) {
                    $result[$br] = array();
                    array_push($result[$br], $md);
                } else {
                    array_push($result[$br], $md);
                }
            }
        }

        return $result;
    }
}
