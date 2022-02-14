<?php
namespace Aplicacao\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Denuncia")
*/
class Denuncia
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_motivo_denuncia;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $id_usuario_denunciador;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $id_usuario_denunciado;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $id_post_denunciado;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $id_subreddit_denunciado;

    /**
    * @ORM\Column(type="string", length=200)
    *
    * @var string
    */
    private $obs;
}
