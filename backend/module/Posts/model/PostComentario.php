<?php
namespace Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Post_Comentario")
*/
class PostComentario
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_comentario;

    /**
    * @ORM\ManyToOne(targetEntity="Post", inversedBy="id_comentario")
    * @ORM\JoinColumn(name="id_post", referencedColumnName="id_post", nullable=false)
    */
    private $id_post;

    /**
    * @ORM\ManyToOne(targetEntity="Usuario\model\Usuario", inversedBy="id_comentario")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="text")
    *
    * @var string
    */
    private $comentario;

    /**
    * @ORM\OneToMany(targetEntity="PostComentarioResposta", mappedBy="id_comentario")
    */
    private $id_resposta;
}
