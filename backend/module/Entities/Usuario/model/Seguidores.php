<?php
namespace Reddit\Usuario\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Seguidores")
*/
class Seguidores
{
    /**
    * @Orm\Id @ORM\Column(type="integer")
    * @ORM\OneToMany(targetEntity="Usuario", mappedBy="id_usuario")
    */
    protected $id_seguidor;
 
    /**
    * @Orm\Id @ORM\Column(type="integer")
    * @ORM\OneToMany(targetEntity="Usuario", mappedBy="id_usuario")
    */
    private $id_usuario_seguido;
}
