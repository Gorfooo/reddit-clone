<?php
namespace Subreddit\Model;

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
    protected $id_usuario;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
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
