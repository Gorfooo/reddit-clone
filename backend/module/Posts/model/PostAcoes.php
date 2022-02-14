<?php
namespace Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Post_Acoes")
*/
class PostAcoes
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_post_acoes;

    /**
    * @ORM\ManyToOne(targetEntity="Post", inversedBy="id_post_acoes")
    * @ORM\JoinColumn(name="id_post", referencedColumnName="id_post", nullable=false)
    */
    protected $id_post;

    /**
    * @ORM\ManyToOne(targetEntity="Usuario\model\Usuario", inversedBy="id_post_acoes")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $compartilhado;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $ocultado;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $guardado;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $premiado;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $like_dislike;

    /**
    * @ORM\Column(type="date")
    *
    * @var string
    */
    private $like_dislike_date;
}
