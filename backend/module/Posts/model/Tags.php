<?php
namespace Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Tags")
*/
class Tags
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_tag;

    /**
    * @ORM\Column(type="string", length=30)
    *
    * @var string
    */
    private $descricao;
}
