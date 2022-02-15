<?php
namespace Reddit\Usuario\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Bloqueado")
*/
class Bloqueado
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_bloqueador;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $id_bloqueado;
}
