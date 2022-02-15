<?php
namespace Reddit\Subreddit\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Subreddit_Usuario")
*/
class SubredditUsuario
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_subreddit_usuario;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_subreddit_usuario")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    protected $id_usuario;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Subreddit\model\Subreddit", inversedBy="id_subreddit_usuario")
    * @ORM\JoinColumn(name="id_subreddit", referencedColumnName="id_subreddit", nullable=false)
    */
    private $id_subreddit;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $moderador;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $criador;
}
