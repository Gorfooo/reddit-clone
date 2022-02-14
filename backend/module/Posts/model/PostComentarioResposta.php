<?php
namespace Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Post_Comentario_Resposta")
*/
class PostComentarioResposta
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_resposta;

    /**
    * @ORM\ManyToOne(targetEntity="PostComentario", inversedBy="id_resposta")
    * @ORM\JoinColumn(name="id_comentario", referencedColumnName="id_comentario", nullable=false)
    */
    private $id_comentario;

    /**
    * @ORM\ManyToOne(targetEntity="Usuario\model\Usuario", inversedBy="id_resposta")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="text")
    *
    * @var string
    */
    private $resposta;
}
