<?php
namespace Reddit\Aplicacao\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Motivo_Denuncia")
*/
class MotivoDenuncia
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_motivo;

    /**
    * @ORM\Column(type="string", length=40)
    *
    * @var string
    */
    private $descricao;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Aplicacao\Model\Denuncia", mappedBy="id_motivo")
    */
    private $id_denuncia;
}
