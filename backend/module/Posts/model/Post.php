<?php
namespace Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Post")
*/
class Post
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_post;

    /**
    * @ORM\ManyToOne(targetEntity="Usuario\model\Usuario", inversedBy="id_post")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $conteudo;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $titulo;

    /**
    * @ORM\OneToMany(targetEntity="PostComentario", mappedBy="id_post")
    */
    private $id_comentario;

    /**
    * @ORM\OneToMany(targetEntity="PostAcoes", mappedBy="id_post")
    */
    private $id_post_acoes;
}
