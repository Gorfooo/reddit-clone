<?php
namespace Reddit\Subreddit\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Subreddit")
*/
class Subreddit
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_subreddit;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $sobre;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $banner;

    /**
    * @ORM\Column(type="string", length=60)
    *
    * @var string
    */
    private $nome;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Aplicacao\Model\Denuncia", mappedBy="id_subreddit")
    */
    private $id_denuncia;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Subreddit\Model\SolicitacaoModerador", mappedBy="id_subreddit")
    */
    private $id_solicitacao_moderador;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Subreddit\Model\SubredditRegras", mappedBy="id_subreddit")
    */
    private $id_regra;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Subreddit\Model\SubredditUsuario", mappedBy="id_subreddit")
    */
    private $id_subreddit_usuario;
}
