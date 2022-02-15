<?php
namespace Reddit\Aplicacao\Model;

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
    private $id_denuncia;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Aplicacao\Model\MotivoDenuncia", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_motivo", referencedColumnName="id_motivo", nullable=false)
    */
    protected $id_motivo;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_usuario_denunciador", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario_denunciador;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_usuario_denunciado", referencedColumnName="id_usuario", nullable=true)
    */
    private $id_usuario_denunciado;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Posts\Model\Post", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_post", referencedColumnName="id_post", nullable=true)
    */
    private $id_post;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Subreddit\Model\Subreddit", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_subreddit", referencedColumnName="id_subreddit", nullable=true)
    */
    private $id_subreddit;

    /**
    * @ORM\Column(type="string", length=200)
    *
    * @var string
    */
    private $obs;
}
